import React from 'react';
import {mount} from 'enzyme';
import PageHead from "../../components/molecules/PageHead";

describe("PageHead", () =>{
    test("h1タグが描画されること", () =>{
        const wrapper =  mount(<PageHead title={'hello'} description={'helloのページ'}/>);
        console.log(wrapper.find("h2"));
        expect(wrapper.find("h2").text()).toEqual("hello");
    });
    test("descriptionが描画されること", () =>{
        const wrapper =  mount(<PageHead title={'hello'} description={'helloのページ'}/>);
        expect(wrapper.find('p').text()).toEqual("helloのページ");
    });
});