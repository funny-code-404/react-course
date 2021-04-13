import React from 'react';

class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         table: [],
      }
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
      const { children } = this.props;
      return (
         (children(table))
      )
   }
}

export default Table
