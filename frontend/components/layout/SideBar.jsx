
import styled from 'styled-components';

export default () => {
  return(
    <div>
      <SideMenu>
        <li>
          <a href="/" className="active">検索事例 &gt;</a>
        </li>
        <li>
          <a href="/mail_templates">メールテンプレート &gt;</a>
        </li>
      </SideMenu>
    </div>
  )
}


const SideMenu = styled.ul`
  li {
    margin-bottom: 28px;
    a {
      color: #666666;
      &.active {
        color: #000;
        font-weight: bold;
      }
    }
  }
`;