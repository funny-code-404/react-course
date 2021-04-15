import React from "react";
import DropDownList from "../DropDownList";
import "./style.css";

class BlockDropDownList extends React.Component {
  state = {
    isShown: true,
  };

  handleClick = async () => {
    await this.changeState();
  };

  changeState = () => {
    const { isShown } = this.state;
    this.setState((prevState) => ({
      ...prevState,
      isShown: !isShown,
    }));
  };

  render() {
    const { headLabel, list } = this.props.dataDDL;
    const { isShown } = this.state;
    const classNameList = isShown ? "arrow" : "arrow arrowRotated";
    return (
      <div className="box">
        <button
          className="position btn"
          onClick={() => {
            this.handleClick();
          }}
        >
          <div className={classNameList}> </div>
        </button>
        <h1 className="position">{headLabel}</h1>

        <div>{isShown && <DropDownList list={list} />}</div>
      </div>
    );
  }
}
export default BlockDropDownList;
