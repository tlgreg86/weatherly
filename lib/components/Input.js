import React from 'react'

export default class Input extends React.Component {
 render(){
   return (
     <div className = 'input-and-submit'>
       <input className = 'location-input' type = 'text' placeholder = 'city and state or zip'/>
       <button className = 'submit-button'>Submit</button>
     </div>
   )
 }
}
