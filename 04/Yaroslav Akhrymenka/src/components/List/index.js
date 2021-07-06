import React from "react";
import "./style.css";
class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dogsList: {},
			dogsListLoadedMessage: "",
			currentDog: "",
		};
	}

	getList = (url) => {
		return fetch(url).then((resp) => {
			return resp.json();
		});
	};
	componentDidMount = () => {
		this.getList(this.props.listApi).then((resp) => {
			this.setState((prevstate) => ({
				...prevstate,
				dogsList: resp.message,
				dogListMessage: resp.status,
			}));
		});
	};
	handleClick = (e) => {
		this.props.callback(e.target.innerText);
		this.setState((prevstate) => ({
			...prevstate,
			currentDog: e.target.innerText,
		}));
	};
	render() {
		const { dogsList, currentDog } = this.state;
		const items = [];
		let keyIndex = 0;
		for (let i in dogsList) {
			items.push(
				<li
					className={currentDog.toLowerCase() === i && "current"}
					key={keyIndex++}
					onClick={this.handleClick}
				>
					{i}
				</li>
			);
		}
		return (
			<>
				<h2>Choose dog:</h2>
				<ul>{items}</ul>
			</>
		);
	}
}

export default List;
