import React from "react";

const Input = ({name,lable,value,onChange}) => {
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
      {/* <small  className="text-muted">Help text</small> */}
    </div>
  );
};

export default Input;
