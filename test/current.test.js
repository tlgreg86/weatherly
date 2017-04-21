import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.json";
import Current from "../lib/components/Current.js";

describe("Current component", () => {

  it("renders enter a valid location", () => {
    let wrapper = shallow(<Current currentWeather={[]} />);
    expect(wrapper.is('.enter-valid-location')).toEqual(true);
  });

  it('renders current forecast', () => {
    let wrapper = shallow(<Current currentWeather={WeatherAPI} />);
    expect(wrapper.is('.current-container')).toEqual(true);
  });

  it('renders current day card with current location', () => {
    let wrapper = shallow(<Current currentWeather={WeatherAPI} />);
    let element = wrapper.find('.current-location')
    expect(element.text()).toEqual("Denver, CO");
  });

});
