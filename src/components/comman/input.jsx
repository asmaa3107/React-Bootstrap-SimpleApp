import React from "react";
//...rest opertator >> send every thing shared on form component wich useing Input class
const Input = ({ name, lable, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        placeholder=""
      />

      {error && (
        <small className="text-danger my-2">
          <i className="fa fa-exclamation-triangle" aria-hidden="true" />
          &nbsp; {error}
        </small>
      )}
    </div>
  );
};

export default Input;
