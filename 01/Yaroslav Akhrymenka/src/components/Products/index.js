import React from "react";
import "./style.css";
import product1Img from "./product-1.jpg";
import product2Img from "./product-2.jpg";
import product3Img from "./product-3.jpg";
import product4Img from "./product-4.jpg";
class Products extends React.Component {
	render() {
		return (
			<section id="newProducts">
				<div className="container flex-container">
					<h2>Новые товары</h2>
					{
						// Сам элемент
					}
					<div className="product-item">
						<img src={product1Img} />
						<h3>Туя западная шаровидная</h3>
						<p>
							Красивая и стойкая шаровидная туя, подойдет для любых участков
						</p>
						<span>27.48 BYN</span>
						<a href="#" className="btn">
							Купить
						</a>
					</div>
					{
						// Сам элемент
					}
					<div className="product-item">
						<img src={product2Img} />
						<h3>Туя западная шаровидная</h3>
						<p>
							Красивая и стойкая шаровидная туя, подойдет для любых участков
						</p>
						<span>27.48 BYN</span>
						<a href="#" className="btn">
							Купить
						</a>
					</div>
					{
						// Сам элемент
					}
					<div className="product-item">
						<img src={product3Img} />
						<h3>Туя западная шаровидная</h3>
						<p>
							Красивая и стойкая шаровидная туя, подойдет для любых участков
						</p>
						<span>27.48 BYN</span>
						<a href="#" className="btn">
							Купить
						</a>
					</div>
					{
						// Сам элемент
					}
					<div className="product-item">
						<img src={product4Img} />
						<h3>Туя западная шаровидная</h3>
						<p>
							Красивая и стойкая шаровидная туя, подойдет для любых участков
						</p>
						<span>27.48 BYN</span>
						<a href="#" className="btn">
							Купить
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Products;
