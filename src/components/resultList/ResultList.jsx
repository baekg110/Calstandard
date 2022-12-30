import React from 'react';

export default function ResultList({ results, onClick }) {
  return (
    <>
      {results &&
        Object.keys(results).map((user, index) => (
          <li key={index}>
            <p>구성원 이름: {user}</p>
            <p>최종 금액: {results[user].map((pay) => pay.priceper).reduce((a, b) => a + b, 0)}</p>
            <button type="button" onClick={() => onClick(user)}>
              more
            </button>
          </li>
        ))}
    </>
  );
}
