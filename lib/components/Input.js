import React from 'react';

export default class Input extends React.Component {
  render() {
    const props = this.props;
    return (
     <div className = 'input-and-submit'>
       <input value = {this.props.value}
               onChange = {this.props.onChange}
               className = 'location-input'
               type = 'text'
               placeholder = 'city and state or zip'
               />
     </div>
   );
  }
}
