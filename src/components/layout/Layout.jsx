import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.article`
  width: min(780px, 100%);
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  position: relative;

  p.copyright {
    position: absolute;
    bottom: 80px;
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const Section = styled.section`
  width: 100%;
`;

export const Header = styled.header`
  margin: 80px 0 32px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    line-height: 20px;
  }
`;

export const LinkContainer = styled.button`
  position: absolute;
  bottom: 0;
  width: min(780px, 100%);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border: none;
  cursor: default;

  border-radius: 20px 20px 0px 0px;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--main-color);
      cursor: pointer;
    `}
`;
