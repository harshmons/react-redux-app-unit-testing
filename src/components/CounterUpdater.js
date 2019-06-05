import React from "react";
import withI18n from "../HOC/withI18n";
const CounterUpdate = (props)=>{
    return(
        <div id="counter-updater">
            <button id="buttonIncrement" className="button" onClick={props.incrementHandler.bind(null,1)}>{props.i18n.buttonIncrement}</button>
            <button id="buttonDecrement" className="button" onClick={props.decrementHandler.bind(null,1)}>{props.i18n.buttonDecrement}</button>
            <button id="buttonIncrementBy10" className="button" onClick={props.incrementHandler.bind(null,10)}>{props.i18n.buttonIncrementBy10}</button>
            <button id="buttonDecrementBy5" className="button" onClick={props.decrementHandler.bind(null,5)}>{props.i18n.buttonDecrementBy5}</button>
            <button id="buttonSave" className="button" onClick={props.saveHandler}>{props.i18n.buttonSave}</button>
        </div>
    )
}

export default withI18n(CounterUpdate);
