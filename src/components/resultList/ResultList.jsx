import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
import styled from 'styled-components';
import DetailModal from '../detailModal/DetailModal';
import { SlArrowRight } from 'react-icons/sl';

const ListContainer = styled.ul`
  border-top: 1px solid var(--border-color);
  margin: 24px 24px;
  padding: 12px 24px;
  wid제h: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default function ResultList({ results }) {
  const [modalUser, setModalUser] = useState(Object.keys(results)[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const onClick = (user) => {
    setModalUser(user);
    setModalOpen(true);
  };

  return (
    <ListContainer>
      {results &&
        Object.keys(results).map((user, index) => (
          <ResultItem key={index} user={user} results={results} onClick={onClick} />
        ))}
      <DetailModal user={modalUser} pays={results[modalUser]} modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </ListContainer>
  );
}

const ItemContainer = styled.li`
  width: 320px;
  height: 40px;
  /* border: 1px solid var(--border-color); */
  padding: 12px 24px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  gap: 12px;

  strong {
    font-weight: 600;
    margin-right: auto;
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sub-border);
    border: none;
    width: 24px;
  }
`;

function ResultItem({ user, results, onClick }) {
  return (
    <ItemContainer>
      <strong>{user}</strong>
      <p>{results[user].map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}원</p>
      <button
        type="button"
        onClick={() => {
          onClick(user);
        }}
      >
        <SlArrowRight alt={`${user}의 상세 내역 모달 보기`} />
      </button>
    </ItemContainer>
  );
}
