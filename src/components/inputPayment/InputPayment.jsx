import React, { forwardRef } from 'react';

function InputPayment({ onCreate }, ref) {
  return (
    <div>
      <input ref={ref.itemRef} type="text" placeholder="항목을 입력하세요." required />
      <input ref={ref.priceRef} type="number" placeholder="금액을 입력하세요." required />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default forwardRef(InputPayment);
