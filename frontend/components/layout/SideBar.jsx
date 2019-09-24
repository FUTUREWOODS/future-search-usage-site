
import styled from 'styled-components';

export default ({ currentPath }) => {
  console.log(currentPath, currentPath.indexOf('/search_cases'))
  return(
    <div>
      <SideMenu>
        <li>
          <a href="/" className={ (currentPath === '/') ? 'active': '' }>検索事例 &gt;</a>
        </li>
        <li>
          <a href="/mail_templates" className={ (currentPath.indexOf('/mail_templates') > -1) ? 'active' : '' }>メールテンプレート &gt;</a>
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