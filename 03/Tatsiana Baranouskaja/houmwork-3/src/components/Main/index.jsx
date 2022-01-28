import React from "react";
import Text from "../Text";

class Main extends React.Component {
    state = {
        isOpen: false,
};


    handleClick = () => this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))
   

    render () {
        const {isOpen} = this.state;
        return (
            <div className="App">
                { isOpen && <div>
                <Text text='Text 1'/> 
                <Text text='Text 2'/>
                <Text text='Text 3'/>
                </div>}
                <button onClick={this.handleClick}>Open/Close</button>
            </div> 
            );
    }
   
     
  
  }
  
  export default Main;
  