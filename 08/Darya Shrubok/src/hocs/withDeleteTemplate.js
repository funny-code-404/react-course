import React from "react";

const withDeleteTemplate = (Component) => (props) => {
  const config = {
    label: "Отправить",
    handler: (e) => {
      e.preventDefault();
      console.log("Отправить");
    },
  };
  return <Component deleteConfig={config} {...props} />;
};

export default withDeleteTemplate;