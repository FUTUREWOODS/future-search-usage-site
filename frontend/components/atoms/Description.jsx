import styled from 'styled-components';

export default ({ children }) => {
  return <Description>{children}</Description>;
}

const Description = styled.p`
  margin-top: 70px;
  line-height: 28px;
`;