import React from "react";
import "./main.scss";
import logo from "../../img/logo.svg";

export const Main = ({ buttonContent, mainTitle }) => (
  <main className="main">
    <div className="main__filters">
      <div className="main__logo">
        <img src={logo} alt="not found" />
      </div>

      <h2 className="main__title">{mainTitle}</h2>

      <div className="main__buttons">
        {buttonContent.map((item, index) => {
          return (
            <button
              key={index}
              className={`main__button main__button${
                index === 0 ? "--left" : "--right"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  </main>
);
