import React from 'react';
import './index.css';

class Table extends React.Component {

   constructor(props) {
      super(props)
            this.state = {
         carObj:
            {
            number: this.props.number,
            brand: this.props.brand,
            model: this.props.model,
            year: this.props.year,
            cost: this.props.cost,
            },
            carArr: [],
      }
   }

   componentDidUpdate(prevProps) {
      if (prevProps.number !== this.props.number) {
         let carArr = this.state.carArr;
         let carObj = {
            number: this.props.number,
            brand: this.props.brand,
            model: this.props.model,
            year: this.props.year,
            cost: this.props.cost,
            }
         carArr.push(carObj);
         //  Не разобрался как правильно запушить в массив, в самом setState
         this.setState({
            carArr: carArr
         })
      }
   }
      
   render() {
      return (
         <>
            <div className='wrappertable'>
               <table className="table">
                  <thead>
                     <tr>
                        <th>Number</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Cost($)</th>
                     </tr>
                  </thead>
                  {this.state.carArr.map((item, index) => {
                  return (
                  <tbody>
                     <tr>
                        <td>{++index}</td>
                        <td>{item.brand}</td>
                        <td>{item.model}</td>
                        <td>{item.year}</td>
                        <td>{item.cost}</td>
                        <td id='delete' data-num={index}>X</td>
                     </tr>
                  </tbody>
               )})}
               </table>
            </div>    
         </>
      )
   }
}

export default Table;
