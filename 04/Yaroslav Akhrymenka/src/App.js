import React from "react";
import List from "./components/List";
import Image from "./components/Image";
const randomImgApi = "https://dog.ceo/api/breeds/image/random";
const breedsListApi = "https://dog.ceo/api/breeds/list/all";

class App extends React.Component {
	state = {
		dogName: "",
	};

	callback = (dogName) => {
		this.setState((prevstate) => ({
			...prevstate,
			dogName: dogName,
		}));
	};
	render() {
		return (
			<>
				<List listApi={breedsListApi} callback={this.callback} />
				<Image
					getRandomImg={randomImgApi}
					getDogImg={`https://dog.ceo/api/breed/${this.state.dogName.toLowerCase()}/images/random `}
				/>
			</>
		);
	}
}

export default App;
