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

  handleSubmit(userInput) {
    const newLocation = Object.assign(userInput)
    this.state.weather.push(newLocation);
    this.setState({
      userInput: '',
      weather: this.state.weather,
    });

  submitItem() {
    this.handleSubmit(this.state);
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
      <div className = 'phase1'>
        <Greeting />
        <div className = 'input-and-submit'>
          <Input value = {this.state.userInput}
            onChange = {this.userInputUpdate.bind(this)}
            />
          <input className = 'submit-button'
            type= 'submit'
            onClick = { this.submitItem.bind(this) }
            disabled = {!this.state.userInput}
            />
        </div>
        <Current />
      </div>
    );
  }
}
