import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [search, setSearch] = useState("");
	const [weather, setWeather] = useState("");

	const api = {
		key: "067cfe223954844c0c2f03e98431834f",
		base: "https://api.openweathermap.org/data/2.5/",
	};

	const searching = () => {
		fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
			.then((res) => res.json())
			.then((result) => {
				setWeather(result);
				console.log(result);
			});
	};

	return (
		<div className="App">
			<header className="App-header">
				{/* Header goes here */}
				<h1>Weather Me</h1>

				{/* Search Box */}

				<div>
					<input
						placeholder="Enter your city"
						type="text"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
					<button onClick={searching}>Search</button>
				</div>

				{typeof weather.main != "undefined" ? (
					<div>
						<p>{weather.name}</p>
						<p>{weather.main.temp}</p>
						<p>{weather.weather[0].main}</p>
						<p>{weather.weather[0].description}</p>{" "}
					</div>
				) : (
					""
				)}
			</header>
		</div>
	);
};

export default App;
