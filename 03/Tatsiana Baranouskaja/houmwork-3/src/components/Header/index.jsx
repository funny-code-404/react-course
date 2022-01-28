import Text from "../Text";
import { HeaderContainer } from './styles';

function Header() {
    return (
    <HeaderContainer>
        <Text text='Header'/> 
        <div className="wrapper">
        
     
        <h1>Header</h1>
        <h2>Sub Header</h2>
        
       <div>
           <h3>Card</h3>
           <p>Text</p>
       </div>
        </div> 
    
    </HeaderContainer>
    );
     
  
  }
  
  export default Header;
  