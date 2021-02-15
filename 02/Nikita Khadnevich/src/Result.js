import AppCopy from './AppCopy'
import React from 'react';
import VisualForm from './VisualForm'

class Result extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: {
            Parentname: '',
            Parentemail: '',
            Parentpassw: '',
         },
      }
   }

   upDataFRST = (name, email, passw) => {
      this.setState(prevState => ({
         ...prevState,
         data: {
            Parentname: name,
            Parentemail: email,
            Parentpassw: passw
         }
      }));
   };  /* Функция  меняет стэйт(name) у РОДИТЕЛЯ в зависимости от вэлью (коим выступает стэйт нэйм Чайлд1) Чайлд 1 */

   render() {
      const { data: {Parentname, Parentemail, Parentpassw} } = this.state;
        if (!Parentemail.length == 0,
            !Parentemail.length == 0,
            !Parentpassw == 0
         ) {
         return (
            <>
            <AppCopy upDataFRST={this.upDataFRST} /> 
            {/* Передаю солбэком в Чайлд 1 функцию РОДИТЕЛЯ */}
            <VisualForm 
               visualName={'formResult'}
               name={Parentname}
               email={Parentemail}
               passw={Parentpassw}/>
            {/* Задаю название пропса для ЧАЙЛД*/}
            </>
         );
      } else {
         return (
         <AppCopy upDataFRST={this.upDataFRST} />
         )
      }
   }
}

export default Result