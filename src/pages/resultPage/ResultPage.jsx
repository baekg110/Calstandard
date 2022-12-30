import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { InputAccount, PayCheck, ResultList } from '../../components';
import { Container, Header } from '../../components/layout/Layout';

const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 16px;
  position: fixed;
  bottom: 24px;
  button,
  a {
    width: 40%;
    background-color: white;
    border: none;
    text-align: center;
    box-shadow: 0px 0px 2px var(--border-color);
    padding: 10px 18px;
    border-radius: 30px;
  }
  button {
    background-color: var(--main-color);
  }
`;
export default function ResultPage() {
  const location = useLocation();
  const users = location.state.users;
  const payer = location.state.payer;
  const pays = location.state.pays;
  const results = PayCheck(users, pays);
  const [acct, setAcct] = useState({});
  const bankRef = useRef();
  const accRef = useRef();
  const ref = { bankRef, accRef };

  const onChange = () => {
    setAcct({ bank: bankRef.current.value, acc: accRef.current.value });
  };

  return (
    <Container>
      <Header>
        <h2>정산 결과</h2>
        <p>정산 결과를 확인하세요.</p>
      </Header>
      <InputAccount ref={ref} onChange={onChange} />
      <main>
        <ul>
          <ResultList results={results} />
        </ul>
        <Buttons>
          <button type="button">공유하기</button>
          <Link to="/">처음으로</Link>
        </Buttons>
      </main>
    </Container>
  );
}
