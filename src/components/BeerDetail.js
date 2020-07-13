import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props) {
  const { beer, onClickingDelete, onClickingSell, onClickingRestock } = props;
  return (
    <React.Fragment>
      <h1>Beer Details</h1>
      <p>Name: {beer.name}</p>
      <p>Brewery: {beer.brand}</p>
      <p>Price: $ {beer.price}</p>
      <p>ABV: {beer.abv} %</p>
      <p>Flavor Profile: {beer.description}</p>
      <button className="btn" onClick={props.onClickingEdit}>
        Edit Details
      </button>
      <button className="btn" onClick={() => onClickingDelete(beer.id)}>
        Delete Beer
      </button>
      <hr />
      <p>Pints Left in Keg: {beer.pintCount}  <em>{props.countWarning}</em></p>
      <button className="btn" onClick={() => onClickingSell(beer.id)}>
        Sell a pint
      </button>
      <hr />
      <button className="btn" onClick={() => onClickingRestock(beer.id)}>
        Tap Another Keg
      </button>
    </React.Fragment>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingRestock: PropTypes.func,
};

export default BeerDetail;
