import React, { Component } from 'react';

import Layout from '../components/layout/Layout';
import PageHead from '../components/molecules/PageHead';
import PageCase from '../components/molecules/PageCase';
import CaseTable from '../components/atoms/CaseTable';

import Api from '../lib/api';
import { searchCaseTitleFormatter } from '../lib/formatter';

const description = `「ビジネスサーチ」は、フリーワードで企業検索ができるので自由度が高く、 さらに、業種やエリア、
従業員数など詳細な絞り込み設定で何度でも検索可能！
貴社が本当に出会いたかった企業が見つかります。
表示された法人リスト(※)は即時ダウンロードが可能で、すぐに営業リストとしてお使いいただけます。
`;

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchCases } = this.props;
    console.log(searchCases);
    return (
      <Layout>
        <PageHead title="検索事例" description={description} />
        <PageCase>
          <CaseTable cases={searchCases} />
        </PageCase>
      </Layout>
    )
  }
}

Index.getInitialProps = async function() {
  const api = new Api();
  let searchCases = await api.searchCases().orderby('date').order('asc');
  searchCases = searchCases.map(item => searchCaseTitleFormatter(item));
  return { searchCases }
}
