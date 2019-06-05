import fetchStoredCounters from "../fetchers/Counters";

const increment = (value) =>{
    return{
        type:"INCREMENT",
        value
    }
}
const decrement = (value) =>{
    return{
        type:"DECREMENT",
        value
    }
}
const saveCounter = () =>{
    return{
        type:"SAVE_COUNTER",
    }
}
const storeInitialCounters = (counters) =>{
    return{
        type:"INITIAL_COUNTERS",
        counters
    }
}

const getStoredCounters= () =>{
    return dispatch =>{
        return fetchStoredCounters()
        .then(counters=>dispatch(storeInitialCounters(counters)))
    }
}


export default {
    increment,
    decrement,
    saveCounter,
    getStoredCounters
}