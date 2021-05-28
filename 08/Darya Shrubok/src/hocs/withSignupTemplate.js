import React from "react";

const withSignupTemplate = (Component) => (props) => {
  const config = {
    label: "Зарегистрироваться",
    handler: (e) => {
      e.preventDefault();
      console.log("Зарегистрироваться");
    },
  };
  return <Component signupConfig={config} {...props} />;
};

export default withSignupTemplate;