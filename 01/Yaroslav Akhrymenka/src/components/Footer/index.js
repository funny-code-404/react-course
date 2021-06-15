import React from "react";
import "./style.css";
import logoImg from "../Header/logoinv.png";
class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div className="container flex-container">
					<a href="/">
						<img src={logoImg} alt="Бровки Минскзеленстроя" />
					</a>

					<ul className="phones__mail">
						<li>+375 (29) 395-43-51</li>
						<li>+375 (17) 510-69-59</li>
						<li>bro.mzs@tut.by</li>
					</ul>
				</div>
			</footer>
		);
	}
}
export default Footer;
