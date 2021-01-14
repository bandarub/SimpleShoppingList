import React from "react";
import ReactDom from "react-dom";
import { shallow,mount } from "enzyme";

import Button from "../../sharedComponents/Button";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Button />);
});

afterEach(() => {
  wrapper = shallow(<Button />);
  wrapper.update();
});

describe("Button", () => {
  it("should render basic button element without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("on clicking, a function should be triggered on click event", () => {
    const fn = jest.fn();
    const wrapper = mount(<Button onClick={fn} />)
    wrapper.find('button').simulate('click');
    expect(fn).toHaveBeenCalled();
  });
});
