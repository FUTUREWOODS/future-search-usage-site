import styled from 'styled-components';
import Link from 'next/link';

export default ({ cases }) => {
  return (
    <List>
      { 
        cases.map(item => {
          return (
            <li key={item.id}>
              <Link href={`/mail_templates/${item.id}`} >
                <a dangerouslySetInnerHTML={{__html: item.title}} />
              </Link>
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
    a {
      text-decoration-line: underline;
    }
  }
`;