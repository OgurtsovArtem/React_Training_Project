import React from "react";
import './ButtonClose.css';


function ButtonClose(props) {
    return(
        <div className="button-close" id={props.id}>
            <span className="button-close_top"></span>
            <span className="button-close_bot"></span>
        </div>
    )
}

export default ButtonClose