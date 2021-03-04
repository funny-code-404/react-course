import React from "react";
import { Form } from "./components/Form";
import { TasksList } from "./components/TasksList";

const App = () => (
  <div className="App">
    <Form />
    <TasksList />
  </div>
);

export default App;
