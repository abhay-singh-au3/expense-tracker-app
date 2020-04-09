import React from 'react';

const FormInput = ({ handleChange, label, ...restProps }) => (
  <div className="form-group">
    <label>{label}</label>
    <input className="form-control" onChange={handleChange} {...restProps} />
  </div>
);

export default FormInput;
