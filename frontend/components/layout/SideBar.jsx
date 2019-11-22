
import styled from 'styled-components';
import Link from 'next/link';

export default ({ currentPath }) => {
  console.log(currentPath)
  return(
    <div>
      <SideMenu>
        <li className={ (currentPath === '/') ? 'active': '' }>
          <Link href="/" >検索事例 &gt;</Link>
        </li>
        <li className={ (currentPath.indexOf('/mail_templates') > -1) ? 'active' : '' }>
          <Link href="/mail_templates">メールテンプレート &gt;</Link>
        </li> 
        <hr></hr>
        <li className={ (currentPath.indexOf('/documents/bs') > -1) ? 'active' : '' }>
          <Link href="/documents/bs">ビジネスサーチマニュアル &gt;</Link>
        </li>
        <li className={ (currentPath.indexOf('/documents/ca') > -1) ? 'active' : '' }>
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