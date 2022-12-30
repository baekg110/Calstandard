import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DetailModal, PayCheck, ResultList } from '../../components';

export default function ResultPage() {
  const location = useLocation();
  const users = location.state.users;
  console.log('>>', users);
  const payer = location.state.payer;
  const pays = location.state.pays;
  const results = PayCheck(users, pays);

  return (
    <>
      <header>
        <h2>정산 결과</h2>
        <p>정산 결과를 확인하세요.</p>
      </header>
      <main>
        <ul>
          <ResultList results={results} />
        </ul>
        <button type="button">공유하기</button>
        <Link to="/">처음으로</Link>
      </main>
    </>
  );
}
