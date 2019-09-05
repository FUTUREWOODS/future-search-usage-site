import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default () => {
  return (
    <header>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <LogoWrapper className="text-center">
              <LogoImage src="../../static/logo.png" />
            </LogoWrapper>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
const LogoWrapper = styled.div`
  padding: 20px 0;
`;
const LogoImage = styled.img`
  height: 80px;

`;
