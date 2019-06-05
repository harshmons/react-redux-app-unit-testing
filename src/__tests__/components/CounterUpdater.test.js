import React from 'react';
import CounterUpdater from "../../components/CounterUpdater"
import { shallow } from "enzyme";

const props={
    incrementHandler:jest.fn(),
    decrementHandler:jest.fn(),
    saveHandler:jest.fn(),
}
const enzymeWrapper = shallow(<CounterUpdater {...props}/>);

const i18nContextData = {
  buttonIncrement:"SAMPLE INCREMENT",
  buttonDecrement:"SAMPLE DECREMENT",
  buttonIncrementBy10:"SAMPLE INCREMENT BY 10",
  buttonDecrementBy5:"SAMPLE DECREMENT BY 5",
  buttonSave:"SAMPLE SAVE"
}

describe("<CounterUpdater />", () => {
  const wrappedEnzymeWrapper = shallow(enzymeWrapper.props().children(i18nContextData));
  test("should render a div tag with id counter-updater", () => {
    expect(wrappedEnzymeWrapper.find("#counter-updater")).toHaveLength(1);
  });

  test("should render 5 button tags", () => {
    expect(wrappedEnzymeWrapper.find("button")).toHaveLength(5);
  });

  test("should have the button names passed as i18nContextData",() => {
    for(let key in i18nContextData){
      expect(wrappedEnzymeWrapper.find(`#${key}`).text()).toBe(i18nContextData[key])
    }
  })

  test("should call incrementHandler on clicking the 'INCREMENT' button by passing 1 as argument",() => {
    wrappedEnzymeWrapper.find("#buttonIncrement").simulate("click");
    expect(props.incrementHandler.mock.calls[0][0]).toBe(1);
  })

  test("should call decrementHandler on clicking the 'DECREMENT' button by passing 1 as argument",() => {
    wrappedEnzymeWrapper.find("#buttonDecrement").simulate("click");
    expect(props.decrementHandler.mock.calls[0][0]).toBe(1);
  })

  test("should call incrementHandler on clicking the 'INCREMENT BY 10' button by passing 10 as argument",() => {
    wrappedEnzymeWrapper.find("#buttonIncrementBy10").simulate("click");
    expect(props.incrementHandler.mock.calls[1][0]).toBe(10);
  })

  test("should call decrementHandler on clicking the 'DECREMENT BY 5' button by passing 5 as argument",() => {
    wrappedEnzymeWrapper.find("#buttonDecrementBy5").simulate("click");
    expect(props.decrementHandler.mock.calls[1][0]).toBe(5);
  })

  test("should call saveHandler on clicking the 'SAVE' button without any argument",() => {
    wrappedEnzymeWrapper.find("#buttonSave").simulate("click");
    expect(props.saveHandler.mock.calls[0][0]).toBeUndefined();
  })
});
