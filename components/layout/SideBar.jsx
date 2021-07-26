import React, { useEffect,useState } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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

export default ({ currentPath }) => {
  const [showMailTemp, setShowMailTemp] = useState(true)
  useEffect (()=>{
    if (cookies.get('type') === "trial"){
      setShowMailTemp(false)
    }
  })

  return (
    <div>
      <SideMenu>
        <li>
          <a href='/'>検索事例 &gt;</a>
        </li>
        { showMailTemp && (
        <li>
          <a href='/mail_templates'>メールテンプレート &gt;</a>
        </li>
        )}
        <hr></hr>
        <li>
          <Link as='/documents/bs' href='/documents/bs'>
            <a>ビジネスサーチマニュアル &gt;</a>
          </Link>
        </li>
        <li>
          <Link as='/documents/ca' href='/documents/ca'>
            <a>コンタクトアシストマニュアル &gt;</a>
          </Link>
        </li>
        <li>
          <Link as='/documents/dp' href='/documents/dp'>
            <a>データプラスマニュアル &gt;</a>
          </Link>
        </li>
        <hr></hr>
        <li>
          <a href='/guides'>検索ガイド &gt;</a>
        </li>
        <li>
          <a href='/movies'>活用事例動画 &gt;</a>
        </li>
      </SideMenu>
    </div>
  );
};
