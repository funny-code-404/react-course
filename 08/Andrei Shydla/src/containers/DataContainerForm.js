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

  const [stateDisabledButtonLog, setStateDisabledButtonLog] = useState(false);

  // -----log the main states ----
  // useEffect(() => {
  // console.log(
  //   `ClearForm - stateWrapper: ${stateWrapper}, stateBasic: ${stateBasic};`
  // );
  // }, [stateWrapper, stateBasic]);

  // useEffect(() => {
  //   // console.log(nameValue, emailValue, passwordValue);
  // }, [nameValue, emailValue, passwordValue]);

  useEffect(() => {
    //creating user data for clear form
    if (stateWrapper === getDataClearForm) {
      sendDataToWrapper(nameValue, emailValue, passwordValue);
    }
  }, [stateWrapper]);

  useEffect(() => {
    if (stateWrapper === on) {
      setValue({
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      });
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
      setTitleForm(defaultTitle);
    } else if (stateWrapper === showForm || stateWrapper === on) {
      setTitleForm(title);
    }
  }, [stateWrapper]);

  useEffect(() => {
    if (stateWrapper === showForm) {
      sendDataToWrapper(nameValue, emailValue, passwordValue);
    }
  }, [stateWrapper, nameValue, emailValue, passwordValue]);

  useEffect(() => {
    if (stateWrapper === switching) {
      setTitleForm(defaultTitle);
      setValue({
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      });
      setStateBasic(clear);
      turnOffStateLocal();
    }
  }, [stateWrapper, nameValue, emailValue, passwordValue]);

  const conditionToRender = [showForm, on].some(
    (item) => stateWrapper === item
  );

  useEffect(() => {
    if (!nameValue || !emailValue || !passwordValue) {
      setStateDisabledButtonLog(true);
    } else {
      setStateDisabledButtonLog(false);
    }
  }, [nameValue, emailValue, passwordValue]);

  const handleOnChangeAllForms = (event) => {
    const name = event.target.name;
    const keyValueChanged = `${name}Value`;
    setValue((prevState) => ({
      ...prevState,

      [keyValueChanged]: event.target.value,
    }));
  };

  const handleClickClearFormOnly = (event) => {
    event.preventDefault();
    console.log(
      `name: ${nameValue}, e-mail: ${emailValue}, password: ${passwordValue};`
    );
    setValue({
      nameValue: "",
      emailValue: "",
      passwordValue: "",
    });
  };

  const mainInputsData = [
    ["name", nameValue],
    ["email", emailValue],
    ["password", passwordValue],
  ];

  const renderMainInputs = mainInputsData.map((item) => {
    return (
      <input
        key={`${item[0]}1`}
        className="clearForm-input"
        type="text"
        name={item[0]}
        placeholder={item[0]}
        value={item[1]}
        onChange={handleOnChangeAllForms}
      />
    );
  });

  return (
    <form className="clearForm">
      <div className="clearForm-container">
        <div className="clearForm-title">{titleForm}</div>
        <>{renderMainInputs}</>

        <div className="clearForm-containerButtons">
          {conditionToRender || (
            <button
              className="clearForm-buttonLog"
              onClick={handleClickClearFormOnly}
              disabled={stateDisabledButtonLog}
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
