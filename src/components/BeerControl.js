import React from "react";
import NewForm from "./NewForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditForm from "./EditForm";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class BeerControl extends React.Component {

  componentDidMount() {
    this.tappedTimeUpdate = setInterval(() => 
    this.updateTimeSinceTapped(),
    600000
    );
  }

  componentWillUnmount(id) {
    const checkCount = Object.values(this.props.masterBeerList).filter(beer => beer.id === id)[0];
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
    if (this.props.selectedBeer !== null) {
      const { dispatch } = this.props;
      const action = a.toggleEditForm();

      if (this.props.editing === true) {
        dispatch(action);
      }
      const action2 = a.deselectBeer();
      dispatch(action2);

    } else {
      const { dispatch } = this.props;
      const action2 = a.toggleEditForm();

      if (this.props.editing === true) {
        dispatch(action2);
      }
      const action = a.toggleForm();
      dispatch(action);
    }
  };

  handleChangingSelectedBeer = (id) => {
   const { dispatch } = this.props;
   const action = a.selectBeer(id);
   dispatch(action);
  };

  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const action = a.addBeer(newBeer);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }
  
  handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = this.props;

    const action = a.addBeer(beerToEdit);
    dispatch(action);
    const action2 = a.toggleEditForm();
    dispatch(action2);
    const action3 = a.deselectBeer();
    dispatch(action3);
  };

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditForm();
    dispatch(action);
  };

  handleSellingPint = (id) => {

  const beerToSell = Object.values(this.props.masterBeerList).filter(beer => beer.id === id)[0];
  const { dispatch } = this.props;
  const action = a.sellPint(id);

  if (beerToSell.pintCount === 0) {
    beerToSell.countWarning = "Sold Out."
    dispatch(action);
  } else if (beerToSell.pintCount <= 20) {
    beerToSell.countWarning = "Getting Low.."
    dispatch(action);
  } else if (beerToSell.pintCount <= 62) {
    beerToSell.countWarning = "Over Halfway Gone.."
    dispatch(action)
  } else{
    dispatch(action);
  }
};

  handleRestocking = (id) => {
    const { dispatch } = this.props;
    const action = a.restockBeer(id);
    dispatch(action);
  };

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteBeer(id);
    dispatch(action);
    const action2 = a.deselectBeer();
    dispatch(action2);
    };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let thisSelectedBeer;

    thisSelectedBeer = Object.values(this.props.masterBeerList)
    .filter(beer => beer.id === this.props.selectedBeer);

    if (this.props.editing) {
      currentlyVisibleState = <EditForm beer={thisSelectedBeer[0]} onEdit={this.handleEditingBeerInList} />
      buttonText = "Return to Beer List";
    } else if (this.props.selectedBeer != null) {
      currentlyVisibleState = 
        <BeerDetail
          beer={this.props.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleSellingPint}
          onClickingRestock={this.handleRestocking}
        />
      buttonText = "Return to Beer List";
      
    } else if (this.props.formVisibleOnPage === false) { 
      currentlyVisibleState = 
        <BeerList
          beerList={this.props.masterBeerList} // might need to be props
          onBeerSelection={this.handleChangingSelectedBeer}
          />
      buttonText = "Add Beer!";
    } else if (this.props.formVisibleOnPage === true) {
        currentlyVisibleState = 
        <NewForm
          onNewBeerCreation={this.handleAddingNewBeerToList} />
      buttonText = "Return to List";
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
  formVisibleOnPage: PropTypes.bool,
  masterBeerList: PropTypes.object,
  editing: PropTypes.bool,
  selectedBeer: PropTypes.string
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    masterBeerList: state.masterBeerList,
    editing: state.editing,
    selectedBeer: state.selectedBeer
  }
}

BeerControl = connect(mapStateToProps)(BeerControl);

export default BeerControl;
