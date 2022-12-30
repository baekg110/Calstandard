import React, { forwardRef } from 'react';
import styled from 'styled-components';

const AccountContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  label {
    width: fit-content;
  }

  input {
    width: 200px;
    height: 30px;
    margin-left: 6px;
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
  }
`;
function InputAccount({ onChange }, ref) {
  return (
    <AccountContainer>
      <label>
        은행 정보
        <input ref={ref.bankRef} onChange={onChange} />
      </label>
      <label>
        계좌 번호
        <input ref={ref.accRef} onChange={onChange} />
      </label>
    </AccountContainer>
  );
}

export default forwardRef(InputAccount);
