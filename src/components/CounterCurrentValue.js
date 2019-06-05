import React from "react";
import "../styles/App.css";
const CounterCurrentvalue = (props) =>{
    return(
        <div className="currentValueContainer">
            Counter current value : <strong> {props.counterValue} </strong>
        </div>    
    )
}

export default CounterCurrentvalue;