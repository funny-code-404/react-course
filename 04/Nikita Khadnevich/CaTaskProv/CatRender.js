import React from 'react';

class CatRender extends React.PureComponent {
   //Наследование от PureComponent решает тоже самое , что и шудкомпонент, но требует внимания
   // Пьюр компонент српвнивается "По верхам" - всегда сравнивается стэйт и чилдрен пропс. если нужно что-то точечно сравнить и отрисовать - то лучше Шудкомпонент. НЕ сравнивает глубинную вложенность
   constructor(props) {
      super(props)
      this.state = {
         open: false
      }
   }

   handleClickSpan = () => {
      this.setState(prevState => ({
         open: !prevState.open
      }))
   }

// shouldComponentUpdate(prevProps,prevState) {
//    return prevState.open !== this.state.open
// }
   //Если у нас стэйт open равен прошлому стэйту, то в нашем случе спан не открывался и отрисовывать не за чем блок с котом. А если же они не равны друг другу - то будь добр отрисуй, ибо произошло изменение в стэйте объекта!!! 

   render() {
      const { id, name, image,  temperament, wikipedia_url, social_needs, child_friendly, hairless, dog_friendly} = this.props
      console.log('RENDER', {name})
      const { open } = this.state
      return (
      <>   
         <div className={id + ` Number`}>
            <p>{name}</p>
            <span className='showBtn' onClick={this.handleClickSpan}>
               {open ? '-' : '+'}
            </span>
            {open && (
            <div className={name + ` Cat`}>
               <h4>{name}</h4>
               <div className={name + ' Img'}><img src={image} /></div>
               <p>Характер: {temperament}</p>
               <p>Потребность в общении: {social_needs}</p>
               <p>Отношение к детям: {child_friendly}</p>
               <p>Длинна шерсти: {hairless}</p>
               <p>Отношение к собакам: {dog_friendly}</p>
               <div>
                  <p>More info:</p>
                  <div><a href={wikipedia_url}>Look at this</a></div>
               </div>
            </div>
            )}
         </div>
      </>   
      );
   }
}

export default CatRender