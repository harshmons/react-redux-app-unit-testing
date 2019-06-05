import React from "react";
import {connect} from "react-redux";
import CounterPage from "./CounterPage";
import actions from "../actions/Counters";

class CounterContainer extends React.Component {
    componentDidMount(){
        this.props.getInitialCountersHandler();
    }
    render() {
        return( <CounterPage {...this.props}  />);
    }
}

const mapStateToProps = (state)=>{
    return{
        ...state
    }
}

const maptDispatchToProps = (dispatch)=>{
    return {
        getInitialCountersHandler:()=>dispatch(actions.getStoredCounters()),
        incrementHandler:(value)=> dispatch(actions.increment(value)),
        decrementHandler:(value)=> dispatch(actions.decrement(value)),
        saveHandler:()=> dispatch(actions.saveCounter())
    }
}
export default connect(mapStateToProps,maptDispatchToProps)(CounterContainer);