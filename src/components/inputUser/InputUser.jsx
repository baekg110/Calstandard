import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Button } from '../../components';

function InputUser({ onCreate }, ref) {
  return (
    <div>
      <input ref={ref} placeholder="구성원을 입력하세요" required />
      <Button onClick={onCreate}>등록</Button>
    </div>
  );
}

export default forwardRef(InputUser);
