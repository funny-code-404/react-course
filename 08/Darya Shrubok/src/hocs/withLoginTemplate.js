import React from "react";

const withLoginTemplate = (Component) => (props) => {
  const config = {
    label: "Войти",
    handler: (e) => {
      e.preventDefault();
      console.log("Войти");
    },
  };
  return <Component loginConfig={config} {...props} />;
};

export default withLoginTemplate;
