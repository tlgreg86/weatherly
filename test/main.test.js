import React from "react";
import { shallow, mount } from "enzyme";
import Main from "../lib/components/Main.js";
import Input from "../lib/components/Input.js";
import TenDay from "../lib/components/TenDay.js";
import SevenHour from "../lib/components/SevenHour.js";
import Current from "../lib/components/Current.js";

describe("Main component", () => {

  it('renders all components', () => {
    let wrapper = shallow(<Main />)

    expect(wrapper.is('.container')).toEqual(true);
    expect(wrapper.containsMatchingElement(<Input />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Current />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<SevenHour />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<TenDay />)).toEqual(true);
  });

});
