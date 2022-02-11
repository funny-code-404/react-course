/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from "react";
import styled from 'styled-components';
import { NAMES }  from '../Form/consts';
import { nanoid } from 'nanoid'
const TableContainer=styled.table`
td{
border: 1px solid black;
width:100px;
}
tr{
    cursor:pointer;
    &:hover{
        background-color:gray;
    }
}
`;

class Table extends React.Component{     

    render(){
        const {data, onClick} = this.props
        return(            
            <TableContainer>
            <thead>
                <tr>
                    <td>№</td>
                    <td>Марка</td>
                    <td>Mодель</td>
                    <td>Год выпуска</td>
                    <td>Цена</td>
                </tr>
            </thead>
            <tbody>
            {data&&data.map((item, index)=>(                           
                <tr key = {nanoid()} onClick={onClick}>
                    <td>{index+1}</td>
                    <td name={[NAMES.brand]}>{item.brand}</td>
                    <td name={[NAMES.model]}>{item.model}</td>
                    <td name={[NAMES.year]}>{item.year}</td>
                    <td name={[NAMES.price]}>{item.price}</td>
                </tr>            
            ))}
            </tbody>
            </TableContainer>
        )
    }

}

export default Table