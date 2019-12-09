import React from 'react';
import {mount} from 'enzyme';
import CaseTable from "../../components/atoms/CaseTable";

describe("CaseTable", () =>{
    test("リンクが描画されること", () =>{
        const cases = [{area: "",
        capital: "",
        case_number: "2",
        created_search_history: "2019-09-10",
        date_analysis: "すべて",
        date_identification: "すべて",
        delete_words: "",
        employee: "30名以下",
        establishment_date: "",
        fw_code: "",
        id: 39,
        listing_class: "",
        new_construction: "",
        query: "人材OR人財OR企業OR組織　教育OR育成OR研修	",
        scope: "すべて",
        search_result: "1123",
        title: "テスト"}];
        const wrapper =  mount(<CaseTable cases={cases}/>);
        console.log(wrapper.find('a').debug());
        expect(wrapper.find('a').text()).toEqual("テスト");
    });
});