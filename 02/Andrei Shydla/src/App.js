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

const arrayItems = [
  dataDropDownList.data1,
  dataDropDownList.data2,
  dataDropDownList.data3,
];

class App extends React.Component {
  listItems = (arrayItems) =>
    arrayItems.map((item, index) => (
      <BlockDropDownList key={index} dataDDL={item} />
    ));

  render() {
    const renderListItems = this.listItems(arrayItems);

    return (
      <div>
        <Counter headLabel={data.label} />
        <>{renderListItems} </>
        <BlockForm />
      </div>
    );
  }
}

export default App;
