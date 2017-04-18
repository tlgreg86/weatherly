import React, { Component } from 'react';

export default class Input extends Component {

  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  componentDidMount() {
    const location = localStorage.getItem('location');
    this.setState({userInput: location ? location : ''}, () => {
      this.props.fetchWeather(location)
    })
  }

  submitItem() {
    localStorage.setItem('location', this.state.userInput)
    this.props.fetchWeather(this.state.userInput);
    this.setState({ userInput: '' })
  }

    render() {
    return (
     <div className = 'input-and-submit'>
        <input className = 'location-input'
                type='text'
                placeholder='city and state or zip'
                value={this.state.userInput}
                onChange={ (event) => { this.setState({ userInput: event.target.value }); }}
                />
        <input className='submit-button'
                type='submit'
                onClick={this.submitItem.bind(this)}
                disabled={!this.state.userInput}
                />
     </div>
    );
  }
}
