import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin: 0 auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;

  input {
    padding: 6px 12px;
    width: 280px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    &:focus {
      border: 1px solid var(--main-color);
      outline: 1px solid var(--main-color);
    }
  }

  button {
    width: 80px;
    height: 36px;
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

function InputPayment({ onCreate }, ref) {
  const [activ, setActiv] = useState(true);
  const handleActiv = () => {
    if (ref.itemRef.current.value && ref.priceRef.current.value) {
      setActiv(false);
    } else {
      setActiv(true);
    }
  };
  const MAX_LENGTH = 18;

  return (
    <InputContainer>
      <input
        ref={ref.itemRef}
        type="text"
        placeholder="항목을 입력하세요."
        onChange={handleActiv}
        maxLength={MAX_LENGTH}
      />
      <input
        ref={ref.priceRef}
        type="number"
        placeholder="금액을 입력하세요."
        onChange={handleActiv}
        maxLength={MAX_LENGTH}
      />
      <button onClick={() => onCreate(setActiv)} disabled={activ}>
        등록
      </button>
    </InputContainer>
  );
}
export default forwardRef(InputPayment);
