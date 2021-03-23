import React from "react";
import './Button.css'

function Button(props) {
    let className = props.className || null;
    let id = props.id || null;
    let click = props.function || null;
    return(
        <button 
            type="submit"  
            className={`${className} button button__presets button-submith`} 
            id={id}
            onClick={click}
        >
            {props.name} 
        </button>
    )
}

export default Button;