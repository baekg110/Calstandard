import React from 'react';
function Pay({ pay }) {
  return (
    <div>
      <b>{pay.key}</b>
      {/* {pay.users.map((user) => (
        ))}
         */}
      <div>
        <button>전체선택/해제</button>
        {pay.users.map((user) => (
          <button key={`${pay.id}+${user.id}`} type="button">
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PaymentList({ pays, onRemove }) {
  return (
    <div>
      {pays.map((pay) => (
        <Pay key={pay.id} pay={pay} />
      ))}
    </div>
  );
}
