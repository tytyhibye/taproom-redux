import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditForm(props) {
  const { beer } = props;

  function handleEditFormSubmission(event) {
    event.preventDefault();
    props.onEdit({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, abv: event.target.abv.value, description: event.target.description.value, id: beer.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}

EditForm.propTypes = {
  onEdit: PropTypes.func
}

export default EditForm;