import React from "react";
import "./style.css";
class Image extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgSrc: "",
			imgStatus: "",
			imgUrl: this.props.getDogImg,
		};
	}

	getImg = (url) => {
		return fetch(url).then((resp) => {
			return resp.json();
		});
	};

	componentDidMount = () => {
		this.getImg(this.props.getRandomImg).then((resp) => {
			return this.setState((prevstate) => ({
				...prevstate,
				imgSrc: resp.message,
				imgStatus: resp.status,
			}));
		});
	};

	componentDidUpdate = (prevProps) => {
		if (this.props.getDogImg !== prevProps.getDogImg) {
			this.getImg(this.props.getDogImg).then((resp) => {
				return this.setState((prevstate) => ({
					...prevstate,
					imgSrc: resp.message,
					imgStatus: resp.status,
				}));
			});
		}
	};
	render() {
		const { imgSrc } = this.state;
		return (
			<>
				<img src={imgSrc} alt="Random" />

				{/* {imgStatus === "success" && alert("Изображение пса было загружено!")} */}
			</>
		);
	}
}

export default Image;
