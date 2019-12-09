import React from 'react';
import {mount} from 'enzyme';
import CaseList from "../../components/atoms/CaseList";

describe("CaseList", () =>{
    test("URLが表示されること", () =>{
        const cases = [{id: 33,
            title: "テスト"}];
        const wrapper =  mount(<CaseList cases={cases}/>);
        expect(wrapper.find("a").text()).toEqual("テスト");
    });
});