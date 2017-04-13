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

    this.fetchWeather.bind(this);
  }

  fetchWeather(userInput) {
    // take the userInput info
    // make an api call with that info
    // whatever is returned, store that in state
    console.log(userInput);
    $.get(`http://api.wunderground.com/api/76172e4074b59c26/hourly10day/q/${userInput}.json`).then(data) => {
        console.log(data.response);
        this.setState({ weather: data });
      },
      error: (xhr, err) => {
        console.err(err);
      }
    });
  }

  render() {
    return (
     <div className='phase1'>
       <Greeting />
       <Input handleSubmit={this.fetchWeather} />
       <Current />
     </div>
   );
  }
}
