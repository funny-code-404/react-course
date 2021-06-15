import React from "react";
import flagImg from "./flag.svg";
import "./style.css";

class Advantages extends React.Component {
	render() {
		return (
			<section id="advantages">
				<div className="container">
					{
						// Заголовок секции
					}
					<h2>Товары и услуги</h2>
					{
						// Контейнер для элементов
					}
					<div className="serv-list flex-container">
						{
							// Сам элемент
						}
						<div className="item ">
							<img src={flagImg} alt="flag" />
							<div className="caption">
								<h3>Питомник</h3>
								<p>
									Посадочный материал включает в себя 420 наименований. Площадь
									питомника составляет 450 га (15 км от Минска).
								</p>
							</div>
						</div>
						{
							// Сам элемент
						}
						<div className="item">
							<img src={flagImg} alt="flag" />
							<div className="caption">
								<h3>Рулонный газон</h3>
								<p>
									С 2008 года работает участок по выращиванию рулонных газонов
									площадью 80га.
								</p>
							</div>
						</div>
						{
							// Сам элемент
						}
						<div className="item">
							<img src={flagImg} alt="flag" />
							<div className="caption ">
								<h3>Благоустройство и озеленение</h3>
								<p>
									Оказываем услуги благоустройства и озеленения территории.
									Используем материал собственного производства.
								</p>
							</div>
						</div>
						{
							// Сам элемент
						}
						<div className="item">
							<img src={flagImg} alt="flag" />
							<div className="caption">
								<h3>Транспортные услуги</h3>
								<p>
									Окажем услуги по перевозке древесины, пересадке и доставке
									крупномерных деревьев, услуги строительной и тракторной
									техники.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Advantages;
