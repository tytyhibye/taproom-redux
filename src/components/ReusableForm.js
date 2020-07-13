import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Beer' />
          <br/>
        <input
          type='text'
          name='brand'
          placeholder='Name of Brewery' />
          <br/>
        <input
          type='number'
          name='price'
          placeholder='Price per pint'
          min='0' />
          <br/>
        <input
          type='number'
          name='abv'
          placeholder='ABV %'
          min='0' />
          <br/>
        <textarea
          type='text'
          name='description'
          placeholder='Flavor Profile' />
          <br/>
          <input
          type='hidden'
          name='pintCount'
          value='124' />
        <button className="btn" type='submit'>{props.buttonText}</button>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;