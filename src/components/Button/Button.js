import React from "react";
import './Button.css'

function Button(props) {
    let className = props.className || '';
    return(
        <button type="submit" className={`${className} button button__presets button-submith`} >{props.name}</button>
    )
}

export default Button;