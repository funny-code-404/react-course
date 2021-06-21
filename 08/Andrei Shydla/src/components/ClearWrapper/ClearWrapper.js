import React, { useState, useEffect } from "react";
import DataContainerForm from "../../containers/DataContainerForm";

const ClearWrapper = (props) => {
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
  const { on, switching, clear, showForm, getDataClearForm } = typesOfState;
  const [{ nameValue, emailValue, passwordValue }, setWrapperValue] = useState({
    nameValue: "",
    emailValue: "",
    passwordValue: "",
  });
  const [wrapperTitle, setWrapperTitle] = useState("");
  const [stateBasic, setStateBasic] = useState(clear);
  const [stateAdditionalData, setStateAdditionalData] = useState(clear);
  const [stateWrapper, setStateWrapper] = useState(clear);
  const [
    clearFormTypeOfContentLocal,
    setClearFormTypeOfContentLocal,
  ] = useState(showNoneForm);

  const [userDataFromClearForm, setUserDataFromClearForm] = useState(false);
  const [stateDisabledButtonLogCW, setStateDisabledButtonLogCW] = useState(
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

  //  ----log the main states
  // useEffect(() => {
  //   // console.log(
  //   //   `_ClearWrapper - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, StateWrapper: ${stateWrapper} `
  //   // );
  // }, [clearFormTypeOfContent, connectorForms, stateWrapper]);

  // useEffect(() => {
  // console.log(nameValue, emailValue, passwordValue);
  // }, [nameValue, emailValue, passwordValue]);

  useEffect(() => {
    sendStateToApp();
  }, [stateBasic, stateAdditionalData]);

  useEffect(() => {
    if (formState === on) {
      setWrapperTitle(title);
      setStateWrapper(formState);
      setWrapperValue((prevState) => ({
        ...prevState,
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      }));
    }
  }, [formState]);

  useEffect(() => {
    if (stateWrapper === getDataClearForm && userDataFromClearForm) {
      setStateWrapper(switching);
      const message = `User  ---
      name: ${nameValue}, 
      email: ${emailValue},
      password: ${passwordValue},`;
      console.log(message);
      alert(message);

      setWrapperValue({
        nameValue: "",
        emailValue: "",
        passwordValue: "",
      });
      setUserDataFromClearForm(false);
    }
  }, [stateWrapper, userDataFromClearForm]);

  useEffect(() => {
    if (!nameValue || !emailValue || !passwordValue) {
      setStateDisabledButtonLogCW(true);
    } else {
      setStateDisabledButtonLogCW(false);
    }
  }, [nameValue, emailValue, passwordValue]);

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
            setUserDataFromClearForm(true);
          },

          handleClickWrapper: (event) => {
            event.preventDefault();
            setStateWrapper(getDataClearForm);
          },
          turnOffStateLocal: () => {
            if (clearFormTypeOfContent !== showNoneForm) {
              setStateWrapper(formState);
            } else {
              setStateWrapper(clear);
            }
          },
        }}
        dataAdditionalActions={dataAdditionalActions}
        render={(functions, dataAdditionalActions) => {
          const { handleOnChange, handleClickWrapper } = functions;

          return (
            <div>
              <button
                className="clearForm-buttonLog"
                onClick={handleClickWrapper}
                disabled={stateDisabledButtonLogCW}
              >
                {"ConsoleLog"}
              </button>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ClearWrapper;
