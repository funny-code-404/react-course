import React from "react";

class BlockInputMark extends React.Component {
  render() {
    const {
      classNameVerMarkListDefault,
      classNameVerMarkListTrue,
    } = this.props.data.mark;
    const { state } = this.props.data;

    const classNameListVerMarkName =
      state === "0" || !state
        ? classNameVerMarkListDefault
        : `${classNameVerMarkListDefault} ${classNameVerMarkListTrue}`;
    return <div className={classNameListVerMarkName} />;
  }
}

export default BlockInputMark;
