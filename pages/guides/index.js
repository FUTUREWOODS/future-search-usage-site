import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';

export default class Index extends React.Component {
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1dD_9K6NYxTyi5s8P6VUhACbvkkcI0asp/view?usp=sharing"
            >
              検索ガイドはこちら
            </a>
          </p>
          <div className='mb-5'></div>
        </PageCase>
      </Layout>
    );
  }
}
