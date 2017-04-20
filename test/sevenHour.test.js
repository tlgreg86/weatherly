import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.js";
import Main from "../lib/components/Main.js";
import sevenHour from "../lib/components/sevenHour.js";
import Input from "../lib/components/Input.js";

describe('sevenHour', ()=>{

it('should change when input is changed', () => {
  let wrapper = shallow(<SevenHour sevenHourWeather={[WeatherAPI]} />);

  // it("has a section with a current location", () => {
  //   let currentLocation = wrapper.find(".current-container");
  //
  //   expect(currentLocation.length).toEqual(1);
  // });
  //
  // it("displays the location of the user input", () => {
  //   let currentLocation = wrapper.find(".current-location");
  //
  //   expect(currentLocation.props().children).toEqual("Denver, CO");
  // });
});
