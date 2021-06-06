import React, { useState, useEffect } from "react";

const DataContainerForm = (props) => {
  const {
    typesOfState,
    stateWrapper,
    title,
    data,
    functions,
    render,
    dataAdditionalActions,
  } = props;

  const { name, email, password } = data;
  const { on, switching, clear, showForm, getDataClearForm } = typesOfState;
  const {
    sendDataToWrapper,
    sendStateBasicToWrapper,
    turnOffStateLocal,
  } = functions;

  const [stateBasic, setStateBasic] = useState(clear);
  const defaultTitle = "Clear Form";

  const [titleForm, setTitleForm] = useState(defaultTitle);

  const [{ nameValue, emailValue, passwordValue }, setValue] = useState({
    nameValue: "",
    emailValue: "",
    passwordValue: "",
  });

  useEffect(() => {
    // console.log(
    //   `ClearForm - stateWrapper: ${stateWrapper}, stateBasic: ${stateBasic};`
    // );
  }, [stateWrapper, stateBasic]);

  useEffect(() => {
    //creating user data for clear form
    if (stateWrapper === getDataClearForm) {
      sendDataToWrapper(nameValue, emailValue, passwordValue);
    }
  }, [stateWrapper]);

  useEffect(() => {
    if (stateWrapper === on) {
      setValue((prevProps) => ({
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      }));
    }
  }, [stateWrapper]);

  useEffect(() => {
    if (
      stateWrapper === clear ||
      stateWrapper === showForm ||
      stateWrapper === on
    ) {
      if (!nameValue && !emailValue && !passwordValue) {
        setStateBasic(clear);
      } else {
        setStateBasic(on);
      }
    }
  }, [stateWrapper, nameValue, emailValue, passwordValue]);

  useEffect(() => {
    sendStateBasicToWrapper(stateBasic);
  }, [stateBasic]);

  useEffect(() => {
    if (stateWrapper === clear) {
      setTitleForm((prevProps) => defaultTitle);
    } else if (stateWrapper === showForm || stateWrapper === on) {
      setTitleForm((prevProps) => title);
    }
  }, [stateWrapper]);

  useEffect(() => {
    if (stateWrapper === showForm) {
      sendDataToWrapper(nameValue, emailValue, passwordValue);
    }
  }, [stateWrapper, nameValue, emailValue, passwordValue]);

  useEffect(() => {
    if (stateWrapper === switching) {
      setTitleForm((prevProps) => defaultTitle);
      setValue((prevProps) => ({
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      }));
      setStateBasic((prevProps) => clear);
      turnOffStateLocal();
    }
  }, [stateWrapper, nameValue, emailValue, passwordValue]);

  useEffect(() => {
    // console.log(nameValue, emailValue, passwordValue);
  }, [nameValue, emailValue, passwordValue]);

  const conditionToRender = [showForm, on].some(
    (item) => stateWrapper === item
  );

  const handleOnChangeAllForms = (event) => {
    const name = event.target.name;
    const keyValueChanged = `${name}Value`;
    setValue((prevProps) => ({
      ...prevProps,

      [keyValueChanged]: event.target.value,
    }));
  };

  const handleClickClearFormOnly = (event) => {
    event.preventDefault();
    console.log(
      `name: ${nameValue}, e-mail: ${emailValue}, password: ${passwordValue};`
    );
    setValue((prevProps) => ({
      nameValue: "",
      emailValue: "",
      passwordValue: "",
    }));
  };

  return (
    <form className="clearForm">
      <div className="clearForm-container">
        <div className="clearForm-title">{titleForm}</div>
        <input
          className="clearForm-input"
          type="text"
          name={"name"}
          placeholder="name"
          value={nameValue}
          onChange={handleOnChangeAllForms}
        />
        <input
          className="clearForm-input"
          type="text"
          name={"email"}
          placeholder="e-mail"
          value={emailValue}
          onChange={handleOnChangeAllForms}
        />
        <input
          className="clearForm-input"
          type="text"
          name={"password"}
          placeholder="password"
          value={passwordValue}
          onChange={handleOnChangeAllForms}
        />
        <div className="clearForm-containerButtons">
          {conditionToRender || (
            <button
              className="clearForm-buttonLog"
              onClick={handleClickClearFormOnly}
              disabled={!nameValue || !emailValue || !passwordValue}
            >
              {"ConsoleLog"}
            </button>
          )}

          {conditionToRender && render(functions, dataAdditionalActions)}
        </div>
      </div>
    </form>
  );
};

export default DataContainerForm;
