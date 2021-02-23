import React, { Component } from 'react'
import Table from './Table/Table'
import TableRender from './TableRender/TableRender'
import './App.css'


export default class App extends Component {

   render() {
      return (
         <>
            <Table>
               {table => <TableRender table={table} />}
            </Table>

         </>
      )
   }
}
