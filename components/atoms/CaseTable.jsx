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
                  {item.title}
                </a>
              </td>
            </Trow>
          ))
        }
        <Trow>
          <th>
            case{cases.length+1}　:
          </th>
          <td>
            <a href={`/search_cases/show#${cases.length+1}`} >
              その他（採用に力を入れている会社にアプローチをしたい、セキュリティー関連商品を販売したい会社にアプローチしたい、などなど）別途ご相談ください。
            </a>
          </td>
        </Trow>
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