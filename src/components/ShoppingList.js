import React, { Component } from "react";
import Button from "../sharedComponents/Button";
import Input from "../sharedComponents/Input";
import AddItem from "./AddItem";

import { DAFAULT_ARRAY_LENGTH, fieldTypes } from "../constants";
import shoppingList from "../assets/data.json";
import { validateName, validateQuantity } from "../validator";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToDisplay: [],
      error: [],
    };
  }
  componentDidMount() {
    const listToDisplay = [];
    for (let i = 1; i <= DAFAULT_ARRAY_LENGTH; i++) {
      const randomIndex = Math.floor(Math.random() * shoppingList.length);
      listToDisplay.push(shoppingList[randomIndex]);
    }
    this.setState({ listToDisplay });
  }
  onFieldChange = (e, item) => {
    const { listToDisplay } = this.state;
    const { name, value } = e.target;
    const index = listToDisplay.findIndex(
      (listItem) => listItem.id === item.id
    );
    if (value) {
      this.runValidation(name,value,item)
      if (name === fieldTypes.name) {
        listToDisplay[index]["error"] = {
          ...listToDisplay[index]["error"],
          nameError: null,
        };
      } else if (value && name === fieldTypes.quantity) {
        listToDisplay[index]["error"] = {
          ...listToDisplay[index]["error"],
          quantityError: null,
        };
      }
    }
    listToDisplay[index][name] = value;
    this.setState({ listToDisplay });
  };
  runValidation = (name,value,item) =>{
    const { listToDisplay } = this.state;
    let nameValidation = null;
    let quantityValidation = null;
    const index = listToDisplay.findIndex(
      (listItem) => listItem.id === item.id
    );
    if (name === fieldTypes.name) {
      nameValidation = validateName(value);
      listToDisplay[index]["error"] = {
        ...listToDisplay[index]["error"],
        nameError: nameValidation,
      }
    } else if (name === fieldTypes.quantity) {
      quantityValidation = validateQuantity(parseInt(value));
      listToDisplay[index]["error"] = {
        ...listToDisplay[index]["error"],
        quantityError: quantityValidation,
      };
    }
    this.setState({ listToDisplay });
  }
  onFieldBlur = (e, item) => {
    const { name, value } = e.target;
    this.runValidation(name,value,item)
  };
  onItemRemove = ( item) => {
    const { listToDisplay } = this.state;
    this.setState({
      listToDisplay: listToDisplay.filter(
        (listItem) => listItem.id !== item.id
      ),
    });
  };
  onItemAdd = (item) => {
    const {listToDisplay}=this.state
    const length = listToDisplay.length
    this.setState({listToDisplay:listToDisplay.concat({
      ...item,
      id:length+1
    })})
  };
  render() {
    const { listToDisplay } = this.state;
    if (!listToDisplay || listToDisplay.length === 0) {
      return null;
    }
    return (
      <div className="shoppingList">
        {listToDisplay.map((item, key) => {
          const fields = [
            {
              name: fieldTypes.name,
              value: item.name,
              type: "text",
              error: item.error,
              placeholder:'Enter name'
            },
            {
              name: fieldTypes.quantity,
              value: item.quantity,
              type: "number",
              error: item.error,
              placeholder:'Enter quantity'
            },
          ];
          return (
            <div className="shoppingList__item" key={key}>
              {fields.map((fieldItem, index) => {
                console.log("fieldItem", fieldItem);
                let errorObj = null;
                if (fieldItem.error) {
                  if (fieldItem.name === fieldTypes.name) {
                    errorObj = fieldItem.error.nameError;
                  } else if (fieldItem.name === fieldTypes.quantity) {
                    errorObj = fieldItem.error.quantityError;
                  }
                }
                return (
                  <>
                    <Input
                      name={fieldItem.name}
                      value={fieldItem.value}
                      key={index}
                      type={fieldItem.type}
                      item={item}
                      onChange={this.onFieldChange}
                      handleBlurInput={this.onFieldBlur}
                    />
                    <span className="error">
                      {errorObj ? errorObj.error : null}
                    </span>
                  </>
                );
              })}
              <Button
                title="Remove"
                onClick={() => this.onItemRemove(item)}
                id={key}
              />
            </div>
          );
        })}
        <AddItem list={listToDisplay} onItemAdd={this.onItemAdd} />
      </div>
    );
  }
}

export default ShoppingList;
