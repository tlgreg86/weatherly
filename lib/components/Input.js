import React from 'react'

export default class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  submitItem() {
    this.props.handleSubmit(this.state.input);
    this.setState({ input: '' })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
    if(this.validateInput()) {

      return this.props.handleSubmit(this.state.input);
    }
    // if input is valid
    // => pass it up to the parent
    // else
    // => throw an error
  }

  validateInput() {
    return this.state.input.length === 5;
  }

  render() {
    return (
     <div className = 'input-and-submit'>
       <form onSubmit={e => this.handleSubmit(e)}>
      <input className = 'location-input'
              type='text'
              placeholder='city and state or zip'
              value={this.state.input}
              onChange={ (event) => { this.setState({ input: event.target.value }); }}
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
