/**
 * Generic Input component
 */
import React from "react";
class Input extends React.Component {
  renderLabel = () => (
    <label className="input-field__label">{this.props.label}</label>
  );

  _onChange = (e) => {
    const { onChange, item } = this.props;
    if (onChange && typeof onChange === "function") {
      onChange(e, item);
    }
  };
  handleBlurInput = (e) => {
    this.setState({ focusClass: "" });
    const { handleBlurInput, item } = this.props;
    if (handleBlurInput && typeof handleBlurInput === "function") {
      handleBlurInput(e, item);
    }
  };
  handleBlurInput;
  render() {
    const {
      type,
      label,
      disabled,
      autoFocus,
      value,
      placeholder,
      name,
      className,
      reference,
      id,
      inputProps,
    } = this.props;

    let inputClass = ["input-field"];
    if (className) {
      inputClass.push(className);
    }

    if (disabled) {
      inputClass.push("disabled");
    }

    return (
      <input
        type={type ? type : "text"}
        name={name}
        value={value ? value : ""}
        placeholder={placeholder}
        onChange={this._onChange}
        disabled={disabled}
        ref={reference}
        id={id}
        {...inputProps}
        onFocus={this.handleFocusInput}
        onBlur={this.handleBlurInput}
        autoFocus={autoFocus}
      />
    );
  }
}

export default Input;
