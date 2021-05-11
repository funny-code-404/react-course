import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 500px;
`;

const StyledForm = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    outline: none;
    width: 100%;
    background: #fff;
    margin-bottom: 3%;
    border: 1px solid #ccc;
    padding: 3%;
    color: #555;
  }

  button {
    margin-top: 2%;
    width: 30%;
    padding: 3%;
    background: #007bff;
    border: 1px solid #007bff;
    outline: none;
    color: #fff;

    :hover {
      cursor: pointer;
      background-color: #225fbf;
      transition-duration: 0.5s;
    }
  }
`;

class Form extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
  };

  handleClick = (e) => {
    e.preventDefault();
    const { firstname, lastname, phone } = this.state;
    if (!firstname || !lastname || !phone) {
      alert("Все поля должны быть заполнены");
      return;
    }
    this.props.onClick(this.state);
    this.setState({
      firstname: "",
      lastname: "",
      phone: "",
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { firstname, lastname, phone } = this.state;
    const { row } = this.props;
    return (
      <Wrapper>
        <StyledForm>
          <input
            value={firstname || row.firstname}
            name="firstname"
            onChange={this.handleChange}
            placeholder="Firstname"
          />
          <input
            value={lastname || row.lastname}
            name="lastname"
            onChange={this.handleChange}
            placeholder="Lastname"
          />
          <input
            value={phone || row.phone}
            name="phone"
            onChange={this.handleChange}
            placeholder="Phone"
          />
          <button onClick={this.handleClick}>Add</button>
        </StyledForm>
      </Wrapper>
    );
  }
}

export default Form;
