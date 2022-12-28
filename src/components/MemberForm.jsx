import React from 'react';
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

export default function MemberForm({ value, setValue, checked }) {
  return (
    <FieldCont>
      <label htmlFor="memberName" className="ir">
        구성원 입력
      </label>
      <InputCont type="text" defaultValue={value} id="memberName" />

      <Buttons>
        <label>
          {/* <img src="#" alt="총무 선택" /> */}
          총무
          <input type="radio" name="payer" checked={checked} />
        </label>
        <button type="button">
          <AiOutlineClose alt="취소" />
        </button>
      </Buttons>
    </FieldCont>
  );
}
