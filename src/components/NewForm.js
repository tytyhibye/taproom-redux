import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

function NewForm(props) {
  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      description: event.target.description.value,
      id: v4(),
      pintCount: 124,
      timeTapped: new Moment(),
      formattedShelfLife: new Moment().fromNow()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        beer={{}}
        formSubmissionHandler={handleNewFormSubmission}
        buttonText="Add Beer" />
    </React.Fragment>
  )
}
NewForm.propTypes = {
  onNewCreation: PropTypes.func
};

export default NewForm;