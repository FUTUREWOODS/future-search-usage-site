import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import Layout from '../../components/layout/Layout';
import PageHead from '../../components/molecules/PageHead';

import Api from '../../lib/api';
import { mailTemplateFormatter } from '../../lib/formatter';

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
      if (popup.post_title.indexOf(nodeId) > -1) {
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
    const currentPath = this.props.url.pathname;
    return (
      <Layout currentPath={currentPath}>
        <PageHead title={title} />
        <Content className="content">
            <Row>
              <ColMain sm={8}>
                <ContentTitle>
                  <h5>＜タイトル＞</h5>
                  <p id="title"
                    onMouseOver={this.popup}
                    onMouseOut={this.removePopup}>
                    {postTitle}
                  </p>
                </ContentTitle>
                <ContentBody>
                  <h5>＜本文＞</h5>
                  <div
                    onMouseOver={this.popup}
                    onMouseOut={this.removePopup}
                    dangerouslySetInnerHTML={{__html : body}} />
                </ContentBody>
              </ColMain>
              <ColLine sm={4}>
                <CautionText>※ マーカー部分にマウスをあてることで、本文作成のヒントが表示されます。</CautionText>
                {
                  popups.map(popup => {
                    return popup.visible && (
                      <WrappBalloon y={popup.position.y} key={popup.id}>
                        <Balloon dangerouslySetInnerHTML={{__html : popup.post_content}} />
                      </WrappBalloon>
                    )
                  })
                }
              </ColLine>
            </Row>
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
  margin-top: 70px;
`;
const WrappBalloon = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: -10px;
  width: 100%;
`;
const Balloon = styled.div`
  position: relative;
  display: inline-block;
  padding: 7px 10px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
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

const CautionText = styled.p`
  font-size: 12px;
`;


const ColMain = styled(Col)`
  padding-right: 38px;
`;
const ColLine = styled(Col)`
  border-left: 1px solid #dadada;
`;