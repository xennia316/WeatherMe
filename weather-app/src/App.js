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
			});
	};

	return (
		<div className="App">
			<header className="App-header">
				{/* Header goes here */}
				<h1 className="title">Weather Me</h1>

				{/* Search Box */}

				<div className="form_group">
					<div>
						<input
							className="input"
							placeholder="Enter your city"
							type="text"
							onChange={(e) => {
								setSearch(e.target.value);
							}}
						/>
						<label for="city" className="form_label">
							{" "}
							City
						</label>
					</div>
					<button className="button" onClick={searching}>
						Search
					</button>
				</div>

				{typeof weather.main != "undefined" ? (
					<div className="text">
						<p className="head">
							Weather forecast for{" "}
							<b className="bold">
								<em>{weather.name}</em>
							</b>{" "}
						</p>
						<p>
							Temperature: &nbsp;{" "}
							<b className="bold">
								<em>{weather.main.temp}</em>
							</b>
						</p>
						<p>
							Atmosphere: &nbsp;{" "}
							<b className="bold">
								<em>{weather.weather[0].main}</em>
							</b>
						</p>
						<p>
							Description: &nbsp;{" "}
							<b className="bold">
								<em>{weather.weather[0].description}</em>
							</b>
						</p>{" "}
					</div>
				) : (
					<p className="text">Sorry, We could not find this city</p>
				)}
			</header>
		</div>
	);
};

export default App;
