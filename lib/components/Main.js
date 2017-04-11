const React = require('react');
import Greeting from './Greeting.js'
import Current from './Current.js'
import Input from './Input.js'

export default class Main extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <Greeting />
        <Input />
        <Current />
      </div>
    )
  }
}
