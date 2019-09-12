import styled from 'styled-components';

import Colors from '../../config/Colors';

export default ({ children }) => {
  return <Title dangerouslySetInnerHTML={ {__html: children}} />
}

const Title = styled.h2`
  color: ${ Colors.TEXT_ACTIVE };
`;
