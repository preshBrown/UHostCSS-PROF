import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Input from "../../components/Input/Input";
import CustomButtons from "../../components/CustomButtons/CustomButtons";
import Spinner from "../../components/Spinner/Spinner";
import "./FormData.css";

const FormData = (props) => {
  const [formInfo, setFormInfo] = useState({
    paymentMethod: {
      elementType: "select",
      classNames: "payment__method",
      elementConfig: {
        option: [
          { value: "Master", displayValue: "Master" },
          { value: "Visa", displayValue: "Visa" },
          { value: "Credit", displayValue: "Credit" },
          { value: "Debit", displayValue: "Debit" },
        ],
      },
      label: "PaymentMethod",
      value: "Master",
      validation: {},
      valid: true,
    },

    fullName: {
      elementType: "input",
      classNames: "full__Name",
      elementConfig: {
        type: "text",
        placeholder: "full name",
      },
      label: "Full Name",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      classNames: "email",
      note: "Not a valid email",
      elementConfig: {
        type: "email",
        placeholder: "email",
      },
      label: "Email",
      value: "",
      validation: { required: true, isEmail: true },
      valid: false,
      touched: false,
    },
    password: {
      elementType: "input",
      classNames: "password",
      note: "must have a minimum length of 8 characters!",
      visibilityType: "password",
      hide: false,
      elementConfig: {
        type: "password",
        placeholder: "password",
      },
      label: "Password",
      value: "",
      validation: { required: true, minLength: 8 },
      valid: false,
      touched: false,
    },
    ConfirmPassword: {
      elementType: "input",
      classNames: "Confirm__password",
      note: "password do not match",
      visibilityType: "ConfirmPassword",
      hide: false,
      elementConfig: {
        type: "password",
        placeholder: "confirm password",
      },
      label: "Confirm Password",
      value: "",
      validation: { required: true, isConfirmPassword: true },
      valid: false,
      touched: false,
    },
    bio: {
      elementType: "textarea",
      classNames: "bio",
      elementConfig: {
        type: "text",
        placeholder: "bio",
      },
      label: "Bio",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
    },
    termsAndCondition: {
      elementType: "checkbox",
      classNames: "terms--and__condition",
      elementConfig: {
        type: "checkbox",
      },
      label: "Terms & Condition",
      value: "Agreed",
      validation: { required: true, checked: true, isChecked: false },
      valid: false,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentUser] = useOutletContext();

  const toggleVisibility = (visibilityType) => {
    console.log(visibilityType);
    const originalForm = {
      ...formInfo,
      [visibilityType]: {
        ...formInfo[visibilityType],
        hide: !formInfo[visibilityType].hide,
        elementConfig: {
          ...formInfo[visibilityType].elementConfig,
          type:
            formInfo[visibilityType].elementConfig.type === "password"
              ? "text"
              : "password",
        },
      },
    };

    setFormInfo(originalForm);
  };
  // ================================================================================CHECK-VALIDATION
  const checkValidation = (value, rules, confirmedPass) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/;
      isValid =
        pattern.test(value) && value.length >= rules.minLength && isValid;
    }

    if (rules.isConfirmPassword) {
      isValid = value === confirmedPass && isValid;
    }

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    // if (rules.maxLength) {
    //   isValid = value.length <= rules.maxLength  && isValid;
    // }

    if (rules.checked) {
      isValid = rules.isChecked && isValid;
    }
    return isValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const originalForm = {
        ...formInfo,
      };
      for (let key in originalForm) {
        originalForm[key].valid = key === "paymentMethod" ? true : false;
        originalForm[key].value =
          key === "paymentMethod"
            ? "Master"
            : key === "termsAndCondition"
            ? "Agreed"
            : "";
        originalForm[key].touched = false;
        originalForm[key].hide = false;
        originalForm[key].validation.isChecked = false;
        if (key === "password" || key === "ConfirmPassword") {
          originalForm[key].elementConfig.type = "password";
        }
      }
      // originalForm.paymentMethod.value = "Master";
      // originalForm.paymentMethod.valid = true;
      // originalForm.termsAndCondition.value = "Agreed";
      // originalForm.password.elementConfig.type = "password";
      // originalForm.ConfirmPassword.elementConfig.type = "password";

      console.log(
        "ischeckedDetails " +
          originalForm.termsAndCondition.validation.isChecked
      );
      setFormInfo(originalForm);
      setFormIsValid(false);
      const data = {};
      for (let key in formInfo) {
        data[key] = formInfo[key].value;
        console.log(`${[key]} : ${formInfo[key].value}`);
      }
      setLoading(false);
    }, 4000);
  };

  const inputHandler = (event, identi) => {
    // console.log(`Currently typing on  ${identi}:  ${event.target.value}`);
    // console.log(`  TERMS EVENT:  ${event.target.checked}`);

    const originalForm = {
      ...formInfo,
    };
    const updated = {
      ...originalForm[identi],
    };

    updated.validation.isChecked = event.target.checked;
    updated.value =
      identi === "termsAndCondition" ? "Agreed" : event.target.value;
    updated.touched = true;
    if (identi === "password") {
      updated.note =
        updated.value.length >= 8
          ? "must  contain a Capital letter, small letter, a special character, and a digit!"
          : "must have a minimum length of 8 characters!";
      setConfirmPass(updated.value);
    }
    updated.valid = checkValidation(
      updated.value,
      updated.validation,
      confirmPass
    );

    // if (identi === "password" && updated.value.length >= 8) {
    //   updated.note =
    //     "must  contain a Capital letter, small letter, a special character, and a digit!";
    // }
    // if (identi === "password" && updated.value.length < 8) {
    //   updated.note = "must have a minimum length of 8 characters!";
    // }

    originalForm[identi] = updated;

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
      // console.log(`${key}: ${originalForm[key].valid}`);
    }
    // console.log(`FOR ISCHECKED: ${updated.validation.isChecked} `);
    setFormInfo(originalForm);
    setFormIsValid(valid);
  };

  const formElements = [];
  for (let key in formInfo) {
    formElements.push({
      id: key,
      config: formInfo[key],
    });
  }

  let form = (
    <>
      <h3 className="form-title__">Your Details</h3>
      <form id="form__wrapper" onSubmit={submitHandler}>
        {formElements.map((fm) => (
          <Input
            key={fm.id}
            class={fm.config.classNames}
            elementType={fm.config.elementType}
            elementConfig={fm.config.elementConfig}
            note={fm.config.note}
            // visibilityType={fm.config.visibilityType}
            hide={fm.config.hide}
            toggleVisibility={toggleVisibility.bind(null, fm.config.visibilityType)}
            shouldVal={fm.config.validation}
            invalid={!fm.config.valid}
            touched={fm.config.touched}
            value={fm.config.value}
            label={fm.config.label}
            changed={(event) => inputHandler(event, fm.id)}
          />
        ))}
        <CustomButtons btnType="green" disabled={!formIsValid}>
          Submit
        </CustomButtons>
      </form>
    </>
  );

  if (loading) {
    form = <Spinner />;
  }

  if (
    formInfo.password.valid &&
    formInfo.ConfirmPassword.valid &&
    formInfo.password.value !== formInfo.ConfirmPassword.value
  ) {
    setTimeout(() => {
      const originalForm = {
        ...formInfo,
      };
      const updated = {
        ...originalForm.ConfirmPassword,
      };
      updated.valid = false;

      originalForm.ConfirmPassword = updated;

      let valid = true;
      for (let key in originalForm) {
        valid = originalForm[key].valid && valid;
      }

      setFormInfo(originalForm);
      setFormIsValid(valid);
    });
  }
  if (
    formInfo.password.valid &&
    formInfo.password.value === formInfo.ConfirmPassword.value &&
    !formInfo.ConfirmPassword.valid
  ) {
    const originalForm = {
      ...formInfo,
    };
    const updated = {
      ...originalForm.ConfirmPassword,
    };
    updated.valid = true;

    originalForm.ConfirmPassword = updated;

    let valid = true;
    for (let key in originalForm) {
      valid = originalForm[key].valid && valid;
    }

    setFormInfo(originalForm);
    setFormIsValid(valid);
  }

  return (
    <>
      <small>{currentUser}</small>
      {form}
    </>
  );
};

export default FormData;
