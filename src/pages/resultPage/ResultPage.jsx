import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dutch } from '../../components/payCheck/PayCheck';

export default function ResultPage() {
  const location = useLocation();

  return (
    <>
      <header>
        <h2>정산 결과</h2>
        <p>정산 결과를 확인하세요.</p>
      </header>
      <main>
        <ul>
          <li>
            <p>사용자 이름</p>
            <p>25000원</p>
            <button type="button">상세 목록 보기</button>
          </li>
        </ul>

        <Link to="/">처음으로</Link>
        <button type="button">공유하기</button>
      </main>
    </>
  );
}
