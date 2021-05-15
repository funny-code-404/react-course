import React from "react";
import ListItem from "../ListItem";

class List extends React.Component {
  handleChange = (id, status) => {
    this.props.onChange(id, status);
  };
  handleDelete = (id) => {
    this.props.onDelete(id);
  };
  render() {
    console.log("render list");
    const { data } = this.props;
    return (
      <>
        <ul>
          {data.map((item, i) => (
            <ListItem
              key={i}
              data={item}
              onChange={this.handleChange}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default List;
