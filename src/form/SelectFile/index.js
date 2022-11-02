import React from "react";
import "./selectfile.css";

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
    <div className={`variants selectfile-wrap ${classes}`}>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
      <label htmlFor="file-input" className="selectfile-btn">
        {<span className="add-icon">+</span>}
      </label>
    </div>
  );
};

export default index;
