import React from 'react';
import {shallow} from 'enzyme';
import PageHead from "../../components/molecules/PageHead";

describe("Home", () =>{
    test("h1タグが描画されること", () =>{
        const wrapper =  shallow(<PageHead title={'hello'} description={'helloのページ'}/>);
        console.log(wrapper.find("h2"));
        expect(wrapper.find("h2").text()).toEqual("hello");
    });
    test("descriptionが描画されること", () =>{
        const wrapper =  shallow(<PageHead title={'hello'} description={'helloのページ'}/>);
        expect(wrapper.find('p[class^="Description"]').text()).toEqual("helloのページ");
    });
});