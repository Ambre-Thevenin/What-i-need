import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import HourForecast from './HourForecast';

const api_weather = 'a007f6ea1885d8331305baf19e99c488';

function HourlyMeteo() {
  const [forecast, setForecast] = useState([]);
  // const city = 'Paris';
  const lat = '48.858705';
  const long = '2.342865';

  useEffect(() => {
    axios
      // .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_weather}&units=metric&lang=fr`)
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api_weather}&units=metric&lang=fr&exclude=minutely`)
      .then((res) => res.data)
      .then((data) => {
        setForecast(data.hourly);
      });
  }, []);

  let forecastHours = forecast.slice(0, 9);
  return (
    <>
      {forecastHours.length &&
        forecastHours.map((hour) => {
          return (
            <div key={hour.dt}>
              <img src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt={hour.weather[0].description} />
              <p>{hour.temp} °C</p>
            </div>
          );
        })}
    </>
  );
}

export default HourlyMeteo;
