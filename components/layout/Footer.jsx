import { Container, Row, Col, Nav } from 'react-bootstrap';
import styled from 'styled-components';

export default () => {
  return (
    <footer style={ Style }>
      <Container>
        <CustomeRow>
          <Col xs={12} md={8}>
            <FooterMenu>
              <li><a href="https://futurewoods.co.jp/" target="_blank">運営企業</a>&nbsp;|&nbsp;</li>
              <li><a href="https://future-search.jp/legal/terms/" target="_blank">利用規約</a>&nbsp;|&nbsp;</li>
              <li><a href="https://future-search.jp/legal/commercial_transaction/" target="_blank">特定商取引法に基づく表記</a>&nbsp;|&nbsp;</li>
              <li><a href="https://future-search.jp/legal/policy/" target="_blank">プライバシーポリシー</a>&nbsp;|&nbsp;</li>
              <li><a href="https://help.future-search.jp/ja/" target="_blank">ヘルプ</a></li>
            </FooterMenu>
          </Col>
          <Col xs={6} md={4} className="text-right">
            <p>FUTUREWOODS CO., LTD.</p>
          </Col>
        </CustomeRow>
      </Container>
    </footer>
  )
}

const CustomeRow = styled(Row)`
  margin: 40px 0 30px;
`;

const FooterMenu = styled.ul`
  & li {
    display: inline-block;
    & a {
      color: #333333;
      &:hover {
        color: #007bff;
        text-decoration-line: none;
      }
    }
  }
`;

const Style = {
  marginTop: "auto",
}
