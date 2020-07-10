import React from "react";
import NewForm from "./NewForm";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import EditForm from "./EditForm";

class BeerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      pintCount: 124,
      selectedBeer: null,
      editing: false,
    };
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(
      (beer) => beer.id === id
    )[0];
    this.setState({ selectedBeer: selectedBeer });
  };

  handleAddingNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      formVisibleOnPage: false,
      // editing: false,
    });
  };

  handleClick = () => {
    if (this.state.selectedBeer !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter((beer) => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
      masterBeerList: editedMasterBeerList,
      editing: false,
      selectedBeer: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleBuyingAPint = (id) => {
    const purchasedPint = this.state.masterBeerList.filter(
      (beer) => beer.id === id
    )[0];
    if (purchasedPint.pintCount === 0) {
      return purchasedPint.pintCount;
    } else {
      purchasedPint.pintCount -= 1;
    }
    const editedMasterBeerList = this.state.masterBeerList
      .filter((beer) => beer.id !== this.state.selectedBeer.id)
      .concat(purchasedPint);
    this.setState({
      masterBeerList: editedMasterBeerList,
    });
  };

  handleRestocking = (id) => {
    const restockBeer = this.state.masterBeerList.filter(
      (beer) => beer.id === id
    )[0];
    restockBeer.pintCount = 124;
    const editedMasterBeerList = this.state.masterBeerList
      .filter((beer) => beer.id !== this.state.selectedBeer.id)
      .concat(restockBeer);
    this.setState({
      masterBeerList: editedMasterBeerList,
    });
  };

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(
      (beer) => beer.id !== id
    );
    this.setState({
      masterBeerList: newMasterBeerList,
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
      currentlyVisibleState = (
        <BeerDetail
          beer={this.state.selectedBeer}
          onClickingDelete={this.handleDeletingBeer}
          onClickingEdit={this.handleEditClick}
          onClickingSell={this.handleBuyingAPint}
          onClickingRestock={this.handleRestocking}
        />
      );
      buttonText = "Return to Beer List";
      
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewForm onNewBeerCreation={this.handleAddingNewBeerToList} />
        );
        buttonText = "Return to List";
      } else {
        currentlyVisibleState = (
          <BeerList
            beerList={this.state.masterBeerList}
            onBeerSelection={this.handleChangingSelectedBeer}
            />
            );
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

export default BeerControl;
