const defaultState = {
    counterValue:5,
    values:[]
}

const CounterReducer = (state=defaultState,action) =>{
    switch(action.type){
        case "INCREMENT":{
            return {
                ...state,
                counterValue: state.counterValue + action.value
            }
        }
        case "DECREMENT":{
            return {
                ...state,
                counterValue: state.counterValue - action.value
            }
        }
        case "SAVE_COUNTER":{
            return {
                ...state,
                values: [...state.values,state.counterValue]
            }
        }
        case "INITIAL_COUNTERS":{
            return {
                ...state,
                values:[...action.counters,...state.values]
            }
        }
        default:{
            return state;
        }
    }
}
export default CounterReducer;