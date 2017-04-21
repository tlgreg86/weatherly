import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.json";
import SevenHour from "../lib/components/SevenHour.js";


describe('Seven Hour Forecast', () => {

  it('renders no data', () => {
    let wrapper = shallow(<SevenHour sevenHour={[]} />);
    expect(wrapper.is('.no-data')).toEqual(true);
  })

  it('renders seven hour forecast', () => {
    let wrapper = shallow(<SevenHour sevenHour={WeatherAPI} />);
    expect(wrapper.is('.seven-hour')).toEqual(true);
  })

  it('renders 7 cards', () => {
    let wrapper = shallow(<SevenHour sevenHour={WeatherAPI} />);
    expect(wrapper.find('.hourly-weather').length).toEqual(7)
  })

})
