import React from "react";
import './toggle-nav.css';
const index = ({handleClick, ...otherProps}) => {
  return (
    <div id="toggle-btn" onClick={handleClick} {...otherProps}>
      <div class="toggle-btn-one"></div>
      <div class="toggle-btn-two"></div>
      <div class="toggle-btn-three"></div>
    </div>
  );
};

export default index;
