import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './HourForecast.module.css';

const api_weather = 'a007f6ea1885d8331305baf19e99c488';

function HourlyMeteo({ coordinates, destination }) {
  const [forecast, setForecast] = useState([]);
  const lat = coordinates.lat;
  const long = coordinates.lon;

  useEffect(async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api_weather}&units=metric&lang=fr&exclude=minutely`,
    );
    let res = result.data;
    setForecast(res.hourly);
  }, [coordinates, destination]);

  const [forecastHours, setForecastHours] = useState([]);
  useEffect(() => {
    setForecastHours(forecast.slice(0, 8));
  }, [forecast]);

  return (
    <div className={styles.hourlyMeteo}>
      {forecastHours.length &&
        forecastHours.map((hour) => {
          return (
            <div key={hour.dt}>
              <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt={hour.weather[0].description} />
              <p className={styles.timeTemp}>{Math.round(hour.temp)} °C</p>
            </div>
          );
        })}
    </div>
  );
}

export default HourlyMeteo;
