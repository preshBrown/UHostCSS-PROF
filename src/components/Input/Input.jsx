import React from "react";
import { ImNotification } from "react-icons/im";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.css";

const Input = (props) => {
  const { invalid, touched, shouldVal } = props;

  let input = null;

  let inputClass = [];
  if (invalid && touched && shouldVal) {
    inputClass.push("invalid");
  }

  switch (props.elementType) {
    case "input":
      input = (
        <div className={`${props.class}`}>
          <label>
            {props.label}{" "}
            {invalid && touched ? (
              <small className="error__message">
                <ImNotification /> {props.note}
              </small>
            ) : null}
          </label>
          <input
            className={inputClass}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />{" "}
          <span className="svg">
            {" "}
            {props.hide ? (
              <FaEye
                onClick={props.toggleVisibility.bind(
                  null,
                  props.visibilityType
                )}
              />
            ) : (
              <FaEyeSlash
                onClick={props.toggleVisibility.bind(
                  null,
                  props.visibilityType
                )}
              />
            )}{" "}
          </span>
        </div>
      );
      break;

    case "textarea":
      input = (
        <div className={`${props.class}`}>
          <label>
            {props.label}{" "}
            {invalid && touched ? (
              <small className="error__message ">
                <ImNotification /> {props.note}
              </small>
            ) : null}
          </label>
          <textarea
            className={inputClass}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        </div>
      );
      break;

    case "checkbox":
      input = (
        <div className={`${props.class}`}>
          <input
            {...props.elementConfig}
            onChange={props.changed}
            required={true}
          />
          <label>
            Agree to <a href="/customer">{props.label}</a>
          </label>
        </div>
      );
      break;
    case "select":
      input = (
        <div className={`${props.class}`}>
          <label>{props.label}</label>
          <select value={props.value} onChange={props.changed}>
            {props.elementConfig.option.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.displayValue}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    default:
      input = (
        <input
          className={inputClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return <>{input}</>;
};

export default Input;
