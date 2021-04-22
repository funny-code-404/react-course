import React from 'react';
import List from './components/List';
import Form from './components/Form';
import styled from 'styled-components';

const StyledWrap = styled.div`
  display: flex;
  margin: 50px auto;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF2A7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, .5);
`;


class App extends React.Component {
  state = {
    name: '',
    password: '',
    email: ''
  };

  handleChange = (data) => {
    const { name, value } = data;

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  render() {
    return (
      <StyledWrap>
        <List list={this.state} />
        <Form onChange={this.handleChange}  />
      </StyledWrap>
    );
  }
}

export default App;
