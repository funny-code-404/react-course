import React from "react";

class Map extends React.Component {
	render() {
		return (
			<section id="map">
				<div className="container">
					<h2>Как нас найти</h2>
				</div>
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab948defe387a1e46874e117abd101b8818b2b3c58c249c3149c0c905b1440373&amp;source=constructor"
					width="100%"
					height="445"
					frameBorder="0"
					title="map"
				></iframe>
			</section>
		);
	}
}
export default Map;
