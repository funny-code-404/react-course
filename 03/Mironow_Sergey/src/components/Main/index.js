import React from 'react';
import Text from '../Text';

class Main extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () =>
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div className='App'>
        {isOpen && <List />}
        {children}
        <button onClick={this.handleClick}>Open / close</button>
      </div>
    );
  }
}

const List = () => (
  <div>
    <Text text='Text 1' />
    <Text text='Text 2' />
    <Text text='Text 3' />
  </div>
);

export default Main;
