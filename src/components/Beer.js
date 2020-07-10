import React from "react";
import PropTypes from "prop-types";

function Beer(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)}>
        <h4> {props.brand} - {props.name} </h4>
        <p><em>Tapped {props.formattedShelfLife}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  id: PropTypes.string,
  formattedShelfLife: PropTypes.string,
  whenBeerClicked: PropTypes.func,
};

export default Beer;
