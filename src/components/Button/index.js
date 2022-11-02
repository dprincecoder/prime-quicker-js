import React from 'react'
import './button.css'

const index = ({text, onClick, classes, ...otherProps}) => {
  return (
    <button className={classes} onClick={onClick} {...otherProps}>{text}</button>
  )
}

export default index