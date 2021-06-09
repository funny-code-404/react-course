import React from "react";

class BlockInputLabel extends React.Component {
  render() {
    const { headLabel, classNameLabelList } = this.props.data.label;

    return (
      <div className={classNameLabelList}>
        <label>{`${headLabel}: `}</label>
      </div>
    );
  }
}

export default BlockInputLabel;
