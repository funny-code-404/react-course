import React from "react";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
	state = {
		formData: "",
	};
	// Callback for getting data from Form component

	getFormData = (data) => {
		// Setting data
		this.setState((prevstate) => ({
			...prevstate,
			formData: data,
		}));
	};

	render() {
		const { formData } = this.state;
		return (
			<div className="container">
				<Form getFormData={this.getFormData} />
				<List taskFromForm={formData} />
			</div>
		);
	}
}

export default App;
