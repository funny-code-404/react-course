import React from "react";
import { CheckIn, Login, AccountDeleting } from "./components/Forms.jsx";

const App = () => {
  return (
    <div className="App">
      <CheckIn />
      <Login />
      <AccountDeleting />
    </div>
  );
};

export default App;
