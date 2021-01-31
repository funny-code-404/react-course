
const Logo = (props) => {
   return (
   <div className={props.className}>
      <a href={props.links}>
         <img src={props.imgLink} alt="logo"></img>
      </a>
   </div>
   )
}

export default Logo