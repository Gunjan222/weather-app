import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "../components/weather";
export default function App() {
  console.log(" outer App");

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("App");

      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherData(result);
        });
    };
    fetchData();
  }, [lat, long]);

  console.log("weather data", weatherData);

  return (
    <>
      <div className="App">
        {weatherData.main ? (
          <>
            <Weather weatherData={weatherData} />
          </>
        ) : (
          <div>
            <p>No Data available</p>
          </div>
        )}
      </div>
    </>
  );
}
