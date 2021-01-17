import React from "react";
import ReactDom from "react-dom";
import { shallow } from "enzyme";

import Input from "../../sharedComponents/Input";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Input />);
});

afterEach(() => {
  wrapper.update();
});

describe("Input", () => {
  it("should render basic input element without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Input />, div);
    ReactDom.unmountComponentAtNode(div);
  });
  it("should render placeholder", () => {
    const placeholder_text = "type anything here";
    const wrapper = shallow(<Input placeholder={placeholder_text} />);
    const input = wrapper.find('input');
   expect(input.props().placeholder).toEqual(placeholder_text);
  });
  it("should render correct type", () => {
    const type = "number";
    const wrapper = shallow(<Input type={type} />);
    const input = wrapper.find('input');
   expect(input.props().type).toEqual(type);
  });
  it("should render value", () => {
    const value = "oranges";
    const wrapper = shallow(<Input value={value} />);
    const input = wrapper.find('input');
   expect(input.props().value).toEqual(value);
  });
});
