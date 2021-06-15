import React from "react";
import Header from "./components/Header";
import Advantages from "./components/Advantages";
import Products from "./components/Products";
import About from "./components/About";
import Map from "./components/Map";
import Footer from "./components/Footer";
class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Advantages />
				<Products />
				<About />
				<Map />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
