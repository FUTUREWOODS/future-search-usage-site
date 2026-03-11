import styled from 'styled-components';

import Colors from '../../config/Colors';

export default ({ children }) => {
  return <Title dangerouslySetInnerHTML={ {__html: children}} />
}

const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${ Colors.TEXT_ACTIVE };
`;
