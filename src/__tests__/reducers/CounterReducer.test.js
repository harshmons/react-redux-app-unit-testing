import CounterReducer from "../../reducers/CounterReducer";

const defaultState = {
    counterValue:5,
    values:[]
}

describe("Reducer",()=>{
    test("should return default state when state is not undefined",()=>{
        expect(CounterReducer(undefined,{type:"DUMMY_ACTION"})).toEqual(defaultState);
    })
    
    test("should return default state for DUMMY_ACTION action type",()=>{
        expect(CounterReducer(undefined,{type:"DUMMY_ACTION"})).toEqual(defaultState);
    })

    test("should return expected state for INCREMENT action type and specific state",()=>{
        const previousState={
            counterValue:10,
            values:[]
        }
        const action = {
            type:"INCREMENT",
            value:1
        }
        const expectedState={
            counterValue:11,
            values:[]
        }
        expect(CounterReducer(previousState,action)).toEqual(expectedState);
    })

    test("should return expected state for DECREMENT action type and specific state",()=>{
        const previousState={
            counterValue:10,
            values:[]
        }
        const action = {
            type:"DECREMENT",
            value:1
        }
        const expectedState={
            counterValue:9,
            values:[]
        }
        expect(CounterReducer(previousState,action)).toEqual(expectedState);
    })

    test("should return expected state for SAVE_COUNTER action type and specific state",()=>{
        const previousState={
            counterValue:10,
            values:[1]
        }
        const action = {
            type:"SAVE_COUNTER"
        }
        const expectedState={
            counterValue:10,
            values:[1,10]
        }
        expect(CounterReducer(previousState,action)).toEqual(expectedState);
    })

    test("should return expected state for INITIAL_COUNTERS action type and specific state",()=>{
        const previousState={
            counterValue:10,
            values:[1]
        }
        const action = {
            type:"INITIAL_COUNTERS",
            counters:[3,4]
        }
        const expectedState={
            counterValue:10,
            values:[3,4,1]
        }
        expect(CounterReducer(previousState,action)).toEqual(expectedState);
    })
})