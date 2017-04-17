import React, { Component } from 'react';
import Greeting from './Greeting.js';
import Current from './Current.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Input from './Input.js';
import Key from './Key.js';
import $ from 'jquery';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      weather: [],
    };
  }

  fetchWeather(userInput) {
    if (this.state.weather.length) {
      this.state.weather.shift()
    }
    $.get(`http://api.wunderground.com/api/${Key}/forecast10day/hourly/conditions/q/${userInput}.json`)
      .then( (result) => {
        // !this.state.weather.length ? alert("We don't have your shit") :
           this.state.weather.push(result)
           this.setState({weather: this.state.weather});
           console.log(this.state.weather)
     });
  }

    render() {
      return (
        <div className='container'>
          <section className='top-half'>
            <section className='left-upper'>
              <Greeting />
              <Input fetchWeather={this.fetchWeather.bind(this)} />
              <Current currentWeather = {this.state.weather} />
            </section>
            <section className='right-upper'>
              <SevenHour sevenHour = {this.state.weather} />
            </section>
          </section>
          <section className='bottom-bar'>
            <TenDay tenDay = {this.state.weather} />
          </section>
        </div>
      );
    }
  };
