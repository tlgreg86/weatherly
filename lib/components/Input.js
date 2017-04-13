import React from 'react';

export default class Input extends React.Component {
  
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  submitItem() {
    this.props.fetchWeather(this.state.userInput);
    this.setState({ userInput: '' })
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('handleSubmit works!');
  //   if(this.validateInput()) {
  //
  //     return this.props.handleSubmit(this.state.userInput);
  //   }
  //   // if userInput is valid
  //   // => pass it up to the parent
  //   // else
  //   // => throw an error
  // }

  // validateInput() {
  //   return this.state.userInput.length === 5;
  // }

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
