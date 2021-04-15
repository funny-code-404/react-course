import React from "react";

class DropDownList extends React.Component {
  render() {
    const list = this.props.list;

    const arrayList = Object.entries(list).map(([key, value]) => {
      return { key: key, title: value };
    });

    const renderItems = arrayList.map((item) => (
      <li key={item.key}>{item.title}</li>
    ));

    return <div>{renderItems}</div>;
  }
}
export default DropDownList;
