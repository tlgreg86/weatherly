import React from 'react'
import {shallow , mount } from 'enzyme'
import WeatherAPI from './WeatherAPI.js';
import Main from '../lib/components/Main.js'
import Current from '../lib/components/Current.js';
import Input from '../lib/components/Input.js'

describe('state.input should change when input is changed', () => {
  let wrapper = shallow(<Input fetchWeather ={()=>{}} />);
  it('Should do something', () => {
    let button = wrapper.find('.submit-button');
    let input = wrapper.find('.location-input[type="text"]')
    input.simulate('change', { target: { value: 'Denver, CO'}});
    button.simulate('click');
    expect(wrapper.state('input')).toEqual('Denver, CO')
  })
})
