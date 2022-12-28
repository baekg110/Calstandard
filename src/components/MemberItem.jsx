import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const FieldCont = styled.fieldset`
  margin: 6px 12px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background-color: white;
`;

const InputCont = styled.input`
  font-size: 18px;
  width: 100%;
  border: none;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  word-break: keep-all;
  white-space: nowrap;

  button {
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
`;

const handleDelete = () => {
  if (window.confirm('삭제하시겠습니까?')) {
    return <></>;
  } else {
  }
};

export default function MemberForm({ value, setValue, checked, onClick }) {
  const nameRef = useRef();

  const handleInput = () => {
    console.log(nameRef.current.value);
    setValue();
  };
  return (
    <FieldCont onClick={onClick}>
      <label htmlFor="memberName" className="ir">
        구성원 입력
      </label>
      <InputCont
        ref={nameRef}
        type="text"
        defaultValue={value}
        id="memberName"
        placeholder="구성원 이름을 입력하세요."
        onChange={handleInput}
      />

      <Buttons>
        <label>
          {/* <img src="#" alt="총무 선택" /> */}
          총무
          <input type="radio" name="payer" checked={checked} onChange={() => setValue(value)} />
        </label>

        <button type="button">저장</button>
        <button type="button">
          <AiOutlineClose alt="취소" />
        </button>
      </Buttons>
    </FieldCont>
  );
}
