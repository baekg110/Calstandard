import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { SlClose } from 'react-icons/sl';

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;

  z-index: 10;
  border-radius: 10px;
  box-shadow: 0px 0px 1000000px rgba(0, 0, 0, 0.6);
  display: none;

  ${(props) =>
    props.open &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
    `}
`;

const Design = styled.div`
  width: 330px;
  height: 620px;
  border-radius: 10px;

  padding: 50px 24px;
  position: relative;
  /* display:flex; */
  display: flex;
  flex-direction: column;

  display: none;
  ${(props) =>
    props.open &&
    css`
      display: block;
      background-color: #fff;
    `}

  strong {
    padding-bottom: 24px;
    font-size: 24px;
    display: block;
    border-bottom: 3px double var(--border-color);
  }

  ul {
    padding: 12px 0px;
    height: 90%;

    li {
      padding: 12px 6px;

      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--border-color);
    }

    .name {
      font-size: 18px;
    }
    .priceInfo {
      font-size: 12px;
      span {
        font-size: 10px;
        color: #bbb;
      }
    }
    .priceper {
      font-size: 16px;
      text-align: right;
    }
  }

  > p {
    position: relative;
    text-align: right;
    padding-right: 12px;

    span {
      font-weight: 700;
    }
    border-top: 1px solid var(--border-color);
  }
  button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

export default function DetailModal({ user, pays, modalOpen, setModalOpen }) {
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <ModalContainer open={modalOpen} onClick={handleClose}>
      <Design open={modalOpen} onClick={(e) => e.stopPropagation()}>
        <strong>{user} 상세 내역</strong>
        <ul>
          {pays &&
            pays.map((pay, index) => (
              <li key={index}>
                <div>
                  <p className="name">{pay.name}</p>
                  <p className="priceInfo">
                    {pay.price} / <span>{pay.member}</span>
                  </p>
                </div>
                <p className="priceper">{pay.priceper}원</p>
              </li>
            ))}
        </ul>
        <p>
          총 금액 : <span>{pays.map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}</span>원
        </p>
        <button type="button" onClick={handleClose}>
          <SlClose alt="닫기" />
        </button>
      </Design>
    </ModalContainer>
  );
}
