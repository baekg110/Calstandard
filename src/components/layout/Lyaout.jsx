import React from 'react';
import styled from 'styled-components';

export const Container = styled.article`
  width: min(480px, 100%);
  height: 780px;
  /* 모바일에서는 꽉 차게, 화면 길이 780보다 작으면 스크롤 이벤트 */
  /* 모바일, 태블릿(세로)는 꽉차게 해버리자 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  outline: 1px solid black;
`;
