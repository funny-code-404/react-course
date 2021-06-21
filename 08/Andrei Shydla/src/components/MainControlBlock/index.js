import React, { useState, useEffect } from "react";

const additionalActionsLabels = {
  showRegisterForm: ["Registration", "Register"],
  showLoginForm: ["Log In", "Login"],
  showDeleteAccountForm: ["Delete Account", "Delete"],
};

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
    titleValue: "Новы гетман",
    nameValue: "Ян Караль Хадкевiч",
    emailValue: "1621@year.com",
    passwordValue: "victory",
  });

  const [dataAdditionalActions, setDataAdditionalActions] = useState({
    additionalBlockLabel: "",
    buttonLabel: "",
  });

  const [
    stateDisabledСheckboxConnect,
    setStateDisabledСheckboxConnect,
  ] = useState(false);

  const [stateDisabledButtonSend, setStateDisabledButtonSend] = useState(false);

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

  // ------log the main states
  // useEffect(() => {
  //   console.log(
  //     `Main Block - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, formState: ${formState}, stateLocal: ${stateLocal};`
  //   );
  // }, [clearFormTypeOfContent, connectorForms, formState, stateLocal]);

  useEffect(() => {
    const dataToShowClearForm = createDataToShowClearForm(
      clearFormTypeOfContent
    );
    const { sendDataToForm } = functions;
    sendDataToForm(dataToShowClearForm);
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
      setConnectorForms(disconnect);
      const checkboxLinkConnecter = document.getElementsByName("connect");
      checkboxLinkConnecter[0].checked = false;
      setPreviousStateLocal(stateLocal);

      if (clearFormTypeOfContent === showNoneForm) {
        setFormState(clear);
      } else {
        setFormState(showForm);
      }
    } else if (
      stateLocal === clear &&
      previousStateLocal === on &&
      clearFormTypeOfContent !== showNoneForm
    ) {
      setPreviousStateLocal(stateLocal);
      setFormState(showForm);
    } else if (
      stateLocal === clear &&
      previousStateLocal === on &&
      clearFormTypeOfContent === showNoneForm
    ) {
      setPreviousStateLocal(stateLocal);
      setFormState(clear);
    }
  }, [stateLocal, connectorForms, previousStateLocal]);

  useEffect(() => {
    if (formState === on) {
      const dataToForm = createDataToForm();
      sendDataToForm(dataToForm);
    }
  }, [formState]);

  useEffect(() => {
    if (
      stateLocal === on ||
      !titleValue ||
      !nameValue ||
      !emailValue ||
      !passwordValue
    ) {
      setStateDisabledСheckboxConnect(true);
    } else {
      setStateDisabledСheckboxConnect(false);
    }
  }, [stateLocal, titleValue, nameValue, emailValue, passwordValue]);

  useEffect(() => {
    if (connectorForms === disconnect || stateLocal === on) {
      setStateDisabledButtonSend(true);
    } else {
      setStateDisabledButtonSend(false);
    }
  }, [connectorForms, stateLocal]);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const keyValueChanged = `${name}Value`;
    setValue((prevState) => ({
      ...prevState,
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
    setFormState(on);
  };

  const handleClickClean = (event) => {
    event.preventDefault();
    setValue({
      titleValue: "",
      nameValue: "",
      emailValue: "",
      passwordValue: "",
      dataAdditionalActions: "",
    });
    setFormState(clear);
    setStateDisabledСheckboxConnect(false);
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
      const currentTypeOfContent = `show${
        event.target.name[0].toUpperCase() + event.target.name.slice(1)
      }Form`;
      setClearFormTypeOfContent(currentTypeOfContent);
      setFormState(showForm);

      setDataAdditionalActions({
        additionalBlockLabel: additionalActionsLabels[currentTypeOfContent][0],
        buttonLabel: additionalActionsLabels[currentTypeOfContent][1],
      });
    } else {
      setClearFormTypeOfContent(showNoneForm);
      setFormState(clear);

      setDataAdditionalActions({ additionalBlockLabel: "", buttonLabel: "" });
    }
  };

  const renderCheckboxTypes = checkboxFormTypes.map((item) => {
    return (
      <label
        key={`${item.name}1`}
        className="mainForm-checkboxItem"
        disabled={stateLocal === on}
      >
        <input
          type="checkbox"
          onChange={handleClickChangeTypeForm}
          name={item.name}
          disabled={stateLocal === on}
        />
        {item.label}
      </label>
    );
  });

  const inputsData = [
    ["title", titleValue],
    ["name", nameValue],
    ["email", emailValue],
    ["password", passwordValue],
  ];

  const renderInputs = inputsData.map((item) => {
    return (
      <input
        key={`${item[0]}1`}
        className="clearForm-input"
        type="text"
        name={item[0]}
        placeholder={item[0]}
        value={item[1]}
        onChange={handleOnChange}
      />
    );
  });

  return (
    <form className="clearForm">
      <div className="clearForm-container">
        <div className="clearForm-title">{"MainControlBlock"}</div>

        <div className="mainForm-checkboxBlock">
          <p className="mainForm-checkboxItem">Choose type of Form:</p>
          <>{renderCheckboxTypes}</>
        </div>

        <div className="mainForm-setDefaultDataBlock">
          <>{renderInputs}</>

          <div className="mainBlock-containerButtons">
            <label
              className="mainBlock-containerButtons-checkboxConnect"
              disabled={stateDisabledСheckboxConnect}
            >
              <input
                type="checkbox"
                name={"connect"}
                onClick={handleClickConnect}
                disabled={stateDisabledСheckboxConnect}
              />
              Connect to Clear Form to send Data
            </label>

            <button
              className="mainBlock-button"
              onClick={handleClickSend}
              disabled={stateDisabledButtonSend}
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
