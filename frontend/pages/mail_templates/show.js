import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';

import Api from '../../lib/api';
import { mailTemplateFormatter } from '../../lib/formatter';

const popupsSample = [
  {
    id: 32,
    post_title: 'case_1',
    post_content: "<!-- wp:paragraph -->\n<p>ほげほげほげほげ私の名前hogehogeです。どうぞよろしく</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>ほげほげほげｈげお</p>\n<!-- /wp:paragraph -->",
    visible: false,
  },{
    id: 33,
    post_title: 'case_2',
    post_content: "<!-- wp:paragraph -->\n<p>ほげほげほげほげ私の名前hogehogeです。どうぞよろしく</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>ほげほげほげｈげお</p>\n<!-- /wp:paragraph -->"
  }
];

export default class MailTemplateShow extends Component {
  constructor(props) {
    super(props);
    const { title, postTitle, body, popups } = props.mailTemplate;
    this.popup = this.popup.bind(this);
    this.removePopup = this.removePopup.bind(this);
    this.state = {
      title,
      postTitle,
      body,
      popups,
    }
  }

  popup(e) {
    e.preventDefault();
    if (e.target.id === "") return;
    const y = e.target.offsetTop;
    const nodeId = e.target.id;
    const { popups } = this.state;
    const popupContents = popups.map(popup => {
      if (popup.post_title === nodeId) {
        return {
          ...popup,
          visible: true,
          position: { y },
        };
      }
      return popup;
    });
    this.setState({ popups: popupContents });
  }

  removePopup(e) {
    e.preventDefault();
    if (e.target.id === "") return;
    const popups = this.props.mailTemplate.popups;
    this.setState({ popups });
  }

  render() {
    const { title, postTitle, body, popups } = this.state;
    return (
      <Layout>
        <PageHead title={title} />
        <Content>
          <ContentTitle>
            <h5>＜タイトル＞</h5>
            <p>{postTitle}</p>
          </ContentTitle>
          <ContentBody>
            <h5>＜本文＞</h5>
            <Row>
              <Col sm={8}>
                <div
                  onMouseOver={this.popup}
                  onMouseOut={this.removePopup}
                  dangerouslySetInnerHTML={{__html : body}} />
              </Col>
              <Col sm={4}>
                {
                  popups.map(popup => {
                    return popup.visible && (
                      <WrappBalloon y={popup.position.y} key={popup.id}>
                        <Balloon dangerouslySetInnerHTML={{__html : popup.post_content}} />
                      </WrappBalloon>
                    )
                  })
                }
              </Col>
            </Row>
          </ContentBody>
        </Content>
      </Layout>
    )
  }
}

MailTemplateShow.getInitialProps = async function(context, req) {
  const { id } = context.query;
  const { asPath } = context;
  const api = new Api();
  const mailTemplate = await api.mailTemplates().id(id);
  return { mailTemplate: mailTemplateFormatter(mailTemplate) , path: asPath};
}


const Content = styled.div`
  
`;

const ContentTitle = styled.div`

`;

const ContentBody = styled.div`
  margin-top: 80px;
`;
const WrappBalloon = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: 0px;
  width: 100%;
`;
const Balloon = styled.div`
  position: relative;
  display: inline-block;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #fafcff;
  border-radius: 10px;
  border: 1px solid #cddbec;

  &:before {
    content: "";
    position: absolute;
    top: 26px;
    left: -12px;
    margin-top: -12px;
    border:6px solid transparent;
    border-right: 6px solid #FFF;
    z-index: 2;
  }
  &:after {
    content: "";
    position: absolute;
    top: 26px;
    left: -16px;
    margin-top: -14px;
    border: 8px solid transparent;
    border-right: 8px solid #cddbec;
    z-index: 1;
  }

  p {
    margin: 0;
    padding: 0;
  }
`;