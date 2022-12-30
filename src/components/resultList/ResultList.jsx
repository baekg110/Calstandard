import React, { useState } from 'react';
import DetailModal from '../detailModal/DetailModal';
import { Container } from '../layout/Layout';

export default function ResultList({ results }) {
  const [user, setUser] = useState();

  function handleModal(user) {
    setUser(user);
  }
  return (
    <Container>
      {results &&
        Object.keys(results).map((user, index) => (
          <li key={index}>
            <p>구성원 이름: {user}</p>
            <p>최종 금액: {results[user].map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}</p>
            <button type="button" onClick={() => handleModal(user)}>
              more
            </button>
          </li>
        ))}
      <DetailModal user={user} pays={results[user]} />
    </Container>
  );
}
