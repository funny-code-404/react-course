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

  // ------log the main states
  // useEffect(() => {
  //   console.log(
  //     `RegisterWrapper - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, StateWrapper: ${stateWrapper}, stateAdditionalData: ${stateAdditionalData}; `
  //   );
  // }, [
  //   data,
  //   clearFormTypeOfContent,
  //   connectorForms,
  //   stateWrapper,
  //   stateAdditionalData,
  // ]);

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
    if (
      !nameValue ||
      !emailValue ||
      !passwordValue ||
      !surnameValue ||
      !yearOfBirthValue ||
      !phoneNumberValue
    ) {
      setStateDisabledButtonWrapper(true);
    } else {
      setStateDisabledButtonWrapper(false);
    }
  }, [
    nameValue,
    emailValue,
    passwordValue,
    surnameValue,
    yearOfBirthValue,
    phoneNumberValue,
  ]);

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

          handleOnChange: (event) => {
            const name = event.target.name;
            const keyValueChanged = `${name}Value`;
            setWrapperValue((prevState) => ({
              ...prevState,

              [keyValueChanged]: event.target.value,
            }));
          },

          handleClickWrapper: (event) => {
            event.preventDefault();
            setStateWrapper(switching);

            const message = `User registrated  ---
            name: ${nameValue}, 
            email: ${emailValue},
            password: ${passwordValue},
            surname: ${surnameValue},
            yearOfBirth: ${yearOfBirthValue},
            phoneNumber: ${phoneNumberValue};`;
            console.log(message);
            alert(message);
            setWrapperValue({
              nameValue: "",
              emailValue: "",
              passwordValue: "",
              surnameValue: "",
              yearOfBirthValue: "",
              phoneNumberValue: "",
            });
            setWrapperTitle("");
          },
          turnOffStateLocal: () => {
            setStateWrapper(formState);
          },
        }}
        dataAdditionalActions={dataAdditionalActions}
        render={(functions, dataAdditionalActions) => {
          const { handleOnChange, handleClickWrapper } = functions;
          const { buttonLabel, additionalBlockLabel } = dataAdditionalActions;

          const additionalInputsData = [
            ["surname", surnameValue],
            ["yearOfBirth", yearOfBirthValue],
            ["phoneNumber", phoneNumberValue],
          ];

          const renderAdditionalInputs = additionalInputsData.map((item) => {
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
            <div>
              <h2>{additionalBlockLabel}</h2>

              <>{renderAdditionalInputs}</>

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

export default RegisterWrapper;
