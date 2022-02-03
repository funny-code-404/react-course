import React from "react";
class Navigation extends React.Component {

handleClick = (e) => {
  this.props.handleFetch(e.target.id)
}

render(){

  return(
    <div>
      {this.props.dogs.map((item, i) =>(
       <button key={i} id={item} onClick={this.handleClick}>{item}</button>
      ))}
    </div>
  )
}
}
export default Navigation;
