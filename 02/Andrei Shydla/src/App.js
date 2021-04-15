import React from "react";
import Counter from "./components/Counter";
import BlockDropDownList from "./components/BlockDropDownList";
import BlockForm from "./components/BlockForm";

const data = {
  label: "HEADER",
};

const dataDropDownList = {
  data1: {
    headLabel: "Header 1",
    list: {
      listItem1: "item 1",
      listItem2: "item 2",
    },
  },
  data2: {
    headLabel: "Header 2",
    list: {
      listItem1: "item 10",
      listItem2: "item 20",
      listItem3: "item 30",
    },
  },
  data3: {
    headLabel: "Header 3",
    list: {
      listItem1: "item 100",
      listItem2: "item 50",
      listItem3: "item 200",
      listItem4: "item 3000",
    },
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter headLabel={data.label} />
        <BlockDropDownList dataDDL={dataDropDownList.data1} />
        <BlockDropDownList dataDDL={dataDropDownList.data2} />
        <BlockDropDownList dataDDL={dataDropDownList.data3} />

        <BlockForm />
      </div>
    );
  }
}

export default App;
