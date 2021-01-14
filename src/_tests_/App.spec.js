import React from "react";
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

import Header from "../components/Header";
import ShoppingList from "../components/ShoppingList";
import App from "../App";

let  wrapper = shallow(<App />);

beforeEach(() => {
  wrapper = shallow(<App />);
});

afterEach(() => {
  wrapper.update();
});

describe("App", () => {
  it("should contain a div", () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
  it("Contains one Header component", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  it("should contain one ShoppingList component", () => {
    expect(wrapper.find(ShoppingList)).toHaveLength(1);
  });
});
