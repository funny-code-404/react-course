import React, { Component } from "react";

import "./Spreedshet.scss";

export class Spreedshet extends Component {
  render() {
    const { mainDataList, extraDataList, id } = this.props.carsList;
    return (
      <div className="spreedshet">
        <div className="shet-grid">
          <div>Brand</div>
          <div>Year</div>
          <div>Country</div>
          <div>Used</div>
          <div>Defect</div>
        </div>

        {mainDataList.map((item, index) => (
          <div key={id[index]} className="shet-grid-content">
            <div>{item.name === "" ? <span>Not choosen</span> : item.name}</div>
            <div>{item.year === "" ? <span>Not choosen</span> : item.year}</div>
            <div>
              {extraDataList[index].country === "" ? (
                <span>Not choosen</span>
              ) : (
                extraDataList[index].country
              )}
            </div>
            <div>{extraDataList[index].used ? "Yes" : "No"}</div>
            <div>{extraDataList[index].defect ? "Yes" : "No"}</div>
          </div>
        ))}
      </div>
    );
  }
}
