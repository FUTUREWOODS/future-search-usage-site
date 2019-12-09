import React from 'react';
import {shallow} from 'enzyme';
import Home from "../pages/Home";

describe("Home", () =>{
    test("h1タグが描画されること", () =>{
        const wrapper =  shallow(<Home />);
        console.log(wrapper.find("h1"));
        expect(wrapper.find("h1").text()).toEqual("Hello");
    });
});