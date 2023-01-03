import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { InputAccount, PayCheck, ResultList } from '../../components';
import { Container, Header } from '../../components/layout/Layout';

const Buttons = styled.div`
  width: min(780px, 100%);
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 16px;
  position: fixed;
  bottom: 24px;
  margin: auto;

  button,
  a {
    width: 40%;
    background-color: white;
    border: none;
    box-shadow: 0px 0px 2px var(--border-color);
    padding: 10px 18px;
    border-radius: 30px;
    text-align: center;
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

  const shareResult = async () => {
    let result = `==================\n        정산의 정석\n==================\n총무 : ${payer}`;

    if (acct.bank && acct.acc) {
      result += `\n계좌 : ${acct.bank} ${acct.acc}`;
    }
    result += `\n------------------`;
    for (const user of Object.keys(results)) {
      if (user === payer) {
        continue;
      }
      result += `\n${user} : ${results[user].map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}원`;
    }
    result += `\n==================`;
    const res = await navigator.clipboard.writeText(result);
    alert('클립보드에 정산 결과가 복사되었습니다!');
  };

  return (
    <Container>
      <Header>
        <h2>정산 결과</h2>
        <p>정산 결과를 확인하세요.</p>
      </Header>
      <InputAccount ref={ref} onChange={onChange} />
      <main>
        <ResultList results={results} />
        <Buttons>
          <button type="button" onClick={shareResult}>
            공유하기
          </button>
          <Link to={`${process.env.PUBLIC_URL}/home`}>처음으로</Link>
        </Buttons>
      </main>
    </Container>
  );
}
