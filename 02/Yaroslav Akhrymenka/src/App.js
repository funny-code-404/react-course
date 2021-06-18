import React from "react";
import "./style.css";

const USER_NAME = "user_name";
const USER_MAIL = "user_email";
const USER_PASSWORD = "user_password";

class App extends React.Component {
	constructor(props) {
		super(props);
		// Записываем наши стейты
		this.state = {
			[USER_NAME]: "",
			[USER_MAIL]: "",
			[USER_PASSWORD]: "",
			formErrors: {
				[USER_NAME]: "",
				[USER_MAIL]: "",
				[USER_PASSWORD]: "",
			},
		};
	}
	// Хендлер для ввода
	handleChange = (e) => {
		const inputValue = e.target.value;
		const key = e.target.name;
		this.setState(
			{
				[key]: inputValue,
			},
			() => {
				this.handleValidate(key, inputValue);
			}
		);
	};

	// Хендлер для сабмита - отправит в консоль введенные данные
	handleSubmit = (e) => {
		e.preventDefault();

		// деструктуризируем в инпутс наши стейты

		const { ...inputs } = this.state;

		console.log({
			[USER_NAME]: inputs[USER_NAME],
			[USER_MAIL]: inputs[USER_MAIL],
			[USER_PASSWORD]: inputs[USER_PASSWORD],
		});
	};

	handleValidate(fieldName, fieldValue) {
		const values = this.state.formErrors;
		switch (fieldName) {
			case USER_PASSWORD:
				values[fieldName] =
					fieldValue.length > 6 ? "" : "Ошибочка, нужно не менее 8 символов";
				break;
			case USER_MAIL:
				values[fieldName] =
					fieldValue.includes("@") && fieldValue.includes(".")
						? ""
						: "email должен содержать символ @ и .";
				break;
			case USER_NAME:
				values[fieldName] =
					fieldValue[0] === fieldValue[0].toUpperCase()
						? ""
						: "Первая буква должна быть заглавной";
				break;
			default:
				values[fieldName] = "";
				break;
		}
	}
	// Rendering our form
	render() {
		const { ...values } = this.state;

		return (
			<React.Fragment>
				<form onSubmit={this.handleSubmit}>
					<span>{values.formErrors[USER_NAME]}</span>
					<input
						type="text"
						placeholder="Enter your name"
						value={values[USER_NAME]}
						name={USER_NAME}
						onChange={this.handleChange}
					/>
					<span>{values.formErrors[USER_MAIL]}</span>
					<input
						type="email"
						placeholder="Type your email"
						value={values[USER_MAIL]}
						name={USER_MAIL}
						onChange={this.handleChange}
					/>
					<span>{values.formErrors[USER_PASSWORD]}</span>
					<input
						type="password"
						placeholder="Password"
						value={values[USER_PASSWORD]}
						name={USER_PASSWORD}
						onChange={this.handleChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</React.Fragment>
		);
	}
}

export default App;
