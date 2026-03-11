import styled from 'styled-components';
import Link from 'next/link';

export default ({ cases }) => {
  return (
    <List>
      { 
        cases.map(item => {
          return (
            <li key={item.id}>
              <a href={`/mail_templates/${item.id}`} dangerouslySetInnerHTML={{__html: item.title}} />
            </li>
          )
        })
      }
    </List>
  )
}

const List = styled.ul`
  li {
    line-height: 24px;
  }
`;