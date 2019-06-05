import React from "react";
import {shallow} from "enzyme";
import CounterPage from "../../containers/CounterPage";
import CounterCurrentValue from "../../components/CounterCurrentValue";
import CounterUpdater from "../../components/CounterUpdater";
import StoredCounter from "../../components/StoredCounters";

const enzymeWrapper = shallow(<CounterPage />);
describe("<CounterPage />",()=>{
    test("should render CounterPage",()=>{
        expect(enzymeWrapper).toBeDefined();
    })

    test("should render CounterCurrentValue",()=>{
        expect(enzymeWrapper.find(CounterCurrentValue)).toBeDefined();
    })

    test("should render CounterUpdater",()=>{
        expect(enzymeWrapper.find(CounterUpdater)).toBeDefined();
    })

    test("should render StoredCounter",()=>{
        expect(enzymeWrapper.find(StoredCounter)).toBeDefined();
    })
})
