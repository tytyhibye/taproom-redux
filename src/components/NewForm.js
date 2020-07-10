import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewFormSubmission}
        buttonText="Add Beer" />
    </React.Fragment>
  );
  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, description: event.target.description.value, pintCount: 124, id: v4() });
  }
}
NewForm.propTypes = {
  onNewCreation: PropTypes.func
};

export default NewForm;