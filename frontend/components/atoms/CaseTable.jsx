import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';

import Colors from '../../config/Colors';

export default ({cases}) => {
  return (
    <Table borderless >
      <tbody>
        {
          cases.map((item,index) => (
            <Trow key={item.id}>
              <th>
                case{index + 1}　:
              </th>
              <td>
                <a href={`/search_cases/show#${item.id}`} >
                  {item.title}>
                </a>
              </td>
            </Trow>
          ))
        }
      </tbody>
    </Table>
  )
}

const Trow = styled.tr`
  line-height: 24px;
  th {
    color: ${ Colors.TEXT_ACTIVE };
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  td {
    a {
      text-decoration-line: underline;
    }
  }
`;