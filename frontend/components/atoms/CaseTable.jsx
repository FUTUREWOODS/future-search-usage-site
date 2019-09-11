import { Table } from 'react-bootstrap';
import styled from 'styled-components';

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
                <a href="#">{item.title}></a>
              </td>
            </Trow>
          ))
        }
      </tbody>
    </Table>
  )
}

const Trow = styled.tr`
  font-size: 18px;
  line-height: 36px;
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