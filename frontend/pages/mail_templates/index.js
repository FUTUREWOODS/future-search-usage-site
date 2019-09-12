import React, { Component } from 'react';

import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import CaseList from '../../components/atoms/CaseList';

import Api from '../../lib/api';
import { mailTemplateTitleFormtter } from '../../lib/formatter';

const description = `企業のキーマンの目に留まりやすい企業サイトの【お問合せフォーム】を使用した「コンタクトアシスト」を利用すると、繰り返し入力の手間が省け、営業効率化が可能！
お問い合わせに使用するリストは、ビジネスサーチで作成した法人リストをそのままお使いいただけます。
`;

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cases = this.props.mailTemplates;
    return (
      <Layout>
        <PageHead title="メールテンプレート" description={description} />
        <PageCase>
          <CaseList cases={cases} />
        </PageCase>
      </Layout>
    )
  }
}

Index.getInitialProps = async function() {
  const api = new Api();
  let mailTemplates = await api.mailTemplates().orderby('date').order('desc');
  mailTemplates = mailTemplates.map(template => mailTemplateTitleFormtter(template));
  return { mailTemplates }
}
