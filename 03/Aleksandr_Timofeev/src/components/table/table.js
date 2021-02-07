import React from 'react';
import './style.css';

class Table extends React.Component{


  click = (event) => {
    const idElemTable = event.target.parentElement.parentElement.id;
    console.log(idElemTable);
  }

  render(){

    const items= this.props.data.map((item, index) => (
      <div id={item.id} className="row" key={item.id} value={item.id}
        onClick={this.click} >
        <div className="wrapper-item">
          <div className="item">{index + 1}</div>
          <div className="item">{item.brand}</div>
          <div className="item">{item.model}</div>
          <div className="item">{item.year}</div>
          <div className="item">{item.price} $</div>
        </div>
      </div>))

    return(
  <>
    <div className="wrapper-table">
      { items }
    </div>
  </>
)}
}

export default Table;
