import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import Api from '../../lib/api';

import styled from 'styled-components';


const Content = styled('div')`
  img {
    width: 100%;
  }
  h2 {
    font-size: 20px;
  }
`;


export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const slug = req.params.slug;
    const api = new Api();
    const documents = await api.documents(slug);
    return { ...documents[0] }
  }
  
  render() {
    const title = this.props.title;
    const { rendered } = this.props.content
    return (
      <Layout>
        <PageHead title={title.rendered} description={''} />
        <PageCase>
          <Content dangerouslySetInnerHTML={{__html: rendered}} />
        </PageCase>
      </Layout>
    )
  }
}