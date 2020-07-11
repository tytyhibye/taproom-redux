import React from "react";
import NewForm from "./NewForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditForm from "./EditForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class BeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pintCount: 124,
      selectedBeer: null,
      editing: false,
      timeTapped: 0
    };
  }

  componentDidMount() {
    this.tappedTimeUpdate = setInterval(() => 
    this.updateTimeSinceTapped(),
    600000
    );
  }

  componentWillUnmount(id) {
    const checkCount = this.props.masterBeerList[id];
    if(checkCount.pintCount === 0) {
    clearInterval(this.tappedTimeUpdate);
    }
  }

  updateTimeSinceTapped = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterBeerList).forEach(beer => {
      const newFormattedShelfLife = beer.timeTapped.fromNow();
      dispatch(a.updateTime(beer.id, newFormattedShelfLife));
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
  };

  
  handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = this.props;
    const action = a.addBeer(beerToEdit);
    dispatch(action);

    this.setState({
      editing: false,
      selectedBeer: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleBuyingPint = (id) => {
    const { dispatch } = this.props;
    const beerToSell = Object.values(this.props.masterBeerList).filter(beer => beer.id === id)
    const action = a.sellPint(beerToSell);
    console.log(beerToSell);
    console.log(beerToSell.pintCount);
    if (beerToSell.pintCount > 0) {
      dispatch(action);
    }
  };
  // handleDeletingBeer = (id) => {
  //   const { dispatch } = this.props;
  //   const action = a.deleteBeer(id);
  //   dispatch(action);
  //   this.setState({
  //     selectedBeer: null,
  //   });
  // };

    // const beerToSell = this.props.masterBeerList[id];
    // if (beerToSell.pintCount > 0) {
    //   beerToSell.pintCount -= 1;
    // }
    //   const editedMasterBeerList = this.state.masterBeerList
    //   this.setState({
    //     masterBeerList: editedMasterBeerList   
    // });

  handleRestocking = (id) => {
    const restockBeer = this.state.masterBeerList[id];
    restockBeer.pintCount = 124;
    restockBeer.timeTapped = 0;
    const editedMasterBeerList = this.state.masterBeerList

    this.setState({
      masterBeerList: editedMasterBeerList,
    });
  };

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBeer(id);
    dispatch(action);
    this.setState({
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
