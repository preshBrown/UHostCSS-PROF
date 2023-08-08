import React from "react"
import "./CustomButtons.css"

const CustomButtons = (props) => {
  return (
    <button className={["Custom__Button", `${props.btnType}`].join(' ')}
        onClick={props.clicked}
        disabled={props.disabled}>
        {props.children}
    </button>
  )
}

export default CustomButtons