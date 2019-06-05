import React from 'react';
import StoredCounters from "../../components/StoredCounters"
import { shallow } from "enzyme";

const props={
    values:[1,2]
}
const enzymeWrapper = shallow(<StoredCounters {...props}/>);

describe("<StoredCounters />", () => {
  test("should render a div tag with id stored-counters", () => {
    expect(enzymeWrapper.find("#stored-counters")).toHaveLength(1);
  });

  test("should render 2 li tags", () => {
    expect(enzymeWrapper.find("li")).toHaveLength(2);
  });
});
