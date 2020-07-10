import React from "react";
import Beer from "./Beer";
import PropTypes from "prop-types";

function BeerList(props) {
  return (
    <React.Fragment>
      <h3>Beer List</h3>
      {props.beerList.length > 0 ? (
        Object.values(props.beerList).map((beer) => (
          <Beer
            whenBeerClicked={props.onBeerSelection}
            name={beer.name}
            brand={beer.brand}
            price={beer.location}
            abv={beer.level}
            description={beer.description}
            pintCount={beer.pintCount}
            formattedShelfLife={beer.formattedShelfLife}
            id={beer.id}
            key={beer.id}
          />
        ))
      ) : (
        <h2>No Beers Available!</h2>
      )}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func,
};

export default BeerList;
