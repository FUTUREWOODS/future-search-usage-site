import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Table } from 'react-bootstrap';

import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';

import Color from '../../config/Colors';

const sampleCases = [
  {
    id: 32,
    title: 'hogehoge',
    query: '人材',
    date_identification: '3ヶ月以内',
    scope: 'すべて',
    date_analysis: '3ヶ月以内',
    area: '東京都',
    fw_code: '',
    listing_class: '',
    new_construction: '',
    establishment_date: '',
    capital: '',
    employee: '',
    search_result: 0,
    created_search_history: '',
    delete_words: ''
  },
  {
    id: 32,
    title: 'hogehoge',
    query: '人材',
    date_identification: '3ヶ月以内',
    scope: 'すべて',
    date_analysis: '3ヶ月以内',
    area: '東京都',
    fw_code: '',
    listing_class: '',
    new_construction: '',
    establishment_date: '',
    capital: '',
    employee: '',
    search_result: 0,
    created_search_history: '',
    delete_words: ''
  }
];

export default class SearchCaseShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        {
          sampleCases.map((item, index) =>
            <>
              <PageHead title={`CASE${index} : ${item.title}`} />
              <Content>
                <ContentBody>
                  <Table borderless>
                    <TBody>
                      <tr>
                        <th>キーワード</th>
                        <td>: {item.query}</td>
                      </tr>
                      <tr>
                        <th>検索範囲</th>
                        <td>: {item.scope}</td>
                      </tr>
                      <tr>
                        <th>新規取得日</th>
                        <td>: {item.date_identification}</td>
                      </tr>
                      <tr>
                        <th>更新日</th>
                        <td>: {item.date_analysis}</td>
                      </tr>
                      <tr>
                        <th>エリア</th>
                        <td>: {item.area}</td>
                      </tr>
                      <tr>
                        <th>業種</th>
                        <td>: {item.fw_code}</td>
                      </tr>
                      <tr>
                        <th>上場区分</th>
                        <td>: {item.listing_class}</td>
                      </tr>
                      <tr>
                        <th>新規登記</th>
                        <td>: {item.new_construction}</td>
                      </tr>
                      <tr>
                        <th>設立年月日</th>
                        <td>: {item.establishment_date}</td>
                      </tr>
                      <tr>
                        <th>資本金</th>
                        <td>: {item.capital}</td>
                      </tr>
                      <tr>
                        <th>従業員数</th>
                        <td>: {item.query}</td>
                      </tr>
                      <tr>
                        <th>検索結果</th>
                        <td>: {item.search_result}</td>
                      </tr>
                    </TBody>
                  </Table>
                  <Coution>
                    <p>(※1)探したい企業の事業内容をキーワードに入れましょう。<br />
                    　　  検索範囲を「すべて」にすると、より検索結果件数が増えます
                    </p>
                    <p>(※2)「資本金がHPに未記載の企業を検索対象にする」にチェックを入れると検索結果件数が増えます</p>
                    <p>(※3)「従業員数がHPに未記載の企業を検索対象にする」にチェックを入れると検索結果件数が増えます</p>
                  </Coution>
                </ContentBody>
              </Content>
            </>
          )
        }
      </Layout>
    )
  }
}

const Content = styled.div`
  margin-bottom: 100px;
`;

const Coution = styled.div`
  color: ${Color.TEXT};
  font-size: .9rem;
  p {
    line-height: 24px;
    margin-bottom: 0;
  }
`;

const ContentBody = styled.div`
  margin-top: 80px;
`;

const TBody = styled.tbody`
  tr:last-child {
    border-top: 1px dashed #333333;
  }
  th {
    width: 120px;
  }
  td {
    font-weight: bold;
  }
`;