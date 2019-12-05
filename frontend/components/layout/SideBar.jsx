
import styled from 'styled-components';
import Link from 'next/link';

export default ({ currentPath }) => {
  console.log(currentPath)
  return(
    <div>
      <SideMenu>
        <li>
          <Link href="/" >検索事例 &gt;</Link>
        </li>
        <li>
          <Link href="/mail_templates">メールテンプレート &gt;</Link>
        </li> 
        <hr></hr>
        <li>
          <Link href="/documents/bs">ビジネスサーチマニュアル &gt;</Link>
        </li>
        <li>
          <Link href="/documents/ca">コンタクトアシストマニュアル &gt;</Link>
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