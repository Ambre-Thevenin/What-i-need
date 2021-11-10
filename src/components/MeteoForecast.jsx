import React, { useState, useEffect } from 'react';
// import styles from './MeteoForecast.module.css';
import axios from 'axios';

const api_weather = 'a007f6ea1885d8331305baf19e99c488';
// http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a007f6ea1885d8331305baf19e99c488&units=metric&lang=fr
// https://api.openweathermap.org/data/2.5/onecall?lat=48.858705&lon=2.342865&appid=a007f6ea1885d8331305baf19e99c488&units=metric&lang=fr

function MeteoForecast() {
  const [currentWeather, setCurrentWeather] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [userCity] = useState('Paris');

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${api_weather}&units=metric&lang=fr`)
      .then((res) => res.data)
      .then((data) => {
        setCurrentWeather(data.weather[0].description);
        setCurrentTemp(Math.round(data.main.temp));
        setWeatherIcon(data.weather[0].icon);
        // const forecastDay = data.daily.slice(0,24);
      });
  }, []);

  return (
    <div>
      <h1>A {userCity} la météo prévoit :</h1>
      <p>Conditions : {currentWeather}</p>
      <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={currentWeather} />
      <p>Temperature actuelle : {currentTemp} °C</p>
    </div>
  );
}

export default MeteoForecast;
