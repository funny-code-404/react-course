import React, { useState, useEffect } from "react";
import DataContainerForm from "../../containers/DataContainerForm";

const RegisterWrapper = (props) => {
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

  const [
    {
      nameValue,
      emailValue,
      passwordValue,
      surnameValue,
      yearOfBirthValue,
      phoneNumberValue,
    },
    setWrapperValue,
  ] = useState({
    nameValue: "",
    emailValue: "",
    passwordValue: "",
    surnameValue: "",
    yearOfBirthValue: "",
    phoneNumberValue: "",
  });

  const [stateBasic, setStateBasic] = useState(clear);
  const [stateAdditionalData, setStateAdditionalData] = useState(clear);

  const [stateWrapper, setStateWrapper] = useState(clear);
  const [
    clearFormTypeOfContentLocal,
    setClearFormTypeOfContentLocal,
  ] = useState(showNoneForm);

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

  useEffect(() => {
    // console.log(
    //   `RegisterWrapper - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, StateWrapper: ${stateWrapper}, stateAdditionalData: ${stateAdditionalData}; `
    // );
  }, [
    data,
    clearFormTypeOfContent,
    connectorForms,
    stateWrapper,
    stateAdditionalData,
  ]);

  useEffect(() => {
    if (!surnameValue && !yearOfBirthValue && !phoneNumberValue) {
      setStateAdditionalData(clear);
    } else if (surnameValue || yearOfBirthValue || phoneNumberValue) {
      setStateAdditionalData(on);
    }
  }, [surnameValue, yearOfBirthValue, phoneNumberValue]);

  useEffect(() => {
    sendStateToApp();
  }, [stateBasic, stateAdditionalData]);

  useEffect(() => {
    if (connectorForms === disconnect) {
      if (formState === showForm && stateWrapper === clear) {
        setStateWrapper((prevProps) => formState);
      } else if (formState === clear && stateWrapper === showForm) {
        setStateWrapper((prevProps) => clear);
      }
    }
  }, [clearFormTypeOfContent, formState, stateWrapper, connectorForms]);

  useEffect(() => {
    if (formState === on && stateWrapper === showForm) {
      setWrapperTitle((prevProps) => title);
      setStateWrapper((prevProps) => formState);
      setWrapperValue((prevProps) => ({
        ...prevProps,
        nameValue: name,
        emailValue: email,
        passwordValue: password,
      }));
    }
  }, [formState, stateWrapper, connectorForms]);

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
            setWrapperValue((prevProps) => ({
              ...prevProps,

              nameValue: nameValue,
              emailValue: emailValue,
              passwordValue: passwordValue,
            }));
          },

          handleOnChange: (event) => {
            const name = event.target.name;
            const keyValueChanged = `${name}Value`;
            setWrapperValue((prevProps) => ({
              ...prevProps,

              [keyValueChanged]: event.target.value,
            }));
          },

          handleClickWrapper: (event) => {
            event.preventDefault();
            setStateWrapper((prevProps) => switching);
            const message = `User registrated  ---
            name: ${nameValue}, 
            email: ${emailValue},
            password: ${passwordValue},
            surname: ${surnameValue},
            yearOfBirth: ${yearOfBirthValue},
            phoneNumber: ${phoneNumberValue};`;
            console.log(message);
            alert(message);
            setWrapperValue((prevProps) => {
              return {
                nameValue: "",
                emailValue: "",
                passwordValue: "",
                surnameValue: "",
                yearOfBirthValue: "",
                phoneNumberValue: "",
              };
            });
            setWrapperTitle((prevProps) => "");
          },
          turnOffStateLocal: () => {
            setStateWrapper((prevProps) => formState);
          },
        }}
        dataAdditionalActions={dataAdditionalActions}
        render={(functions, dataAdditionalActions) => {
          const { handleOnChange, handleClickWrapper } = functions;
          const { buttonLabel, additionalBlockLabel } = dataAdditionalActions;

          return (
            <div>
              <h2>{additionalBlockLabel}</h2>

              <input
                className="clearForm-input"
                type="text"
                name={"surname"}
                placeholder="surname"
                value={surnameValue}
                onChange={handleOnChange}
              />

              <input
                className="clearForm-input"
                type="text"
                name={"yearOfBirth"}
                placeholder="yearOfBirth"
                value={yearOfBirthValue}
                onChange={handleOnChange}
              />

              <input
                className="clearForm-input"
                type="text"
                name={"phoneNumber"}
                placeholder="phoneNumber"
                value={phoneNumberValue}
                onChange={handleOnChange}
              />

              <button
                className="clearForm-buttonLog"
                onClick={handleClickWrapper}
                disabled={
                  !nameValue ||
                  !emailValue ||
                  !passwordValue ||
                  !surnameValue ||
                  !yearOfBirthValue ||
                  !phoneNumberValue
                }
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

export default RegisterWrapper;
