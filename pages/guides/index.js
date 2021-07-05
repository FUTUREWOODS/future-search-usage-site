import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import Api from '../../lib/api';

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const api = new Api();
    const documents = await api.documents(slug);
    return { ...documents[0] };
  }

  render() {
    return (
      <Layout>
        <PageHead title={'簡単検索ガイド'} description={''} />
        <PageCase>
          <p>
            本当に探したい顧客像とマッチした、オリジナルな「法人リスト」を作成するためには、
            <br />
            <b>効果的な検索キーワード</b>を把握することが大切です。
            <br />
            下記の検索ガイドで解説しておりますのでぜひご覧ください。
          </p>
          <p className='mt-5'>
            <a href=''>検索ガイドはこちら</a>
          </p>
          <div className='mb-5'></div>
        </PageCase>
      </Layout>
    );
  }
}
