import actions from "../../actions/Counters";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const DEFAULT_STATE =  {
    counterValue:5,
    values:[]
}
const store = mockStore(DEFAULT_STATE);
const mock = new MockAdapter(axios);

describe("Action Creators",()=>{
    test("increment action creator return expected action",()=>{
        const expectedAction = {
            type:"INCREMENT",
            value:5
        }
        expect(actions.increment(5)).toEqual(expectedAction);
    })

    test("decrement action creator return expected action",()=>{
        const expectedAction = {
            type:"DECREMENT",
            value:5
        }
        expect(actions.decrement(5)).toEqual(expectedAction);
    })

    test("saveCounter action creator return expected action",()=>{
        const expectedAction = {
            type:"SAVE_COUNTER",
        }
        expect(actions.saveCounter()).toEqual(expectedAction);
    })

    test("getStoredCounters action creator return expected action",()=>{
        
        const mockedResponse = {
            "storedValues":[12,13]
        }
        
        mock
        .onGet("/storedCounters.json")
        .reply(200,mockedResponse)
        
        const expectedResponse = {
            type:"INITIAL_COUNTERS",
            counters:mockedResponse.storedValues
        }
        
        store
        .dispatch(actions.getStoredCounters())
        .then((response)=>{
            expect(response).toEqual(expectedResponse);
        })
    })
})