const React = require('react');
const ReactDOM = require('react-dom');
import Main from './components/Main.js'

ReactDOM.render(<Main />, document.getElementById('application'));

// check local storage
// if something in local storage pass main this.state = weather
