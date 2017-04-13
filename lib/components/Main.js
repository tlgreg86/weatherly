import React from 'react';
import Greeting from './Greeting.js';
import Current from './Current.js';
import Input from './Input.js';
import TenDayForecast from './TenDayForecast.js'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],

    };
  }

  fetchWeather(userInput) {
    console.log(userInput);

    let userWeather =
    $.get(`http://api.wunderground.com/api/76172e4074b59c26/forecast/q/CO/Denver.json`).then((result) => {

      // probz clean the result
      // once the result is clean set that as your state

        this.state.weather.push(result)
        this.setState({ weather: this.state.weather });
        console.log(this.state.weather)
      })
      // ,
      // error: (xhr, err) => {
      //   console.err(err);
    }

    render() {
      return (
        <div className='phase1'>
          <Greeting />
          <Input fetchWeather={this.fetchWeather.bind(this)} />
          <Current />
        </div>
      );
    }
  };
