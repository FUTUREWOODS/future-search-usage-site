import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import Api from '../../lib/api';

import styled from 'styled-components';


const Content = styled('div')`
  img {
    width: 100%;
    margin-bottom:50px;
  }
  h2 {
    font-size: 18px;
    font-weight:bold;
    color: rgba(51, 51, 51);
    margin-bottom:2.0em;
    border-bottom: 1px solid #0275d8;
  }
  h3 {
    display:block;
    font-size: 14px;
    font-weight:bold;
    padding:2.8%;
    background-color:#e2edfa;
    border-radius: 11px;
    margin-block-end: 2.5em;
    margin-block-start: 1em;
    color: rgba(51, 51, 51);
  }
  h4 {
    font-size: 14px;
    font-weight: bold;
    color: rgba(51, 51, 51);
    padding-bottom:10px
  }
  ol {
    margin-bottom:50px;
    list-style-type:decimal;
    padding-left:2em;
  }
  li {
    margin-top: 5px;
    color:#292b2c;
    .bs-index {
      color: #292b2c;
    }
    .ca-index {
      color: #292b2c;
    }
  }
  p {
    margin-bottom:2.5em;
    color:#292b2c;
  }
`;


export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
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