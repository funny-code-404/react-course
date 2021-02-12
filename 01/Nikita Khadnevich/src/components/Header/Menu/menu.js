
const Menu = (props) => {
      return (
         <div className={props.className}
            data-sea={props.datasea}
            data-peak={props.datapeak}
            data-forest={props.dataforest}>
            <a href="#">{props.name}</a>
         </div>
      )
   }

export default Menu