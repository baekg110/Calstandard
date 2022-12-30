import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
  border: 1px solid red;
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: block;
      background-color: yellow;
    `}
`;
export default function DetailModal({ user, pays, modalOpen, setModalOpen }) {
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <ModalContainer open={modalOpen}>
      <strong>{user} 상세 내역</strong>
      <ul>
        {pays &&
          pays.map((pay, index) => (
            <li key={index}>
              <p>{pay.name}</p>
              <p>
                {pay.price}/{pay.member}
              </p>
              <p>{pay.priceper}</p>
            </li>
          ))}
      </ul>
      <p>{pays.map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}</p>
      <button type="button" onClick={handleClose}>
        닫기
      </button>
    </ModalContainer>
  );
}
