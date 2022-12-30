import React, { useState } from 'react';
import DetailModal from '../detailModal/DetailModal';
import { Container } from '../layout/Layout';

export default function ResultList({ results }) {
  const [modalUser, setModalUser] = useState(Object.keys(results)[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = (user) => {
    setModalUser(user);
    setModalOpen(true);
  };

  return (
    <Container>
      {results &&
        Object.keys(results).map((user, index) => (
          <ResultItem key={index} user={user} results={results} onClick={onClick} />
        ))}
      <DetailModal user={modalUser} pays={results[modalUser]} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

function ResultItem({ user, results, onClick }) {
  return (
    <li>
      <p>구성원명: {user}</p>
      <p>최종 금액: {results[user].map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}</p>
      <button
        type="button"
        onClick={() => {
          onClick(user);
        }}
      >
        more
      </button>
    </li>
  );
}
