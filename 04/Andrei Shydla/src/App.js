import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import PropTypes from "prop-types";
import AppDogsImg from "./components/AppDogsImg";

class App extends React.Component {
  static propTypes = {
    data: PropTypes.shape(),
  };

  static defaultProps = {
    data: {},
  };

  state = {
    isShown: true,
    categories: null,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isShown: !prevState.isShown,
    }));
  };

  passToParent = async (arrayData) => {
    await this.setState((prevState) => ({
      ...prevState,

      categories: arrayData,
    }));
  };

  render() {
    // console.log("main render");
    const { isShown, categories } = this.state;

    return (
      <>
        {isShown && (
          <Header
            data={{ categories: categories }}
            functions={{ passToParent: this.passToParent }}
          />
        )}
        {categories && (
          <List>
            {categories.map(({ _id, text }) => (
              <List.Item key={_id} text={text} />
            ))}
          </List>
        )}
        <button onClick={this.handleClick}>Show / hide</button>

        <AppDogsImg />
      </>
    );
  }
}
export default App;
