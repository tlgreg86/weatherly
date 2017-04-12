import React from 'react'

export default class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  submitItem() {
    this.props.handleSubmit(this.state);
    this.setState({ input: '' })
  }

  render() {
    return (
     <div className = 'input-and-submit'>
      <input className = 'location-input'
              type = 'text'
              placeholder = 'city and state or zip'
              value = {this.state.input}
              onChange = { (event) => { this.setState({ input: event.target.value }); }}
              />
      <input className = 'submit-button'
              type= 'submit'
              onClick = { this.submitItem.bind(this) }
              disabled = {!this.state.input}
              />

     </div>
    );
  }
}
