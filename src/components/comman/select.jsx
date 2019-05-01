import React from "react";

const Select = ({ name, lable, error, options }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <select className="form-control mb-3" name={name} id={name}>
        {options.map(g => (
          <option value={g._id} key={g._id}>
            {g.name}
          </option>
        ))}
      </select>

      {error && (
        <small className="text-danger my-2">
          <i className="fa fa-exclamation-triangle" aria-hidden="true" />
          &nbsp; {error}
        </small>
      )}
    </div>
  );
};

export default Select;
