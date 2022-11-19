import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "../components/weather";
export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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
          console.log({ result });
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof weatherData.main != "undefined" ? (
        <>
          <Weather weatherData={weatherData} />
        </>
      ) : (
        <div>
          <p>No Data available</p>
        </div>
      )}
    </div>
  );
}
