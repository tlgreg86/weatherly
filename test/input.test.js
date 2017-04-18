import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.js";
import Main from "../lib/components/Main.js";
import Input from "../lib/components/Input.js";

describe("Input component", () => {
  it("state.input should change when input is changed", () => {
    let wrapper = shallow(<Input fetchWeather={() => {}} />);
    let button = wrapper.find(".submit-button");
    let input = wrapper.find('.location-input[type="text"]');
    input.simulate("change", { target: { value: "Denver, CO" } });
    expect(wrapper.state("userInput")).toEqual("Denver, CO");
    button.simulate("click");
    expect(wrapper.state("userInput")).toEqual("");
  });

  it("should fetch the weather on mount", () => {
    let spy = jest.fn(); // () => {}
    let wrapper = mount(<Input fetchWeather={spy} />);

    expect(spy).toHaveBeenCalled();
    // checking props, by checking if fetchWeather (which has been called on props) has been executed
  });

  it("calls componentDidMount", () => {
    let spy = jest.spyOn(Input.prototype, "componentDidMount");
    let wrapper = mount(<Input fetchWeather={() => {}} />);

    expect(spy).toHaveBeenCalled();
    // don't need?
  });

  it("calls submitItem", () => {
    let spy = jest.fn();
    let wrapper = mount(<Input fetchWeather={spy} />);
    let button = wrapper.find(".submit-button");

    button.simulate("click");
    expect(spy).toHaveBeenCalled();
  });

  it("calls submitItem with user input value", () => {
    let spy = jest.fn();
    let wrapper = mount(<Input fetchWeather={spy} />);
    let button = wrapper.find(".submit-button");

    button.simulate("click");
    expect(spy).toHaveBeenCalledWith("Denver, CO");
  });
});
