//Core
import react from "react";

//Syle
import "./footer.scss";
import logo1 from './img/thenanobel-programming-17.01-transparent.png'

export class Footer extends react.Component {
  render() {
    return (
      <div className="footer">
        <div className='footLinks'>
          <a href="#">Inst</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>

        <img src={logo1}></img>

        <div className='footInf'>
            <p>Our contacts:(VEL) +375(29)4739476</p>
            <p>Our contacts:(MTC) +375(44)4739476</p>
            <p>Our contacts:(LIFE) +375(25)4739476</p>
        </div>
      </div>
    );
  }
}
