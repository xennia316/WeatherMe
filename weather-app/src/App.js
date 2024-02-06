import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [search, setSearch] = useState("");
	const [weather, setWeather] = useState("");
	const [loading, setLoading] = useState(false);

	const api = {
		key: "067cfe223954844c0c2f03e98431834f",
		base: "https://api.openweathermap.org/data/2.5/",
	};

	const searching = () => {
		setLoading(true);
		try {
			fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
				.then((res) => res.json())
				.then((result) => {
					setWeather(result);
				});
		} catch (e) {
			setWeather({});
		}

		setLoading(false);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="title">Weather & Me</h1>
				<div className="form_group">
					<div>
						<input
							className="input"
							placeholder="Enter your city"
							type="text"
							onChange={(e) => {
								setSearch(e.target.value);
								searching();
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
				<div className="sub-box">
					{loading && <p className="text">Please wait a moment</p>}
					{!loading && typeof weather.main !== "undefined" && (
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
								</b>{" "}
								C
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
					)}
					{!loading && typeof weather.main == "undefined" && search !== "" && (
						<p className="text">
							Sorry, No results found for <b className="bold">{search}</b>{" "}
						</p>
					)}
					{search == "" && <p>Welcome !!!</p>}
				</div>
			</header>
		</div>
	);
};

export default App;
