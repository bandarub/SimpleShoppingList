import React, { Component } from "react";
import Input from "../sharedComponents/Input";
import { validateName, validateQuantity } from "../validator";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: null,
      error: [],
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
  onValidate = ()=>{
    const { name, quantity, error } = this.state;
    const nameValidation = validateName(name);
    const quantityValidation = validateQuantity(parseInt(quantity));
    if (nameValidation) {
      error.push(nameValidation);
    } else if (quantityValidation) {
      error.push(quantityValidation);
    }
    this.setState({ error });
  }
  onItemAdd = () => {
    if (this.formInvalid()) {
      return;
    }
    const { onItemAdd } = this.props;
    const { name, quantity } = this.state;
    onItemAdd({
      name,
      quantity,
    });
    this.setState({ name: "", quantity: null });
  };
  render() {
    const { name, quantity, error } = this.state;
    const fields = [
      {
        name: "name",
        value: name,
        type: "text",
        placeholder:"Enter name"
      },
      {
        name: "quantity",
        value: quantity,
        type: "number",
        placeholder:'Enter quantity'
      },
    ];
    return (
      <div className="addItem">
        {fields.map((item, key) => {
          const errorObj = error.find(
            (errorItem) => errorItem.name === item.name
          );

          return (
            <div className="addItem-item" key={key}>
              <Input
                name={item.name}
                value={item.value}
                type={item.type}
                key={key}
                onChange={this.onFieldChange}
                handleBlurInput={this.formInvalid}
              />
              {errorObj ? (
                <span className="error">{errorObj.error}</span>
              ) : null}
            </div>
          );
        })}
        <button onClick={this.onItemAdd} >addItem</button>
       
      </div>
    );
  }
}

export default AddItem;
