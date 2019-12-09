import React from 'react';
import {mount} from 'enzyme';
import PageCase from "";

describe("Layout", () =>{
    test("3つのリストが描画されること", () =>{
        const wrapper =  mount(<Layout />);
        console.log(wrapper.find("li"));
        expect(wrapper.find("h2").text()).toEqual("検索事例");
    });
});