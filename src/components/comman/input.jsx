import React from "react";

const Input = ({ name, lable, value,error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        autoFocus
        type="text"
        name={name}
        id={name}
        className="form-control"
        placeholder=""
        value={value}
        onChange={onChange}
      />

    { error &&  <small className="text-danger my-2">
        <i class="fa fa-exclamation-triangle" aria-hidden="true" />
        &nbsp; {error}
      </small>
  
    }
      </div>
  );
};

export default Input;
