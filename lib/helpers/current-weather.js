const currentWeatherCleaner = weather => {
  const currentWeatherObj = {
    currentCity: weather.location.city,
    currentState: weather.location.state,
    currentTemp: weather.current_observation.temp_f,
    currentWeatherDescription: weather.current_observation.weather,
    currentDay: weather.forecast.simpleforecast.forecastday[0].date.weekday,

    currentWeatherSummary: weather.forecast.txt_forecast.forecastday[0].fcttext,
    currentHighTemp: weather.forecast.simpleforecast.forecastday[0].high
      .fahrenheit,
    currentLowTemp: weather.forecast.simpleforecast.forecastday[0].low
      .fahrenheit,
    // tempForTheHour: weather.hourly_forecast[0].FCTTIME.civil,
    tempForTheHour: weather.hourly_forecast[0].temp.english
    // currentDay: `${data.forecast.simpleforecast.forecastday[0].date.day}`,
    // currentMonth: `${data.forecast.simpleforecast.forecastday[0].date.monthname}`,
  };
  return currentWeatherObj;
};

export default currentWeatherCleaner;
