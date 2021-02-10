import React from "react";
import styled from "styled-components";

class TableBody extends React.Component {
  onChange = ({ target: { value, name }, currentTarget: { id } }) => {
    this.props.handleChange(value, name, id);
  };

  render() {
    const { names, data } = this.props;

    return (
      <>
        {data.map(({ name, model, year, cost, id }, index) => (
          <tr key={id} id={id} onChange={this.onChange}>
            <Item>
              <Textarea name={names.number} disabled defaultValue={index + 1} />
            </Item>
            <Item>
              <Textarea name={names.name} defaultValue={name} />
            </Item>
            <Item>
              <Textarea name={names.model} defaultValue={model} />
            </Item>
            <Item>
              <Textarea name={names.year} defaultValue={year} />
            </Item>
            <Item>
              <Textarea name={names.cost} defaultValue={cost} />
            </Item>
          </tr>
        ))}
      </>
    );
  }
}

const Item = styled.td`
  border: 2px solid #000;
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  padding: 10px;
  outline: none;
  resize: none;
  box-sizing: border-box;
  font-size: 16px;
`;

export default TableBody;
