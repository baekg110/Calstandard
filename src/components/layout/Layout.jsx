import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.article`
  width: min(780px, 100%);
  height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  position: relative;
`;

export const Section = styled.section`
  /* width: max(380px, 100%); */
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

export const LinkContainer = styled(Link)`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 20px 20px 0px 0px;
  cursor: pointer;
`;
