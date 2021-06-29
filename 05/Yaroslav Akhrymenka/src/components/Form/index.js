import React from "react";
import "./style.css";

class Form extends React.PureComponent {
	state = {
		inputValue: "",
	};
	handleChange = (e) => {
		this.setState((prevstate) => ({
			...prevstate,
			inputValue: e.target.value,
		}));
	};
	handleClick = (e) => {
		e.preventDefault();

		this.props.getFormData(this.state.inputValue);
		this.setState((prevstate) => ({
			...prevstate,
			inputValue: "",
		}));
	};

	render() {
		const { inputValue } = this.state;
		return (
			<form>
				<input
					type="text"
					placeholder="Что нужно сделать?"
					onChange={this.handleChange}
					value={inputValue}
				/>
				<button onClick={this.handleClick}>Создать задачу</button>
			</form>
		);
	}
}

export default Form;
