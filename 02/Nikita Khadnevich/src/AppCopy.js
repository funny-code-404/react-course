import './App.css';
import React from 'react';

// import './style.scss';


class AppCopy extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         data: {
            name: '',
            email: '',
            passw: '',
            status: {
               name: 'start',
               email: 'start',
               passw: 'start',
            }
         }
      }
   }s 
   
   updateData = (e, validatorName, validatorEmail, validatorPassw) => {
      const { name, value } = e.target;
      validatorName = 
         value.length < 5 ? 'warning' :
         value.length < 12 ? 'info' : 'error'
      validatorEmail = 
         value.includes('@') == true ? 'info' :  
         value.includes('@') == false ? 'error' : 'error'
      validatorPassw = 
         value.length >= 6 && value.replace(/[^0-9]/g, '').length > 0 ? 'info' :
         value.length < 6 && value.replace(/[^0-9]/g, '').length == 0 ? 'error' : 'error'

      const checkBox = (name, value, field) => {
            this.setState(prevState => ({
            ...prevState,
            data: {
               ...prevState.data,
               [name]: value,
               status: {
                  ...prevState.status,
                  [name] : field,
               }
            }
         }));
      }
      
      if (name === 'name') {
         checkBox(name, value, validatorName)
      }
      if (name === 'email') {
         checkBox(name, value, validatorEmail)
      }
      if (name === 'passw') {
         checkBox(name, value, validatorPassw)
      }
   }; 
   
   oneClick = (event) => {
      const { data: {name, email, passw} } = this.state;
      this.props.upDataFRST(name, email, passw)
   }

   chekerStatus = () => {
      const { data: {name, email, passw}} = this.state;
   }
  
   render() {
      const { data: {name, email, passw, status } } = this.state;
         return (
         <>
         <div className='myForm'>
            <form>
               <input name="name" className={status.name} value={name} placeholder='name' onChange={this.updateData} />
               {status.name === 'warning' && <p>Имя короткое</p>}

               <input name="email" className={status.email} value={email} placeholder='email' onChange={this.updateData} />
               {status.email === 'error' && <p>Адрес почты должен содержать @</p>}

               <input name="passw" className={status.passw} value={passw} placeholder='passw' onChange={this.updateData} />
               {status.passw === 'error' && <p>Пароль должен содержать цифры и быть длиннее 6</p>}
            </form>   
               <button onClick={this.oneClick}>Click</button> 
               {/* По клику запускается РОДИТЕЛЬСКИЙ метод-колбэк и принимает пар-ром стэйт ЧАЙЛД1*/}
         </div> 
         </>
      );
   }
}

export default AppCopy
