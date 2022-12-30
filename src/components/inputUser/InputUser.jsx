import React, { forwardRef } from 'react';

function InputUser({ onCreate }, ref) {
  return (
    <div>
      <input ref={ref} placeholder="계정명" required />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default forwardRef(InputUser);
