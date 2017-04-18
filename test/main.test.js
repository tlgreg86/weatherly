import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.js";
import Main from "../lib/components/Main.js";
import Input from "../lib/components/Input.js";

describe("main", () => {

  it("state.input should change when input is changed", () => {
    let wrapper = shallow(<Input fetchWeather={() => {}} />);
    let button = wrapper.find(".submit-button");
    let input = wrapper.find(".location-input");

    input.simulate("change", { target: { value: "Denver, CO" } });
    expect(wrapper.state("userInput")).toEqual("Denver, CO");

    button.simulate("click");
    expect(wrapper.state("userInput")).toEqual("");
  });

  it("fetches weather with user input", () => {
    let spy = jest.fn();
    let wrapper = mount(<Input fetchWeather={spy} />);
    let button = wrapper.find(".submit-button");
    let location = wrapper.find("userInput");

    button.simulate("click");
    expect(spy).toHaveBeenCalledWith("Denver, CO");
  });
});
