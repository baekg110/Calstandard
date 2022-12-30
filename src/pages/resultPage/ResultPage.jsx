import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PayCheck, ResultList } from '../../components';

export default function ResultPage() {
  const location = useLocation();
  const users = location.state.users;
  const payer = location.state.payer;
  const pays = location.state.pays;
  const results = PayCheck(users, pays);
  const onClick = (user) => {
    console.log(user);
  };
  return (
    <>
      <header>
        <h2>정산 결과</h2>
        <p>정산 결과를 확인하세요.</p>
      </header>
      <main>
        <ul>
          <ResultList results={results} onClick={onClick} />
        </ul>
        <button type="button">공유하기</button>
        <Link to="/">처음으로</Link>
      </main>
    </>
  );
}
