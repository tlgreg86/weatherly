import React from 'react';
import Greeting from './Greeting.js';
import Current from './Current.js';
import Input from './Input.js';
import InvalidLocation from './Error';
import TenDayForecast from './TenDayForecast.js'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      weather: [],
    };

    this.fetchWeather.bind(this);
  }

  // componentDidMount() {
  //   let input = localStorage.getItem('input')
  // }

  // This will eventually take Date.now() when the real API is hooked up
  // Makes API call on submit
  // Then when the call is made we need to set the stuff coming back as our state
  // })
  // localStorage.setItem('input', this.state.input.toLowerCase())
  fetchWeather(zipCode) {
    // take the zipCode info
    // make an api call with that info
    // whatever is returned, store that in state
    console.log(zipCode);
    $.get(`http://api.wunderground.com/api/76172e4074b59c26/hourly10day/q/${zipCode}.json`).then(data) => {
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
