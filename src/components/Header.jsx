import React from 'react';
import styled from 'styled-components';

const HeaderCont = styled.header`
  background-color: #fff;
  padding: 6px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }
`;

export default function Header({ title, children }) {
  return (
    <HeaderCont>
      <h2>{title}</h2>
      <p>{children}</p>
    </HeaderCont>
  );
}
