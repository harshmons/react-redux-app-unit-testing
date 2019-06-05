import React from "react";
import {shallow} from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import CounterContainer from "../../containers/CounterContainer"
import CounterPage from "../../containers/CounterPage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

const mockStore = configureStore([thunk]);
const intialState = {
    counterValue:5,
    values:[]
}


const mockedResponse = {
    "storedValues":[2,3]
}

mock
.onGet("/storedCounters.json")
.reply(200,mockedResponse)

describe("<CounterContainer />",()=>{
    let enzymeWrapper;
    let store;
    beforeEach(()=>{
        store = mockStore(intialState);
        enzymeWrapper = shallow(<CounterContainer store={store}/>);
    })
    
    test("should render CounterPage",()=>{    
        expect(enzymeWrapper.dive().dive().find(CounterPage)).toHaveLength(1)
    })

    test("Should dispatch getInitialCountersHandler action from props maped from mapDispatchToProps", () => {
        const expectedActions = [{
            type: 'INITIAL_COUNTERS', 
            counters: mockedResponse.storedValues
        }];
        enzymeWrapper.dive().props().getInitialCountersHandler().then(()=>{
            // NOTE - We cannot assert store state. as this redux-mock-store library doesn't update the store
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test("Should dispatch incrementHandler action from props maped from mapDispatchToProps", () => {
        enzymeWrapper.dive().props().incrementHandler(1);
        const expectedActions = [{
          type: "INCREMENT",
          value: 1,
        }];
        // NOTE - We cannot assert store state. as this redux-mock-store library doesn't update the store
        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Should dispatch decrementHandler action from props maped from mapDispatchToProps", () => {
        enzymeWrapper.dive().props().decrementHandler(1);
        const expectedActions = [{
          type: "DECREMENT",
          value: 1,
        }];
        // NOTE - We cannot assert store state. as this redux-mock-store library doesn't update the store
        expect(store.getActions()).toEqual(expectedActions);
    });

    test("Should dispatch saveHandler action from props maped from mapDispatchToProps", () => {
        enzymeWrapper.dive().props().saveHandler();
        const expectedActions = [{
           type:"SAVE_COUNTER"
        }];
        // NOTE - We cannot assert store state. as this redux-mock-store library doesn't update the store
        expect(store.getActions()).toEqual(expectedActions);
    });


})
