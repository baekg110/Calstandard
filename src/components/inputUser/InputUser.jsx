import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Button } from '../../components';

const InputUserContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 10px;

  input {
    width: 240px;
    border: none;
  }
  button {
    width: 80px;
  }
`;

function InputUser({ onCreate }, ref) {
  return (
    <InputUserContainer>
      <input ref={ref} placeholder="구성원을 입력하세요" required />
      <Button onClick={onCreate}>등록</Button>
    </InputUserContainer>
  );
}

export default forwardRef(InputUser);
