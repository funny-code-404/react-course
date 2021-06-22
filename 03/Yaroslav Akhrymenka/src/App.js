import React from "react";

// error message can be changed here
const erorrText = "All fields are required!";
const errors = {
	brand: false,
	model: false,
	year: false,
	price: false,
};
// Main class for my App
class App extends React.Component {
	// Setting our states
	state = {
		data: [],
		values: {},
		errors: [errors],
	};

	// Validate method of entering data
	validate = (name, value) => {
		this.setState((prevState) => ({
			...prevState,
			errors: {
				...prevState.errors,
				[name]: value.length > 0,
			},
		}));
		return value;
	};
	// Setting states Values
	handleChange = (event) => {
		this.setState((prevState) => ({
			...prevState, // getting prevStates of States (data, errors, value)
			values: {
				// Getting prevStates of names and values
				...prevState.values,
				// Setting states of values
				[event.target.name]: this.validate(
					event.target.name,
					event.target.value
				),
			},
		}));
	};
	handleSubmit = (event) => {
		// Prevent default submit
		event.preventDefault();
		// We need to setup our data state
		const values = this.state.values;
		this.setState({
			// setting Data state of values
			data: this.state.data.concat(values),
			// Clear out fields
			values: {
				brand: "",
				model: "",
				price: "",
				year: "",
			},
			// setting up errors
			errors: [errors],
		});
	};
	fillTheForm = (event) => {
		// get our parrent clicked element
		const tr = event.target.parentElement;
		// get all tds of tr
		const tds = tr.querySelectorAll("td");
		// creating object for filling data
		const carFillingData = {};
		// iterate data and fill object
		for (let i of tds) {
			carFillingData[i.id] = i.innerText;
		}
		// setting state for
		this.setState(() => ({
			// Fill values with provided TR data
			values: carFillingData,
			errors: {
				brand: true,
				model: true,
				price: true,
				year: true,
			},
		}));
	};
	render() {
		// Destruct our state

		const { data, values, errors } = this.state;

		return (
			<>
				<form>
					<input
						placeholder="Car brand"
						value={values.brand}
						name="brand"
						onChange={this.handleChange}
					/>
					<input
						placeholder="Car model"
						value={values.model}
						name="model"
						onChange={this.handleChange}
					/>
					<input
						placeholder="Car year"
						value={values.year}
						name="year"
						onChange={this.handleChange}
					/>
					<input
						placeholder="Car price"
						value={values.price}
						name="price"
						onChange={this.handleChange}
					/>
					{
						// if errors are false, form will be ready to posting
					}
					{!errors.model || !errors.brand || !errors.year || !errors.price ? (
						<p>{erorrText}</p>
					) : (
						// Show button when fields are not empty
						<>
							<button onClick={this.handleSubmit}>Submit data</button>
							<p>Seems to be good!</p>
						</>
					)}
				</form>
				<hr></hr>
				{
					// That is my table. Cars gonna be here
				}
				<table>
					{
						// Let's map data from inputs after submit clicked
					}
					{data.map((item) => {
						return (
							<tr onClick={this.fillTheForm}>
								<td id="brand"> {item.brand}</td>
								<td id="model"> {item.model}</td>
								<td id="year"> {item.year}</td>
								<td id="price"> {item.price}</td>
							</tr>
						);
					})}
				</table>
			</>
		);
	}
}

export default App;
