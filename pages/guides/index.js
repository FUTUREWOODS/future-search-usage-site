import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import Api from '../../lib/api';

import styled from 'styled-components';

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const api = new Api();
    const documents = await api.documents(slug);
    return { ...documents[0] };
  }

  render() {
    const title = this.props.title;
    const { rendered } = this.props.content;
    return (
      <Layout>
        <PageHead title={'検索ガイド'} description={''} />
        <PageCase>
          <p className=''>
            本当に探したい顧客像とマッチしたオリジナルな「法人リスト」を作成するためには
            <b>効果的な検索キーワード</b>を把握する必要があります。
            <br />
            下記の検索ガイドで解説しておりますので是非ご確認ください。
          </p>
          <p className='mt-2 mt-5'>
            <a href=''>検索ガイドはこちら</a>
          </p>
          <div className='mb-5'></div>
        </PageCase>
      </Layout>
    );
  }
}
