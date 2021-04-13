import React, { Component } from 'react';

const hocTable = Component => {
   return class extends React.Component {
      state = {
         table: [],
      }

      componentDidMount() {
         const tableArr = [];
         while (tableArr.length < 195) {
            tableArr.push(tableArr.length)
         }
         this.setState({
            table: tableArr,
         })
      }

      render() {
         const { table } = this.state;
         const { children } = this.props
         return <Component table={children(table)} />
      }
   }
}

export default hocTable