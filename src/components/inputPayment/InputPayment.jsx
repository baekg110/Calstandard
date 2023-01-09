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
  const handleMax = () => {
    if (ref.priceRef.current.value > MAX_LENGTH) {
      ref.priceRef.current.value = ref.priceRef.current.value.substr(0, MAX_LENGTH);
    }
  };
  const MAX_LENGTH = 7;

  const handleEnter = () => {
    if (window.event.keyCode !== 13) {
      return;
    }
    if (activ) {
    } else {
      onCreate(setActiv);
    }
  };

  return (
    <InputContainer>
      <input ref={ref.itemRef} type="text" placeholder="항목을 입력하세요." onChange={handleActiv} maxLength={10} />
      <input
        ref={ref.priceRef}
        type="number"
        min="0"
        max="9999999"
        placeholder="금액을 입력하세요."
        onChange={() => {
          handleActiv();
          handleMax();
        }}
        onKeyUp={handleEnter}
      />
      <button onClick={() => onCreate(setActiv)} disabled={activ}>
        등록
      </button>
    </InputContainer>
  );
}
export default forwardRef(InputPayment);
