import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';
import PageCase from '../../components/molecules/PageCase';
import Youtube from 'react-youtube'
import styled from 'styled-components';

const MovieIndex = styled.span`
  margin-top: 20px;
  font-weight: bold;
`;

const Span = styled.span`
  margin-left: 55px;
`;

const Link = styled.a`
  color: rgba(51,51,51);
`;

const MovieItem = styled.div`
  margin-bottom: 120px;
`;

const MovieTextBg = styled.div`
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 1.5%;
  background-color: #e2edfa;
  border-radius: 11px;
  margin-block-end: 1.5em;
  color: rgba(51,51,51);
`;

const MovieText = styled.p`
  margin-bottom: 0;
`;

const opts = {
  height: "400px",
  width: "100%",
  playerVars: {
    mute: "1"
  }
};

const BEGIN_VIDEO_ID = "1O2yxtOsxzg";
const MIDDLE_VIDEO_ID = "nDf0lhr0qHM";
const HIGH_VIDEO_ID = "1T62v1wopzQ";
const EXTRA_VIDEO_ID = "pzFzJZd6j78";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <PageHead title={'活用事例動画'}
          description={
            <React.Fragment>
              効果的に検索機能をご活用頂くためには、<b>絞り込み機能や検索範囲</b>も使いこなす必要があります。
              <br />
              活用事例を<b>全4編の動画</b>にまとめしましたので、ぜひご覧ください。
              <br />
              ※動画は字幕のみになります。音声は流れません。
              <br />
              <br />
              <MovieIndex>
                <Link href="#begin">
                  初級編：「テレワーク中、またはテレワークの商材を持つ企業」に、新しいWebアプリの営業を行いたい
                </Link>
                <br />
                <Link href="#middle">
                  中級編：「東京都、神奈川県で自然素材などを扱う住宅メーカー」に、新しい資材の営業を行いたい
                <br />
                  <Span />「Pマークの取得支援をしているコンサル」に、新しいWebアプリの営業を行いたい
                </Link>
                <br />
                <Link href="#high">
                  上級編：「海外に拠点を持つ関東圏内の中規模の製造メーカー」に、物流コンサルの営業を行いたい
                </Link>
                <br />
                <Link href="#extra">
                  番外編：「展示会に出展しているような工具メーカー」に、技術セールス代行の営業を行いたい
                <br />
                  <Span />「健康増進を方針として掲げている中小企業」に、経営コンサルの営業を行いたい
                </Link>
              </MovieIndex>
            </React.Fragment>
          }
        />
        <PageCase>
          <MovieItem id="begin">
            <MovieTextBg>
              <MovieText>
                <u>初級編：OR検索を使ってみよう！</u>
                <br />
                  「テレワーク中、またはテレワークの商材を持つ企業」に、新しいWebアプリの営業を行いたい
              </MovieText>
            </MovieTextBg>
            <Youtube videoId={BEGIN_VIDEO_ID} opts={opts} />
          </MovieItem>
          <MovieItem id="middle">
            <MovieTextBg>
              <MovieText>
                <u>中級編：AND・OR検索を使ってみよう！</u>
                <br />
                  「東京都、神奈川県で自然素材などを扱う住宅メーカー」に、新しい資材の営業を行いたい
                <br />
                  「Pマークの取得支援をしているコンサル」に、新しいWebアプリの営業を行いたい
              </MovieText>
            </MovieTextBg>
            <Youtube videoId={MIDDLE_VIDEO_ID} opts={opts} />
          </MovieItem>
          <MovieItem id="high">
            <MovieTextBg>
              <MovieText>
                <u>上級編：絞り込み機能を使ってみよう！</u>
                <br />
                  「海外に拠点を持つ関東圏内の中規模の製造メーカー」に、物流コンサルの営業を行いたい
              </MovieText>
            </MovieTextBg>
            <Youtube videoId={HIGH_VIDEO_ID} opts={opts} />
          </MovieItem>
          <MovieItem id="extra">
            <MovieTextBg>
              <MovieText>
                <u>番外編 アクティビティタグ・代表者あいさつを使ってみよう！</u>
                <br />
                  「展示会に出展しているような工具メーカー」に、技術セールス代行の営業を行いたい
                <br />
                  「健康増進を方針として掲げている中小企業」に、経営コンサルの営業を行いたい
              </MovieText>
            </MovieTextBg>
            <Youtube videoId={EXTRA_VIDEO_ID} opts={opts} />
          </MovieItem>
        </PageCase>
      </Layout>
    );
  }
}
