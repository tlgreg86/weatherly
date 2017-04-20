import React from 'react'
import {shallow , mount } from 'enzyme'
import WeatherAPI from './WeatherAPI.js';
import Main from '../lib/components/Main.js'
import Input from '../lib/components/Input.js'
import Greeting from '../lib/components/Greeting.js'


describe('main', () => {

  it("has a section with a current forecast", () => {
    let wrapper = shallow(<Current>)
    let current = wrapper.find(".current-weather");
    expect(current.length).toEqual(1);
  });

it('should have a section with a greeting', ()=>{
  let wrapper = shallow(<Greeting/>)
  let greeting = wrapper.find('.greeting')
  expect(greeting.props()).toEqual('weatherly');
})


it('should have a component for seven hour forecast ',()=>{
  let wrapper = shallow(<SevenHour/>)
  let sevenHour = wrapper.find(sevenHour)
  expect(sevenHour).toEqual({WeatherAPI});
}

it('should have a component for ten day forecast ',()=>{
  let wrapper = shallow(<TenDay/>)
  let tenDay = wrapper.find(tenDay)
  expect(tenDay).toEqual({WeatherAPI});
}

it('should have a component for current weather forecast ',()=>{
  let wrapper = shallow(<Component/>)
  let currentComponent = wrapper.find('.current-weather')
  expect(currentComponent.length).toEqual(1)
}

it('state.input should change when input is changed', () => {
  let wrapper = shallow(<Input fetchWeather={()=>{}} />);
  let button = wrapper.find('.submit-button');
  let input = wrapper.find('.location-input')

  input.simulate('change', { target: { value: 'Denver, CO'}});
  expect(wrapper.state('userInput')).toEqual('Denver, CO')

  button.simulate('click');
  expect(wrapper.state('userInput')).toEqual('')

})

  });
