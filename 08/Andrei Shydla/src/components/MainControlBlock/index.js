import React, { useState, useEffect } from "react";

const logInitVariables = (object, name) => {
  let str = "";
  Object.keys(object).forEach((item) => {
    str = str + item + " , ";
  });
  return ` const { ${str} } = ${name};`;
};

const logInitDataProps = (props) => {
  let str = "";
  Object.keys(props).forEach((item) => {
    str = str + logInitVariables(props[item], item);
  });
  return console.log(`${logInitVariables(props, "props")} ${str}`);
};

const MainControlBlock = (props) => {
  const {
    stateLocal,
    typesOfContent,
    listOfForm,
    connectStates,
    typesOfState,
    functions,
  } = props;
  const {
    showNoneForm,
    showRegisterForm,
    showLoginForm,
    showDeleteAccountForm,
  } = typesOfContent;

  const { none, register, login, deleteAccount } = listOfForm;
  const { connect, disconnect } = connectStates;
  const { on, switching, clear, showForm } = typesOfState;
  const { sendDataToForm } = functions;

  const checkboxFormTypes = Object.keys(listOfForm)
    .filter((item) => Object.keys(listOfForm[item]).length !== 0)
    .map((item) => ({
      name: listOfForm[item].name,
      label: listOfForm[item].label,
    }));

  const [clearFormTypeOfContent, setClearFormTypeOfContent] = useState(
    showNoneForm
  );
  const [previousConnectorForms, setPreviousConnectorForms] = useState(
    disconnect
  );
  const [connectorForms, setConnectorForms] = useState(disconnect);
  const [formState, setFormState] = useState(clear);
  const [previousStateLocal, setPreviousStateLocal] = useState(clear);
  const [previousStateWrapper, setPreviousStateWrapper] = useState(clear);

  const [
    { titleValue, nameValue, emailValue, passwordValue },
    setValue,
  ] = useState({
    titleValue: "qqq",
    nameValue: "www",
    emailValue: "eee",
    passwordValue: "111",
  });

  const dataAdditionalActions = {
    additionalBlockLabel: "Registration",
    buttonLabel: "Register",
  };

  const createDataToForm = () => {
    return {
      clearFormTypeOfContent: clearFormTypeOfContent,
      connectorForms: connectorForms,
      formState: formState,
      title: titleValue,
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      dataAdditionalActions: dataAdditionalActions,
    };
  };

  const createDataToShowClearForm = (typeOfFormToShow) => {
    return {
      clearFormTypeOfContent: typeOfFormToShow,
      connectorForms: connectorForms,
      formState: formState,
      title: "",
      name: "",
      email: "",
      password: "",
      dataAdditionalActions: dataAdditionalActions,
    };
  };

  useEffect(() => {
    // console.log(
    //   `Main Block - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, formState: ${formState}, stateLocal: ${stateLocal};`
    // );
  }, [clearFormTypeOfContent, connectorForms, formState, stateLocal]);

  useEffect(() => {
    const dataToShowClearForm = createDataToShowClearForm(
      clearFormTypeOfContent
    );
    const { sendDataToForm } = functions;
    sendDataToForm(dataToShowClearForm);
    // }
  }, [clearFormTypeOfContent]);

  useEffect(() => {
    const dataToForm = createDataToForm();
    sendDataToForm(dataToForm);
  }, [connectorForms]);

  useEffect(() => {
    if (
      stateLocal === on &&
      previousStateLocal === clear &&
      connectorForms === connect
    ) {
      setConnectorForms((prevProps) => disconnect);
      const checkboxLinkConnecter = document.getElementsByName("connect");
      checkboxLinkConnecter[0].checked = false;
      setPreviousStateLocal((prevProps) => stateLocal);

      if (clearFormTypeOfContent === showNoneForm) {
        setFormState((prevProps) => clear);
      } else {
        setFormState((prevProps) => showForm);
      }
    } else if (
      stateLocal === clear &&
      previousStateLocal === on &&
      clearFormTypeOfContent !== showNoneForm
    ) {
      setPreviousStateLocal(stateLocal);
      setFormState((prevProps) => showForm);
    } else if (
      stateLocal === clear &&
      previousStateLocal === on &&
      clearFormTypeOfContent === showNoneForm
    ) {
      setPreviousStateLocal(stateLocal);
      setFormState((prevProps) => clear);
    }
  }, [stateLocal, connectorForms, previousStateLocal]);

  useEffect(() => {
    if (formState === on) {
      const dataToForm = createDataToForm();
      sendDataToForm(dataToForm);
    }
  }, [formState]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const keyValueChanged = `${name}Value`;
    setValue((prevProps) => ({
      ...prevProps,
      [keyValueChanged]: event.target.value,
    }));
  };

  const handleClickConnect = (event) => {
    connectorForms === connect
      ? setConnectorForms(disconnect)
      : setConnectorForms(connect);
  };

  const handleClickSend = (event) => {
    event.preventDefault();
    // console.log(" SEND clicked - Main Control Block ");
    setFormState((prevProps) => on);
  };

  const handleClickClean = (event) => {
    event.preventDefault();
    setValue((prevProps) => ({
      titleValue: "",
      nameValue: "",
      emailValue: "",
      passwordValue: "",
      dataAdditionalActions: "",
    }));
    setFormState((prevProps) => clear);
  };

  const handleClickChangeTypeForm = (event) => {
    const checkboxFormTypesArrNames = checkboxFormTypes.map((item) => {
      return item.name;
    });
    checkboxFormTypesArrNames.forEach((item) => {
      if (item !== event.target.name) {
        const checkboxLinkItem = document.getElementsByName(item);
        checkboxLinkItem[0].checked = false;
      }
    });

    const checkToShow = checkboxFormTypesArrNames.filter((item) => {
      const checkboxLinkItem = document.getElementsByName(item);
      if (checkboxLinkItem[0].checked === true) {
        return true;
      }
    });

    if (checkToShow.length > 0) {
      setClearFormTypeOfContent((prevProps) => {
        const currentTypeOfContent = `show${
          event.target.name[0].toUpperCase() + event.target.name.slice(1)
        }Form`;
        return setClearFormTypeOfContent(currentTypeOfContent);
      });
      setFormState((prevProps) => showForm);
    } else {
      setClearFormTypeOfContent((prevProps) => showNoneForm);
      setFormState((prevProps) => clear);
    }
  };

  return (
    <form className="clearForm">
      <div className="clearForm-container">
        <div className="clearForm-title">{"MainControlBlock"}</div>
        <div className="mainForm-checkboxBlock">
          <p className="mainForm-checkboxItem">Choose type of Form:</p>

          <label
            className="mainForm-checkboxItem "
            disabled={stateLocal === on}
          >
            <input
              type="checkbox"
              onChange={handleClickChangeTypeForm}
              name={checkboxFormTypes[0].name}
              disabled={stateLocal === on}
            />
            {checkboxFormTypes[0].label}
          </label>
          <label className="mainForm-checkboxItem" disabled={stateLocal === on}>
            <input
              type="checkbox"
              onChange={handleClickChangeTypeForm}
              name={checkboxFormTypes[1].name}
              disabled={stateLocal === on}
            />
            {checkboxFormTypes[1].label}
          </label>
          <label className="mainForm-checkboxItem" disabled={stateLocal === on}>
            <input
              type="checkbox"
              onChange={handleClickChangeTypeForm}
              name={checkboxFormTypes[2].name}
              disabled={stateLocal === on}
            />
            {checkboxFormTypes[2].label}
          </label>
        </div>

        <div className="mainForm-setDefaultDataBlock">
          <input
            className="clearForm-input"
            type="text"
            name={"title"}
            placeholder="title"
            value={titleValue}
            onChange={handleOnChange}
          />
          <input
            className="clearForm-input"
            type="text"
            name={"name"}
            placeholder="name"
            value={nameValue}
            onChange={handleOnChange}
          />
          <input
            className="clearForm-input"
            type="text"
            name={"email"}
            placeholder="e-mail"
            value={emailValue}
            onChange={handleOnChange}
          />
          <input
            className="clearForm-input"
            type="text"
            name={"password"}
            placeholder="password"
            value={passwordValue}
            onChange={handleOnChange}
          />

          <div className="mainBlock-containerButtons">
            <label
              className="mainBlock-containerButtons-checkboxConnect"
              disabled={
                stateLocal === on ||
                !titleValue ||
                !nameValue ||
                !emailValue ||
                !passwordValue
              }
            >
              <input
                type="checkbox"
                name={"connect"}
                onClick={handleClickConnect}
                disabled={
                  stateLocal === on ||
                  !titleValue ||
                  !nameValue ||
                  !emailValue ||
                  !passwordValue
                }
              />
              Connect to Clear Form to send Data
            </label>

            <button
              className="mainBlock-button"
              onClick={handleClickSend}
              disabled={connectorForms === disconnect || stateLocal === on}
            >
              {" Send Data To Form "}
            </button>

            <button className="mainBlock-button" onClick={handleClickClean}>
              {" Clean "}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MainControlBlock;
