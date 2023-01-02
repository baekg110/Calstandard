import React, { useRef } from 'react';
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
    font-weight: 400;
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
  accent-color: var(--main-color);
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const MemberButton = styled.button`
  background-color: #fff;
  border-radius: 50px;
  padding: 0 8px;
  cursor: pointer;
  border: 3px solid var(--border-color);

  ${(props) =>
    props.joinmember &&
    css`
      border: 3px solid var(--main-color);
    `}
`;

function Pay({ pay, onRemove, index, pays, setPays, users }) {
  const toggleRef = useRef();

  const onClick = (e) => {
    const username = e.target.textContent;
    let newuser;
    if (pay.users.includes(username)) {
      newuser = pay.users.filter((user) => user !== username);
    } else {
      newuser = pay.users.concat([username]);
    }

    if (newuser.length === users.length) {
      toggleRef.current.checked = true;
    } else {
      toggleRef.current.checked = false;
    }
    const newpay = { ...pay, users: newuser };
    const copyPays = [...pays];
    copyPays[index] = newpay;
    setPays(copyPays);
  };

  const toggleMember = (e) => {
    let newuser;
    if (e.target.checked) {
      // 전체 선택
      newuser = users;
    } else {
      newuser = [];
    }

    const newpay = { ...pay, users: newuser };
    const copyPays = [...pays];
    copyPays[index] = newpay;
    setPays(copyPays);
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
          <ToggleCheck type="checkbox" onClick={(e) => toggleMember(e)} defaultChecked ref={toggleRef} />
          전체선택/해제
        </label>

        <Buttons>
          {users.map((user, index) => (
            <MemberButton
              key={`${pay.id}${index}`}
              user={user}
              users={pay.users}
              onClick={(e) => {
                onClick(e);
              }}
              joinmember={pay.users.includes(user)}
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
