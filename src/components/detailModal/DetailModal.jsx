import React from 'react';

export default function DetailModal({ user, pays }) {
  console.log(pays);
  return (
    <div>
      <strong>{user} 상세 내역</strong>
      <ul>
        {pays &&
          pays.map((pay, index) => (
            <li key={index}>
              <p>{pay.name}</p>
              <p>
                {pay.price}/{pay.member}
              </p>
              <p>{pay.priceper}</p>
            </li>
          ))}
      </ul>
      <p>{pays.map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}</p>
    </div>
  );
}
