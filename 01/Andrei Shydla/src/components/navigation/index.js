import React from "react";
import "./style.css";

const arrayLinksForNavigation = ["Home", "Services", "Work", "About"];

const listOfLinks = (arrayLinks) =>
  arrayLinks.map((item, index) => (
    <li key={index}>
      <a href="#">{item}</a>
    </li>
  ));

function Navigation() {
  const renderListOfLinks = listOfLinks(arrayLinksForNavigation);
  return (
    <nav>
      <div className="nav">
        <ul className="container">{renderListOfLinks}</ul>
      </div>
    </nav>
  );
}

export default Navigation;
