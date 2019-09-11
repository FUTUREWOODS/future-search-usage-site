import styled from 'styled-components';

import Colors from '../../config/Colors';

export default ({ children }) => {
  return <Title>{children}</Title>;
}

const Title = styled.h2`
  color: ${ Colors.TEXT_ACTIVE };
`;
