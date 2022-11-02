import React from "react";
import "./navbar.css";
const index = ({ children, classes, onClick, ...otherProps }) => {
  return (
    <nav className={classes} onClick={onClick} {...otherProps}>
      {children}
    </nav>
  );
};

export default index;
