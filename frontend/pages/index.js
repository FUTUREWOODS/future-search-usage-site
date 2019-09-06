import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';

export default class Index extends Component {
  render() {
    const cases = sample_cases;
    return (
      <Layout>
        <h2>検索事例</h2>
        <Description>
        「ビジネスサーチ」は、フリーワードで企業検索ができるので自由度が高く、 さらに、業種やエリア、
        従業員数など詳細な絞り込み設定で何度でも検索可能！
        貴社が本当に出会いたかった企業が見つかります。
        表示された法人リスト(※)は即時ダウンロードが可能で、すぐに営業リストとしてお使いいただけます。
        </Description>

        {
          cases.map((item,index) => (
            <p>CASE{index + 1}: <a href="#">{item.title}</a></p>
          ))
        }
      </Layout>
    )
  }
}

const Description = styled.p`
  margin-top: 70px;
`;

const sample_cases = [
  { title: '人材育成を事業としている全国の中小企業に、新しい研修パッケージングの案内・売り込をしたい', id: '001' },
  { title: '都内で開催するtoC向けのWeb集客セミナーに参加してくれるマンション仲介・販売を手がける中小企業を探したい', id: '002' },
  { title: '2000年以前に設立された関東のエステ・美容系のお店を運営（店舗展開）している会社に新設備の案内がしたい', id: '003' },
  { title: '訪日外国人向けにWebサービスや観光ガイドサービスを提供している会社に翻訳サービスパッケージの案内をしたい', id: '004' },
]