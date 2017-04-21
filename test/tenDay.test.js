import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.json";
import TenDay from "../lib/components/TenDay.js";


describe('Ten Day Forecast', () => {

  it('renders no data', () => {
    let wrapper = shallow(<TenDay tenDay={[]} />);
    expect(wrapper.is('.no-data')).toEqual(true);
  })

  it('renders 10 day forecast', () => {
    let wrapper = shallow(<TenDay tenDay={WeatherAPI} />);
    expect(wrapper.is('.ten-day-container')).toEqual(true);
  })

  it('renders 10 cards', () => {
    let wrapper = shallow(<TenDay tenDay={WeatherAPI} />);
    expect(wrapper.find('.ten-day').length).toEqual(10)
  })

})
