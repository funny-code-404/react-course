import React, { useState, useEffect } from "react";
import DataContainerForm from "../../containers/DataContainerForm";

const LoginWrapper = (props) => {
  const {
    typesOfContent,
    connectStates,
    typesOfState,
    data,
    functions,
  } = props;
  const {
    showNoneForm,
    showRegisterForm,
    showLoginForm,
    showDeleteAccountForm,
  } = typesOfContent;
  const {
    clearFormTypeOfContent,
    connectorForms,
    formState,
    title,
    name,
    email,
    password,
    dataAdditionalActions,
  } = data;
  const { setFormData, sendStateLocalToApp } = functions;

  const { connect, disconnect } = connectStates;
  const { on, switching, clear, showForm } = typesOfState;

  const [wrapperTitle, setWrapperTitle] = useState("");

  const [{ nameValue, emailValue, passwordValue }, setWrapperValue] = useState({
    nameValue: "",
    emailValue: "",
    passwordValue: "",
  });

  const [stateBasic, setStateBasic] = useState(clear);
  const [stateAdditionalData, setStateAdditionalData] = useState(clear);

  const [stateWrapper, setStateWrapper] = useState(clear);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const [
    stateDisabledCheckboxWrapper,
    setStateDisabledCheckboxWrapper,
  ] = useState(false);
  const [stateDisabledButtonWrapper, setStateDisabledButtonWrapper] = useState(
    false
  );

  const checkStateLocal = (state, stateAdditional) => {
    if (stateAdditionalData === state || state === on) {
      return state;
    } else {
      return stateAdditional;
    }
  };

  const sendStateToApp = () => {
    const resultLocalState = checkStateLocal(stateBasic, stateAdditionalData);
    sendStateLocalToApp(resultLocalState);
  };

  // -------log the main states
  //   useEffect(() => {
  // console.log(
  //   `RegisterWrapper - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, StateWrapper: ${stateWrapper}, stateAdditionalData: ${stateAdditionalData}; `
  // );
  //   }, [
  //     data,
  //     clearFormTypeOfContent,
  //     connectorForms,
  //     stateWrapper,
  //     stateAdditionalData,
  //   ]);

  useEffect(() => {
    sendStateToApp();
  }, [stateBasic, stateAdditionalData]);

  useEffect(() => {
    if (connectorForms === disconnect) {
      if (formState === showForm && stateWrapper === clear) {
        setStateWrapper(formState);
      } else if (formState === clear && stateWrapper === showForm) {
        setStateWrapper(clear);
      }
    }
  }, [clearFormTypeOfContent, formState, stateWrapper, connectorForms]);

  useEffect(() => {
    if (formState === on && stateWrapper === showForm) {
      setWrapperTitle(title);
      setStateWrapper(formState);
      setWrapperValue((prevState) => ({
        ...prevState,
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      }));
    }
  }, [formState, stateWrapper, connectorForms]);

  useEffect(() => {
    if (!nameValue || !emailValue || !passwordValue) {
      setStateDisabledCheckboxWrapper(true);
    } else {
      setStateDisabledCheckboxWrapper(false);
    }
  }, [nameValue, emailValue, passwordValue]);

  useEffect(() => {
    if (!nameValue || !emailValue || !passwordValue || !keepLoggedIn) {
      setStateDisabledButtonWrapper(true);
    } else {
      setStateDisabledButtonWrapper(false);
    }
  }, [nameValue, emailValue, passwordValue, keepLoggedIn]);

  return (
    <div>
      <DataContainerForm
        typesOfState={typesOfState}
        stateWrapper={stateWrapper}
        title={wrapperTitle}
        data={{
          name: nameValue,
          email: emailValue,
          password: passwordValue,
        }}
        functions={{
          sendStateBasicToWrapper: (state) => {
            setStateBasic(state);
          },
          sendDataToWrapper: (nameValue, emailValue, passwordValue) => {
            setWrapperValue((prevState) => ({
              ...prevState,
              nameValue: nameValue,
              emailValue: emailValue,
              passwordValue: passwordValue,
            }));
          },

          handleClickKeep: () => {
            keepLoggedIn ? setKeepLoggedIn(false) : setKeepLoggedIn(true);
          },

          handleClickWrapper: (event) => {
            event.preventDefault();
            setStateWrapper(switching);

            const message = `User login  ---
            name: ${nameValue}, 
            email: ${emailValue},
            password: ${passwordValue}`;
            console.log(message);
            alert(message);
            setWrapperValue({
              nameValue: "",
              emailValue: "",
              passwordValue: "",
            });
            setWrapperTitle("");
            setKeepLoggedIn(false);
          },
          turnOffStateLocal: () => {
            setStateWrapper(formState);
          },
        }}
        dataAdditionalActions={dataAdditionalActions}
        render={(functions, dataAdditionalActions) => {
          const { handleClickKeep, handleClickWrapper } = functions;
          const { buttonLabel, additionalBlockLabel } = dataAdditionalActions;

          return (
            <div>
              <h2>{additionalBlockLabel}</h2>

              <label
                className="mainBlock-containerButtons-checkboxConnect"
                disabled={stateDisabledCheckboxWrapper}
              >
                <input
                  type="checkbox"
                  name={"keep"}
                  onClick={handleClickKeep}
                  disabled={stateDisabledCheckboxWrapper}
                />
                {" Keep me logged in"}
              </label>

              <button
                className="clearForm-buttonLog"
                onClick={handleClickWrapper}
                disabled={stateDisabledButtonWrapper}
              >
                {buttonLabel}
              </button>
            </div>
          );
        }}
      />
    </div>
  );
};

export default LoginWrapper;
