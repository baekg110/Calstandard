import React from 'react';
import styled, { css } from 'styled-components';
import { SlClose } from 'react-icons/sl';

const ListContainer = styled.ul`
  padding: 12px 24px 62px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ItemContainer = styled.li`
  width: 320px;
  border: 1px solid #ccc;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 16px;
  strong {
    font-weight: 500;
    margin-right: auto;
  }

  button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid var(--border-color);

  label {
    margin-top: 12px;
  }
`;

const ToggleCheck = styled.input`
  outline: 1px solid red;

  &:checked {
    /* background-color: var(--main-color); */
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 30px;
  padding: 2px 12px;

  ${(props) =>
    props.activ &&
    css`
      border: 2px solid var(--main-color);
    `}
`;

const MemberButton = styled.button`
  outline: 3px solid blue;

  ${(props) => {
    props.joinmember &&
      css`
        outline: 3px solid yellow;
      `;
  }}
`;

function Pay({ pay, onRemove, index, pays, setPays, users }) {
  const onClick = (e) => {
    console.log(index);
    // console.log(pay.id);
    // console.log(e.target.textContent);

    // console.log(pays[idx].users);
    // const newPay = { ...pays[idx], users: newUser };
    // const udPay = [...pays[idx],users:]
    const username = e.target.textContent;
    let newuser;
    console.log(pay.users);
    if (pay.users.includes(username)) {
      newuser = pay.users.filter((user) => user !== username);
    } else {
      newuser = pay.users.concat([username]);
    }
    const newpay = { ...pay, users: newuser };
    const copyPays = [...pays];
    copyPays[index] = newpay;
    console.log(copyPays);
    setPays(copyPays);
  };

  const toggleMember = () => {
    if (pay.users) console.log(pay.users);
  };

  const joinCheck = (user) => {
    console.log(user);
  };

  return (
    <ItemContainer>
      <InfoContainer>
        <strong>{pay.name}</strong>
        <p>{pay.price}원</p>
        <button onClick={() => onRemove(pay.id)}>
          <SlClose alt="삭제" />
        </button>
      </InfoContainer>
      <ButtonContainer>
        <label>
          <ToggleCheck type="checkbox" onClick={toggleMember} /> 전체선택/해제
        </label>

        <Buttons>
          {users.map((user, index) => (
            <MemberButton
              key={`${pay.id}${index}`}
              user={user}
              users={pay.users}
              onClick={(e) => {
                onClick(e);
                joinCheck();
              }}
              // joinmember={pay.users.includes(user)}
            >
              {user}
            </MemberButton>
          ))}
        </Buttons>
      </ButtonContainer>
    </ItemContainer>
  );
}

export default function PaymentList({ users, pays, setPays, onRemove }) {
  return (
    <ListContainer>
      {pays.map((pay, index) => (
        <Pay key={pay.id} pay={pay} index={index} onRemove={onRemove} pays={pays} setPays={setPays} users={users} />
      ))}
    </ListContainer>
  );
}
