import React from "react";

class BlockInputLabel extends React.Component {
  render() {
    const {
      data: {
        label: { headLabel, classNameLabelList },
      },
    } = this.props;

    return (
      <div className={classNameLabelList}>
        <label>{`${headLabel}: `}</label>
      </div>
    );
  }
}

export default BlockInputLabel;
