import React from "react";
import "./input.css";

const index = ({
  type,
  classes,
  handleChange,
  label,
  name,
  value,
  required,
  ...otherProps
}) => {
  return (
    <div className="input-wrap">
      <input
        className={classes}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder=" "
        onChange={handleChange}
        {...otherProps}
      />
      <div className="label-required">
        {label && <label htmlFor={name}> {label} </label>}
        {required && <span className="required">*</span>}
      </div>
    </div>
  );
};

export default index;
