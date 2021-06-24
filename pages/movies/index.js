import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import Api from '../../lib/api';
import Youtube from 'react-youtube'

import styled from 'styled-components';

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const api = new Api();
    const documents = await api.documents(slug);
    return { ...documents[0] };
  }

  render() {
    const opts = {
      height: "400px",
      width: "100%",
      playerVars: {
        mute: "1"
      }
    };
    const title = this.props.title;
    const { rendered } = this.props.content;
    return (
      <Layout>
        <PageHead title={'活用事例動画'} description={''} />
        <PageCase>
          <p>
            効果的に検索機能をご活用頂くためには、<b>絞り込み機能や検索範囲</b>も使いこなす必要があります。
            <br />
            活用事例を全4編の動画にまとめしましたので、ぜひご覧ください。
            <br />
            ※動画は字幕のみになります。音声は流れません。
          </p>
          <MovieText className="mt-5">
            <p className="mb-0"><u>初級編：OR検索を使ってみよう！</u>
            <br />
            「テレワーク中、またはテレワークの商材を持つ企業」に、新しいWebアプリの営業を行いたい</p>
          </MovieText>
          <div className="mb-5">
            <Youtube videoId="W-Tun8O-Tjk" opts={opts} />
          </div>
          <MovieText>
            <p className="mb-0"><u>中級編：AND・OR検索を使ってみよう！</u>
            <br />
            「自然素材などを扱う住宅メーカー」に、新しい資材の営業を行いたい
            <br />
            「Pマークの取得支援をしているコンサル」に、新しいWebアプリの営業を行いたい
            </p>
          </MovieText>
          <div className="mb-5">
            <Youtube videoId="-EKxzId_Sj4" opts={opts} />
          </div>
          <MovieText>
            <p className="mb-0"><u>上級編：絞り込み機能を使ってみよう！</u>
            <br />
           「海外に拠点を持つ関東圏内の中規模の製造メーカー」に、物流コンサルの営業を行いたい
            </p>
          </MovieText>
          <div className="mb-5">
            <Youtube videoId="2PqxOytUjz0" opts={opts} />
          </div>
          <MovieText>
            <p className="mb-0"><u>番外編 アクティビティタグ・代表者あいさつを使ってみよう！</u>
            <br />
           「展示会に出展しているような工具メーカー」に、技術セールス代行の営業を行いたい
            <br />
           「健康増進を方針として掲げている中小企業」に、経営コンサルの営業を行いたい
            </p>
          </MovieText>
          <div className="mb-5">
            <Youtube videoId="SX_ViT4Ra7k" opts={opts} />
          </div>
          <div className='mb-5'></div>
        </PageCase>
      </Layout>
    );
  }
}

const MovieText = styled.div`
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 1.5%;
  background-color: #e2edfa;
  border-radius: 11px;
  margin-block-end: 1.5em;
  color: rgba(51,51,51);
`;
