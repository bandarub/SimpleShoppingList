import React from "react";
import { shallow } from "enzyme";

import AddItem from "../../components/AddItem";
import ShoppingList from "../../components/ShoppingList";

let wrapper;
let state;

beforeEach(() => {
  wrapper = shallow(<AddItem onItemAdd={jest.fn} />);
});

afterEach(() => {
  wrapper.update();
});

describe("AddItem", () => {
  it("should have initial name, quantity and error values", () => {
    state = wrapper.instance().state;
    expect(state.name).toEqual("");
    expect(state.quantity).toEqual(null);
    expect(state.error).toEqual([]);
  });
  it("should change the state value 'name' after changing the input value", () => {
    state = wrapper.instance().state;
    const newValue = "honey";
    const input = wrapper.find("Input[name='name']");
    input.simulate("change", { target: { value: newValue, name: "name" } });
  });
  it("should change the state value 'quantity' after changing the input value", () => {
    state = wrapper.instance().state;
    const newValue = 1;
    const input = wrapper.find("Input[name='quantity']");
    input.simulate("change", { target: { value: newValue, name: "quantity" } });
  });
  it("should render a Button component to add", () => {
    expect(wrapper.find("Button[id='addItem']").exists()).toBe(true);
  });
  it("the default value for both fields should be empty", () => {
    expect(wrapper.find('Input[name="name"]').prop("value")).toBe("");
    expect(wrapper.find('Input[name="quantity"]').prop("value")).toBe(null);
  });
  it("should have error if name is not string", () => {
    const inputName = wrapper.find("Input[name='name']");
    const inputQuantity = wrapper.find("Input[name='quantity']");
    inputName.simulate("change", { target: { value: 123, name: "name" } });
    inputQuantity.simulate("change", {
      target: { value: 1, name: "quantity" },
    });
    wrapper.find("Button[id='addItem']").simulate("click");
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("should have error if quantity is not number", () => {
    const inputName = wrapper.find("Input[name='name']");
    const inputQuantity = wrapper.find("Input[name='quantity']");
    inputName.simulate("change", { target: { value: "test", name: "name" } });
    inputQuantity.simulate("change", {
      target: { value: test, name: "quantity" },
    });
    wrapper.find("Button[id='addItem']").simulate("click");
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("add function should work", () => {
    state = wrapper.instance().state;
    wrapper.setState({ addedItem: null, name: "test", quantity: 1 });
    const item = {
      name: "test",
      quantity: 1,
    };
    const button = wrapper.find("Button[id='addItem']");
    button.simulate("click");
    const updatedState = wrapper.state();
    expect(updatedState.addedItem).toEqual(item);
    jest.spyOn(window, 'alert').mockImplementation(() => {});

  });
});
