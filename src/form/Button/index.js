import React from 'react'
import './button.css'

const index = ({text, type, onClick, classes, ...otherProps}) => {
  return (
    <button type={type} className={classes} onClick={onClick} {...otherProps}>{text}</button>
  )
}

export default index