import React from "react";
import NewForm from "./NewForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditForm from "./EditForm";
import { connect } from 'react-redux';
// import Beer from './Beer';
import PropTypes from 'prop-types';
import * as a from './../actions';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // masterBeerList: [],
      pintCount: 124,
      selectedBeer: null,
      editing: false,
      timeTapped: 0
    };
  }

  componentDidMount() {
    this.tappedTimeUpdate = setInterval(() => 
    this.updateTimeSinceTapped(),
    60000
    );
  }

  componentWillUnmount() {
    console.log('component unmounted!');
    clearInterval(this.tappedTimeUpdate);
  }

  updateTimeSinceTapped = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterBeerList).forEach(beer => {
      const newFormattedShelfLife = beer.timeTapped.fromNow(true);
      const action = a.updateTime(beer.id, newFormattedShelfLife);
      dispatch(action);
    });
  }

  handleClick = () => {
    if (this.state.selectedBeer !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      // this.setState((prevState) => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage,
      // }));
    }
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.props.masterBeerList[id];
    this.setState({ selectedBeer: selectedBeer });
  };

  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addBeer(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
    // const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    // this.setState({
    //   masterBeerList: newMasterBeerList,
    //   formVisibleOnPage: false,
      // editing: false,
    // });
  };

  
  handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBeer(beerToEdit);
    dispatch(action);
    // const editedMasterBeerList = this.state.masterBeerList
    //   .filter((beer) => beer.id !== this.state.selectedBeer.id)
    //   .concat(beerToEdit);
    this.setState({
      // masterBeerList: editedMasterBeerList, // might need to comment out
      editing: false,
      selectedBeer: null,
    });
  };

  handleEditClick = () => {
    // console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleBuyingPint = (id) => {
    const purchasedPint = this.state.masterBeerList.filter(
      (beer) => beer.id === id
    )[0];
    if (purchasedPint.pintCount === 0) {
      return purchasedPint.pintCount;
    } else {
      purchasedPint.pintCount -= 1;
    }
    const editedMasterBeerList = this.state.masterBeerList
      // .filter((beer) => beer.id !== this.state.selectedBeer.id)
      // .concat(purchasedPint);
    this.setState({
      masterBeerList: editedMasterBeerList,
    });
  };

  handleRestocking = (id) => {
    const restockBeer = this.state.masterBeerList[id];
    restockBeer.pintCount = 124;
    restockBeer.timeTapped = 0;
    const editedMasterBeerList = this.state.masterBeerList
      // .filter((beer) => beer.id !== this.state.selectedBeer.id)
      // .concat(restockBeer);
    this.setState({
      masterBeerList: editedMasterBeerList,
    });
  };

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBeer(id);
    dispatch(action);
    // const newMasterBeerList = this.state.masterBeerList.filter(
    //   (beer) => beer.id !== id
    // );
    this.setState({
      // masterBeerList: newMasterBeerList,
      selectedBeer: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditForm beer={this.state.selectedBeer} onEdit={this.handleEditingBeerInList} />
      buttonText = "Return to Beer List";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = 
        <BeerDetail
          beer={this.state.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleBuyingPint}
          onClickingRestock={this.handleRestocking}
        />
      buttonText = "Return to Beer List";
      
    } else if (this.props.formVisibleOnPage) { 
      currentlyVisibleState = 
        <NewForm
          onNewBeerCreation={this.handleAddingNewBeerToList} />
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = 
        <BeerList
          beerList={this.props.masterBeerList} // might need to be props
          onBeerSelection={this.handleChangingSelectedBeer}
          />
      buttonText = "Add Beer!";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn" onClick={this.handleClick}>
          {buttonText}
        </button>
      </React.Fragment>
    );
  }
}

BeerControl.propTypes = {
  masterBeerList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    masterBeerList: state.masterBeerList
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;
