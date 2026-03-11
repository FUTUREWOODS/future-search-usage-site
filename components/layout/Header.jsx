import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

export default () => {
  return (
    <header>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <LogoWrapper className="text-center">
              <a href='/'>
                <LogoImage src="../../static/logo.png" />
              </a>
            </LogoWrapper>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
const LogoWrapper = styled.div`
  padding: 10px 0;
`;
const LogoImage = styled.img`
  height: 45px;
`;
