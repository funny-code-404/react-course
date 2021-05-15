import React, {Component} from 'react';

import Item from "../Item";

class Table extends Component{

    render() {
        const {dataModel, onDelete, onChecked} = this.props
        return (
            <div>

                    {dataModel.data.map((data, i) =>

                            <Item key={i} data = {data} deleteItem = {onDelete} checkedItem = {onChecked}/>

                    )}

            </div>
        );
    }


}

export default Table;
