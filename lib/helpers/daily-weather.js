name of current city
current condition
  weather.forecast
// current day ??? or just use a function date()
  weather.forecast.simpleforecast.forecastday[0].date.pretty
current temperature

expect high
 weather.forecast.simpleforecast.forecastday.high.fahrenheit
expected low
  weather.forecast.simpleforecast.forecastday.low.fahrenheit
summary of conditions
weather.forecast.txt_forecast.forecastday[0].fctext
weather.forecast.txt_forecast.forecastday[0].fctext.icon_url
// (image)

weather.forecast[i]
