import React from 'react';
import CatFetch from './CatFetch'
import CatItem from './CatItem'
import './CatIndex.css';

class Accum extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
      }
   }

   render() {
      return (
      <>   
         <div className='greatCat'>
            <CatFetch>
               {cat => <CatItem cat={cat} />}
            </CatFetch>
            {/* // Запускаю Провайдер и передаю пропсину CatItem// */}
         </div>
      </>   
      );
   }
}

export default Accum