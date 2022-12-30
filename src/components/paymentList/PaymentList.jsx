import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  ${(props) =>
    props.activ &&
    css`
      background-color: yellow;
    `}
`;

function Pay({ pay, onRemove, pays, setPays, onClick }) {
  return (
    <div>
      <p>{pay.name}</p>
      <p>{pay.price}</p>
      <div>
        <button type="button">전체선택/해제</button>
        {pay.users.map((user, index) => (
          <MemberButton key={`${pay.id}${index}`} user={user} users={pay.users} />
        ))}
        <button onClick={() => onRemove(pay.id)}>삭제</button>
      </div>
    </div>
  );
}

function MemberButton({ user, users, onClick }) {
  return (
    <Button type="button" activ={users.includes(user)} disabled={users.includes(user)} onClick={onClick}>
      {user}
    </Button>
  );
}

export default function PaymentList({ pays, setPays, onRemove }) {
  console.log(pays);

  const onClick = (index) => {};

  return (
    <div>
      {pays.map((pay) => (
        <Pay key={pay.id} pay={pay} onRemove={onRemove} pays={pays} setPays={setPays} onClick={onClick} />
      ))}
    </div>
  );
}
