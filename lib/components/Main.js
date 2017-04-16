import React from "react";
import Greeting from "./Greeting.js";
import Current from "./Current.js";
import Input from "./Input.js";
import TenDayForecast from "./TenDayForecast.js";
import currentWeatherCleaner from "../helpers/current-weather.js";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: {}
    };
  }

  fetchWeather(userInput) {
    $.get(
      `http://api.wunderground.com/api/115d6021b4ffeb9f/forecast/hourly/forecast10day/conditions/geolookup/q/${userInput}.json`
    ).then(result => {
      const weatherData = currentWeatherCleaner(result);
      this.setState({ weather: weatherData });
      console.log(this.state.weather);
    });
  }

  render() {
    return (
      <div className="phase1">
        <Greeting />
        <Input fetchWeather={this.fetchWeather.bind(this)} />
        <Current current={this.state.weather} />
      </div>
    );
  }
}

// line 33 ... consider as a function w/argument passed in (current) and pass that argument into the component to have access to the props on the object

// set state is to render that value after everything is returning what you want
