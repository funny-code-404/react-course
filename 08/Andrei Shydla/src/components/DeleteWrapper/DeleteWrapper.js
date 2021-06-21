import React, { useState, useEffect } from "react";
import DataContainerForm from "../../containers/DataContainerForm";

const arrRadio = [1, 2, 3, 4, 5];
const arrRadioNames = arrRadio.map((item) => `rateName${item}`);

const DeleteWrapper = (props) => {
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
    { nameValue, emailValue, passwordValue, commentValue, rateValue },
    setWrapperValue,
  ] = useState({
    nameValue: "",
    emailValue: "",
    passwordValue: "",
    commentValue: "",
    rateValue: "",
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

  // ------log the main states----
  // useEffect(() => {
  //   console.log(
  //     `DeleteWrapper - Content: ${clearFormTypeOfContent}, Connect: ${connectorForms}, StateWrapper: ${stateWrapper}, stateAdditionalData: ${stateAdditionalData}, rateValue: ${rateValue}; `
  //   );
  // }, [
  //   data,
  //   clearFormTypeOfContent,
  //   connectorForms,
  //   stateWrapper,
  //   stateAdditionalData,
  //   rateValue,
  // ]);

  useEffect(() => {
    if (!commentValue && !rateValue) {
      setStateAdditionalData(clear);
    } else if (commentValue && rateValue) {
      setStateAdditionalData(on);
    }
  }, [commentValue, rateValue]);

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
      !commentValue ||
      !rateValue
    ) {
      setStateDisabledButtonWrapper(true);
    } else {
      setStateDisabledButtonWrapper(false);
    }
  }, [nameValue, emailValue, passwordValue, commentValue, rateValue]);

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

          handleClickRate: (event) => {
            arrRadioNames.forEach((item) => {
              if (item !== event.target.name) {
                const checkboxLinkItem = document.getElementsByName(item);
                checkboxLinkItem[0].checked = false;
              }
            });

            setWrapperValue((prevState) => ({
              ...prevState,
              rateValue: event.target.value,
            }));
          },

          handleClickWrapper: (event) => {
            event.preventDefault();
            setStateWrapper(switching);
            const message = `User deleted  ---
            name: ${nameValue}, 
            email: ${emailValue},
            password: ${passwordValue},
            comment: ${commentValue},
            rate: ${rateValue}`;
            console.log(message);
            alert(message);
            setWrapperValue({
              nameValue: "",
              emailValue: "",
              passwordValue: "",
              commentValue: "",
              rateValue: "",
            });
            setWrapperTitle("");
          },
          turnOffStateLocal: () => {
            setStateWrapper(formState);
          },
        }}
        dataAdditionalActions={dataAdditionalActions}
        render={(functions, dataAdditionalActions) => {
          const {
            handleClickRate,
            handleOnChange,
            handleClickWrapper,
          } = functions;
          const { buttonLabel, additionalBlockLabel } = dataAdditionalActions;

          const renderRadio = arrRadio.map((item) => {
            return (
              <div className="deleteForm-radioItem" key={item}>
                <input
                  className="deleteForm-radioItem-input"
                  type="radio"
                  name={`rateName${item}`}
                  id={`rate${item}`}
                  onChange={handleClickRate}
                  value={item}
                />
                <label
                  className="deleteForm-radioItem-label"
                  htmlFor={`rate${item}`}
                >
                  {item}
                </label>
              </div>
            );
          });

          return (
            <div>
              <h2>{additionalBlockLabel}</h2>

              <textarea
                className="deleteForm-textarea"
                name={"comment"}
                placeholder="leave Your comment"
                rows="4"
                value={commentValue}
                onChange={handleOnChange}
              ></textarea>
              <div className="deleteForm-radioGroup-title">
                <h3>Rate the application:</h3>
              </div>
              <div className="deleteForm-radioGroup">{renderRadio}</div>

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

export default DeleteWrapper;
