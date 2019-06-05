import React from 'react';
import CounterCurrentValue from "../../components/CounterCurrentValue"
import { shallow } from "enzyme";

const enzymeWrapper = shallow(<CounterCurrentValue />);

describe("<CounterCurrentValue />", () => {
  test("should render passed props counterValue", () => {
    const props = {
        counterValue:10
    }
    enzymeWrapper.setProps({
        ...props
    })
    expect(enzymeWrapper.text()).toBe("Counter current value :  " + props.counterValue + " ");
  });

  test("should matches the stored snapshot",()=>{
    expect(enzymeWrapper.text()).toMatchSnapshot();
  })
});
