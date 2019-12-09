import React from 'react';
import {shallow} from 'enzyme';
import Layout from "../pages/index";

describe("Layout", () =>{
    test("h2タグが描画されること", () =>{
        const wrapper =  shallow(<Layout />);
        console.log(wrapper.find("body"));
        expect(wrapper.find("h2").text()).toEqual("検索事例");
    });
});