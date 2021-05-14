import React from "react";
import "./style.css";

const url = "https://cat-fact.herokuapp.com/facts";

class Header extends React.Component {
  async componentDidMount() {
    // console.log("Mount");

    if (!this.props.data.categories) {
      // console.log("get new categories");
      fetch(url)
        .then((data) => data.json())
        .then((categories) => {
          const { passToParent } = this.props.functions;
          passToParent(categories);
        });
    }
  }

  render() {
    const { categories } = this.props.data;
    // console.log("Render");

    return (
      <header>
        <ul>
          {categories &&
            categories.map((cat) => <li key={cat._id}>{cat.text}</li>)}
        </ul>
      </header>
    );
  }
}
export default Header;
