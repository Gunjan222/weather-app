import React, { useState } from "react";
import Search from "../components/search";
import "./Hourly.css";
import Forecast from "../components/forecast/forecast";
import CurrentWeather from "../components/current-weather/current-weather";

function WeatherHourly() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
        console.log("second", currentWeather, forecast);
      })
      .catch(console.log);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather ? <CurrentWeather data={currentWeather} /> : <div></div>}
      {forecast ? <Forecast data={forecast} /> : <div></div>}
    </div>
  );
}

export default WeatherHourly;
