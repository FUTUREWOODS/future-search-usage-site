import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import React from 'react';

export default ({children, currentPath = '/'}) => {
  return (
    <div style={Style}>
      <Header />
      <Main>
        <Container>
          <Row>
            <Col xs={6} md={3} >
              <SideBar currentPath={currentPath} />
            </Col>
            <Col xs={12} md={9} >
              <Content>
                {children}
              </Content>
            </Col>
          </Row>
        </Container>
      </Main>
      <Footer />
    </div>
  )
}

const Main = styled.div`
  background-color: #e2edfa;
  padding: 50px 0;
  min-height: 80vh;
`;

const Content = styled.div`
  background-color: #FFF;
  border: 1px solid #dadada;
  border-radius: 10px;
  padding: 50px 38px;
`;

const Style = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
}
