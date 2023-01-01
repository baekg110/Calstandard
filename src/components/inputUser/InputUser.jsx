import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';
const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 16px;

  input {
    padding: 6px 12px;
    width: 240px;
    border-radius: 6px;
    border: 1px solid var(--border-color);

    &:focus {
      border: 1px solid var(--main-color);
      outline: 1px solid var(--main-color);
    }
  }

  button {
    width: 60px;
    background-color: var(--main-color);
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:disabled {
      background-color: #ddd;
      cursor: default;
    }
  }
`;

function InputUser({ onCreate }, ref) {
  const MAX_LENGTH = 18;
  const [activ, setActiv] = useState(true);

  const handleActiv = () => {
    if (ref.current.value) {
      setActiv(false);
    } else {
      setActiv(true);
    }
  };

  return (
    <InputContainer>
      <input maxLength={MAX_LENGTH} ref={ref} onChange={handleActiv} placeholder="구성원 이름을 입력해주세요." />
      <button onClick={() => onCreate(setActiv)} disabled={activ}>
        등록
      </button>
    </InputContainer>
  );
}

export default forwardRef(InputUser);
