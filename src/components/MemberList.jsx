import React from 'react';
import { MemberItem } from './index.js';

export default function MemberList({ memberList, payer }) {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.tagName);
  };
  return (
    <>
      <form>
        {memberList.map((el, index) => (
          <MemberItem key={index} value={el} onClick={handleClick} checked={index === payer} />
        ))}
      </form>
      <button type="button">추가</button>
    </>
  );
}
