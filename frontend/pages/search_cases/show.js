import React, { Component } from 'react';
import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import * as moment from 'moment';
import 'moment/locale/ja';

import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';

import Color from '../../config/Colors';
import { searchCaseTitleFormatter } from '../../lib/formatter';
import Api from '../../lib/api';

export default class SearchCaseShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchCases } = this.props;
    return (
      <Layout>
        {
          searchCases.map((item, index) =>
            <div id={item.id} key={item.id}>
              <PageHead title={`CASE${index + 1}&nbsp;:&nbsp;${item.title}`} />
              <Content>
                <ContentBody>
                  <Table borderless>
                    <TBody>
                      <tr>
                        <th>キーワード</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.query}</span>
                          （※1）
                        </td>
                      </tr>
                      <tr>
                        <th>除外ワード</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.delete_words || '(指定なし)'}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>検索範囲</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.scope}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>新規取得日</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.date_identification}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>更新日</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.date_analysis}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>エリア</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.area || '(指定なし)'}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>業種</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.fw_code || '(指定なし)'}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>上場区分</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.listing_class || '(指定なし)'}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>新規登記</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.new_construction || '(指定なし)'}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>設立年月日</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.establishment_date || '(指定なし)'}</span>
                        </td>
                      </tr>
                      <tr>
                        <th>資本金</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>
                            {item.capital || '(指定なし)'}
                          </span>  
                          （※2）
                        </td>
                      </tr>
                      <tr>
                        <th>従業員数</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <span>{item.employee || '(指定なし)'}</span>
                          （※3）
                        </td>
                      </tr>
                      <tr>
                        <th>検索結果</th>
                        <td>:&nbsp;&nbsp;&nbsp;
                          <ResultCount>{parseInt(item.search_result).toLocaleString()}</ResultCount>件
                          &nbsp;&nbsp;
                          ({moment(item.created_search_history).format('ll')}時点)
                        </td>
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
            </div>
          )
        }
        <div id={searchCases.length + 1}>
          <PageHead title={`CASE${searchCases.length + 1}&nbsp;:&nbsp;その他（採用に力を入れている会社にアプローチをしたい、セキュリティー関連商品を販売したい会社にアプローチしたい、などなど）別途ご相談ください。`} />
          <Content>
            お問い合わせは<a href="https://future-search.jp/" target="_blank">こちら</a>(リンク先吹き出しのマークよりお問い合わせいただけます。)
          </Content>
        </div>
      </Layout>
    )
  }
}

SearchCaseShow.getInitialProps = async function(context, req) {
  const api = new Api();
  let searchCases = await api.searchCases().orderby('date').order('desc');
  searchCases = searchCases.map(item => searchCaseTitleFormatter(item));
  return { searchCases }
}

const Content = styled.div`
  margin-bottom: 140px;
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
  margin-top: 70px;
`;

const TBody = styled.tbody`
  tr:last-child {
    border-top: 1px dashed #333333;
    th {
      padding-top: 1.8rem;
    }
    td {
      padding-top: 1rem;
    }
  }
  th, td {
    padding: 0.5rem 0.75rem;
  }
  th {
    width: 120px;
  }
  td {
    span {
      font-weight: bold;
    }
  }
`;

const ResultCount = styled.span`
  font-size: 1.6rem;
`;