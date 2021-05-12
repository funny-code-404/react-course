import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";
import Names from "./components/Names";
import NameInfo from "./components/NameInfo";
import PhoneNumbers from "./components/PhoneNumbers";
import PhoneNumbersInfo from "./components/PhoneNumbersInfo";
import NameCalls from "./components/NameCalls";

const data = [
  ["10", "pit", "711-11-11", ["40", "50"], ["40", "50", "70", "40", "50"]],
  [
    "20",
    "helen",
    "722-22-22",
    ["30", "60", "80"],
    ["30", "80", "60", "60", "40"],
  ],
  [
    "30",
    "jane",
    "733-33-33",
    ["10", "70", "80"],
    ["10", "70", "10", "80", "70"],
  ],
  ["40", "nick", "744-44-44", ["50", "60"], ["80", "50", "60", "50", "60"]],
  ["50", "mick", "755-55-55", ["40", "60"], ["80", "40", "60", "40", "60"]],
  [
    "60",
    "donaldDuck",
    "766-66-67",
    ["20", "40", "70"],
    ["20", "40", "70", "40", "70"],
  ],
  [
    "70",
    "paddington",
    "777-77-77",
    ["30", "60", "80"],
    ["60", "80", "30", "60", "80"],
  ],
  [
    "80",
    "lusy",
    "788-88-88",
    ["10", "20", "70"],
    ["10", "20", "40", "50", "70"],
  ],
];

const phoneBook = data.map(([id, name, phoneNumber, friends, calls]) => {
  return {
    id: id,
    name: name,
    phoneNumber: phoneNumber,
  };
});

const baseFriends = data.map(([id, name, phoneNumber, friends, calls]) => {
  return {
    id: id,
    friends: friends,
  };
});

const baseCalls = data.map(([id, name, phoneNumber, friends, calls]) => {
  return {
    id: id,
    calls: calls,
  };
});

class App extends React.Component {
  render() {
    // console.log(baseCalls);

    return (
      <Router>
        <Link to="/">Home</Link>
        <nav className="navigation">
          <Link
            to={{
              pathname: "/names",
              state: {
                phoneBook: phoneBook,
                baseFriends: baseFriends,
                baseCalls: baseCalls,
              },
            }}
          >
            Names
          </Link>

          <Link
            to={{
              pathname: "/phoneNumbers",
              state: {
                phoneBook: phoneBook,
                baseFriends: baseFriends,
              },
            }}
          >
            Phone numbers
          </Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/names" exact component={Names} />
          <Route path="/names/:name/" exact component={NameInfo} />
          <Route path="/phoneNumbers" exact component={PhoneNumbers} />
          <Route
            path="/phoneNumbers/:phoneNumber/"
            exact
            component={PhoneNumbersInfo}
          />
          <Route path="/names/:name/calls" exact component={NameCalls} />
        </Switch>
      </Router>
    );
  }
}

export default App;
