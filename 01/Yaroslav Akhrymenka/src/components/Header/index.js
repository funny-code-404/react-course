import React from "react";
import logoImg from "./logoinv.png";

import listImg from "./list.png";
// Import styles for header
import "./style.css";

class Header extends React.Component {
	render() {
		return (
			<header className="main__head">
				{
					// Беспощадный оверлай
				}
				<div className="overlay"></div>
				<div className="container">
					{
						// Контейнер с лого, телефонами и меню
					}
					<div className="flex_container">
						{
							// Реквизиты вверху
						}
						<span className="topCaption">
							<img src={listImg} width="32" height="32" /> УП «Бровки
							Минскзеленстроя», д.Бровки, ул. Центральная, 5 Лошанский с/с
						</span>
						{
							// Логотип
						}
						<a href="/" className="logo">
							<img src={logoImg} width="100" height="100" />
						</a>
						{
							// Телефоны для связи
						}

						<ul className="phones__mail">
							<li>+375 (29) 395-43-51</li>
							<li>+375 (17) 510-69-59</li>
							<li>bro.mzs@tut.by</li>
						</ul>
					</div>

					<div className="caption">
						<h1>Собственный питомник с посадочным материалом на 450га</h1>
						<h2>Более 420 наименований деревьев и кустарников в наличии</h2>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
