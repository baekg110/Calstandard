import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components/layout/Layout';

const Title = styled.header`
  margin: 120px auto 0px;
  width: min(380px, 80%);
  border-top: 3px solid var(--main-color);
  h1 {
    text-align: center;
    font-size: 48px;
    padding: 30px;
  }

  span {
    font-size: 32px;
    font-weight: 500;
  }
  p {
    background-color: var(--main-color);
    text-align: center;
    margin: 0px auto;
    padding: 4px;
    font-weight: 600;
  }
`;

const Dev = styled.p`
  position: absolute;
  bottom: 80px;
  display: block;
  width: 100%;
  text-align: center;
`;

export default function SplashPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }, 1500);

  return (
    <Container>
      <Title>
        <h1>
          정산<span>의</span> 정석
        </h1>
        <p>CALCULATION STANDARD</p>
      </Title>
      <Dev>Copyright 2023. BAEKG6 All rights reserved.</Dev>
    </Container>
  );
}
