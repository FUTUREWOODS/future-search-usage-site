
import styled from 'styled-components';
import Link from 'next/link';

export default ({ currentPath }) => {
  return(
    <div>
      <SideMenu>
        <li>
          <a href="/">検索事例 &gt;</a>
        </li>
        <li>
          <a href="/mail_templates">メールテンプレート &gt;</a>
        </li> 
        <hr></hr>
        <li>
          <Link href="/documents/bs">
            <a>ビジネスサーチマニュアル &gt;</a>
          </Link>
        </li>
        <li>
          <Link href="/documents/ca">
            <a>コンタクトアシストマニュアル &gt;</a>
          </Link>
        </li>
        <li>
          <Link href="/documents/dp">
            <a>データプラスマニュアル &gt;</a>
          </Link>
        </li>
      </SideMenu>
    </div>
  )
}


const SideMenu = styled.ul`
  li {
    margin-bottom: 14px;
    a {
      color: #666666;
      &.active {
        color: #000;
        font-weight: bold;
      }
    }
  }
`;