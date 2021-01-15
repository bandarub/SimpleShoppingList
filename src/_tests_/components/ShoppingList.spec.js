import React from "react";
import { shallow } from "enzyme";
import { DAFAULT_ARRAY_LENGTH } from "../../constants";
import shoppingList from "../../assets/data.json";

import ShoppingList from "../../components/ShoppingList";

let wrapper;
let state;

beforeEach(() => {
  wrapper = shallow(<ShoppingList />);
  setTimeout(() => {
    wrapper.update();
  });
});

afterEach(() => {
  wrapper.update();
});

describe("ShoppingList", () => {
  it("fetches data from mock json file and renders them on mount", () => {
    state = wrapper.instance().state;
    expect(state.listToDisplay.length).toEqual(DAFAULT_ARRAY_LENGTH);
  });
  it("remove function should work", () => {
    state = wrapper.instance().state;
    const listToDisplay = shoppingList;
    wrapper.setState({ listToDisplay });
    const item = listToDisplay[0];
    const button = wrapper.find("Button[id=0]");
    button.simulate("click", {
      item,
    });
    const updatedState = wrapper.state();
    expect(updatedState.listToDisplay.length).toEqual(listToDisplay.length - 1);
  });

});
