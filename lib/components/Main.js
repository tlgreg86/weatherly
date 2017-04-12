const React = require('react');
import Greeting from './Greeting.js';
import Current from './Current.js';
import Input from './Input.js';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      weather: [],
    };
  }

  componentDidMount() {
    let input = localStorage.getItem('input')
  }

  // This will eventually take Date.now() when the real API is hooked up
  // Makes API call on submit
  // Then when the call is made we need to set the stuff coming back as our state
  // $.get(this.props.source + this.state.input.toLowerCase()).then((weather) => {
  // })
  // localStorage.setItem('input', this.state.input.toLowerCase())
  handleSubmit(input) {
    const newLocation = Object.assign(input)
    this.state.weather.push(newLocation);
    this.setState({
      input: '',
      weather: this.state.weather,
    })
  }

  render() {
    return (
     <div className = 'phase1'>
       <Greeting />
       <Input handleSubmit = {this.handleSubmit.bind(this)}
              />
       <Current />
     </div>
   );
  }
}
