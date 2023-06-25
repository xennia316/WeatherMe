import React from "react";
import "./App.css";

const App = () => {
	const api = {
		key: "067cfe223954844c0c2f03e98431834f",
		base: "https://api.openweathermap.org/data/2.5/",
	};
	return (
		<div className="App">
			{/* Header goes here */}
			<h1>Weather Me</h1>

			{/* Search Box */}

			<input placeholder="Enter your city" type="text" />

			{/* Location */}

			<p>Sandpit, Buea</p>

			{/* Temperature */}

			<p>32 degrees celsius</p>

			{/* Weather Condition */}

			<p>Mostly sunny</p>
		</div>
	);
};

export default App;
