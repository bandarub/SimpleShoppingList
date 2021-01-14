import React from "react";
import { shallow } from "enzyme";
import { DAFAULT_ARRAY_LENGTH } from "../../constants";

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
  it("fetches data from mock json file and renders them on mount", done => {
    state = wrapper.instance().state;
    expect(state.listToDisplay.length).toEqual(DAFAULT_ARRAY_LENGTH);
    done();
  });
});
