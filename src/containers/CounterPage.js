import React from "react";
import CounterCurrentValue from "../components/CounterCurrentValue";
import CounterUpdater from "../components/CounterUpdater";
import StoredCounter from "../components/StoredCounters";

const CounterPage = (props)=>{
    return(
        <React.Fragment>
            <CounterCurrentValue {...props} />
            <br/>
            <CounterUpdater {...props} />
            <StoredCounter {...props} />
        </React.Fragment>
    )
}
export default CounterPage;