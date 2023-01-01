import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components/layout/Layout';

const Title = styled.h1`
  margin: 120px auto 0px;
  width: min(380px, 80%);
  border-top: 3px solid var(--main-color);
  text-align: center;
  font-size: 48px;
  padding: 30px;

  span {
    font-size: 32px;
    font-weight: 500;
  }
`;

const Dev = styled.p`
  width: min(380px, 80%);

  /* border: 1px solid red; */
  background-color: var(--main-color);
  text-align: center;
  margin: 0px auto;
  padding: 2px;
`;

export default function SplashPage() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }, 1500);

  return (
    <Container>
      <Title>
        정산<span>의</span> 정석
      </Title>
      <Dev>BAEKG DEV</Dev>
    </Container>
  );
}
