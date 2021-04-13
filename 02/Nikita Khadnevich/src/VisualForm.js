import React from 'react';
class VisualForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
      }
   }

   render() {
      return (
      <>
         <div className={this.props.visualName}>
            <p>{this.props.name}</p>
            <p>{this.props.email}</p>
            <p>{this.props.passw}</p> 
         </div>
      </>   
/* Принимаем и вывожу проп, как результат */
      )
   }
}
export default VisualForm