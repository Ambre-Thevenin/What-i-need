import React, { useState, useEffect } from 'react';
import styles from './MeteoForecast.module.css';
import axios from 'axios';
import HourlyMeteo from './HourlyMeteo';

const api_weather = 'a007f6ea1885d8331305baf19e99c488';
// http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=a007f6ea1885d8331305baf19e99c488&units=metric&lang=fr
// https://api.openweathermap.org/data/2.5/onecall?lat=48.858705&lon=2.342865&appid=a007f6ea1885d8331305baf19e99c488&units=metric&lang=fr

function MeteoForecast({ setIcon, icon, city }) {
  const [currentWeather, setCurrentWeather] = useState();
  const [currentTemp, setCurrentTemp] = useState();
  const [userCity] = useState(city);

  useEffect(async () => {
    const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${api_weather}&units=metric&lang=fr`);
    let res = result.data;
    setCurrentWeather(res.weather[0].description);
    setCurrentTemp(Math.round(res.main.temp));
    setIcon(res.weather[0].icon);
  }, []);

  return (
    <div className={styles.forecastScreen}>
      <h1 className={styles.forecastTitle}>A {userCity}, la météo prévoit</h1>
      <p>Tendance générale : {currentWeather}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={currentWeather} />
      <p>Temperature actuelle : {currentTemp} °C</p>
      <HourlyMeteo />
    </div>
  );
}

export default MeteoForecast;
