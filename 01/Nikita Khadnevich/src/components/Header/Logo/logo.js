
const Logo = (props) => {
   return (
   <div className={props.className}>
      <a href={props.links}>
         <img src={props.imgLink} alt="logo" />
      </a>
   </div>
   )
}

export default Logo