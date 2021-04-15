import React, {Component} from 'react'

import './Table.css'

class Table extends Component{


    handleClick = (e) =>{
        const {onClick} = this.props
        onClick(e.currentTarget.id)
    }

    render() {

        const {dataModel} = this.props
        return (

            <div>
               <div className='table'>

                   <p>N</p>
                   <p>Brand</p>
                   <p>Model</p>
                   <p>Year</p>
                   <p>Cost</p>
               </div>
                   {dataModel.data.map((data, i) =>
                       <div className='table' id={data.id} onClick={this.handleClick}>
                           <p>{data.id}</p>
                           <p>{data.value.brand}</p>
                           <p>{data.value.model}</p>
                           <p>{data.value.year}</p>
                           <p>{data.value.cost}</p>
                       </div>
                   )}
            </div>
        );
    }
}

export default Table;