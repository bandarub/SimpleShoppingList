import React, { Component } from "react";
import Input from "../sharedComponents/Input";
import Button from "../sharedComponents/Button";

import { validateName, validateQuantity } from "../validator";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: null,
      error: [],
      addedItem: null,
    };
  }
  onFieldChange = (e) => {
    const { name, value } = e.target;
    if (value) {
      this.setState({ error: [] });
    }
    this.setState({ [name]: value });
  };
  formInvalid = () => {
    const { name, quantity, error } = this.state;
    const nameValidation = validateName(name);
    const quantityValidation = validateQuantity(parseInt(quantity));
    if (nameValidation) {
      error.push(nameValidation);
    }
    if (quantityValidation) {
      error.push(quantityValidation);
    }
    this.setState({ error });
    return error.length !== 0;
  };
  onValidate = () => {
    const { name, quantity, error } = this.state;
    const nameValidation = validateName(name);
    const quantityValidation = validateQuantity(parseInt(quantity));
    if (nameValidation) {
      error.push(nameValidation);
    } else if (quantityValidation) {
      error.push(quantityValidation);
    }
    this.setState({ error });
  };
  onItemAdd = () => {
    if (this.formInvalid()) {
      return;
    }
    const { onItemAdd } = this.props;
    const { name, quantity } = this.state;
    const item = {
      name,
      quantity,
    };
    this.setState({
      name: "",
      quantity: null,
      error: [],
      addedItem: item,
    });
    onItemAdd(item);
  };
  render() {
    const { name, quantity, error } = this.state;
    const fields = [
      {
        name: "name",
        value: name,
        type: "text",
        placeholder: "Enter name",
      },
      {
        name: "quantity",
        value: quantity,
        type: "number",
        placeholder: "Enter quantity",
      },
    ];
    return (
      <div className="addItem">
        <h2 className="addItem__header">Things to buy</h2>
        <div className="addItem__fields">
          {fields.map((item, key) => {
            const errorObj = error.find(
              (errorItem) => errorItem.name === item.name
            );
            return (
              <div className="addItem__fields-item" key={key}>
                <Input
                  name={item.name}
                  value={item.value}
                  type={item.type}
                  key={key}
                  onChange={this.onFieldChange}
                  placeholder={item.placeholder}
                />
                {errorObj ? (
                  <span className="error">{errorObj.error}</span>
                ) : null}
              </div>
            );
          })}
          <Button title="Add item" onClick={this.onItemAdd} id="addItem" />
        </div>
      </div>
    );
  }
}

export default AddItem;
