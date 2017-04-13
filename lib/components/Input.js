import React from 'react'

export default class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: ''
    }
  }

  submitItem() {
    this.props.handleSubmit(this.state.userInput);
    this.setState({ userInput: '' })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
    if(this.validateInput()) {

      return this.props.handleSubmit(this.state.userInput);
    }
    // if userInput is valid
    // => pass it up to the parent
    // else
    // => throw an error
  }

  validateInput() {
    return this.state.userInput.length > 1;
  }

  render() {
    return (
     <div className = 'input-and-submit'>
       <form onSubmit={e => this.handleSubmit(e)}>
      <input className = 'location-input'
              type='text'
              placeholder='city and state or zip'
              value={this.state.userInput}
              onChange={ (event) => { this.setState({ userInput: event.target.value }); }}
              />
      <input className='submit-button'
              type='submit'
              disabled= {!this.validateInput()}
              />
      </form>

     </div>
    );
  }
}
