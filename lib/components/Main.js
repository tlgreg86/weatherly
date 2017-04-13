const React = require('react');
import Greeting from './Greeting.js';
import Current from './Current.js';
import Input from './Input.js';



export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      weather: [],
    };
  }

  userInputUpdate(e) {
    this.setState({ userInput: e.target.value });
  }

  // handleSubmit(input) {
  //   const newLocation = Object.assign(input)
  //   this.state.weather.push(newLocation);
  //   this.setState({
  //     userInput: '',
  //     weather: this.state.weather,
  //   });
  // }

  addUserLocationToUrl() {
    let user = $.get(`http://api.wunderground.com/api/115d6021b4ffeb9f/forecast/q/CO/Denver.json`).then((result) => {this.setState({weather: result})})
    console.log('weather result': user);
  }

  // react dev tools
  //  run weather [] through function to parse, and to clean


  submitItem() {
    // this.handleSubmit(this.state);
    this.addUserLocationToUrl()
    this.setState({ userInput: '' })
  }

  // 1. initalize state through object, and assign property
  // 2. track changes on element -- update value on setState
  // 3. set value to what it needs to be
  // 4. oncChange -- waits for targeted element to have a value change to call function

// onClick for submit button
// function takes user info and interpolates url string with info
// return object for that location
// drill down through object to return needed info
// populate info

  render() {
    console.log(this.state);
    return (
      <div>
        <Greeting />
        <Input value = {this.state.userInput}
                onChange={this.userInputUpdate.bind(this)} />
        <input className = 'submit-button'
              type= 'submit'
              onClick = { this.submitItem.bind(this) }
              disabled = {!this.state.userInput}
              />
        <Current />
      </div>
    );
  }
}
