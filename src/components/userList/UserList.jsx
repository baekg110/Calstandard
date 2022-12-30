import React from 'react';
import styled, { css } from 'styled-components';
import { SlClose } from 'react-icons/sl';

const ListContainer = styled.ul`
  padding: 12px 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ItemContainer = styled.li`
  width: 320px;
  height: 40px;
  /* border: 1px solid var(--border-color); */
  padding: 12px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  label {
    font-weight: 700;
    color: #ddd;
    cursor: pointer;
    ${(props) =>
      props.activ &&
      css`
        color: var(--main-color);
      `};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    object-fit: cover;

    &:disabled {
      color: #ddd;
    }
  }
`;

function User({ user, onRemove, payer, setPayer }) {
  const handlePayer = () => {
    setPayer(user.id);
  };
  return (
    <ItemContainer activ={user.id === payer}>
      {user.name}
      <div>
        <label>
          총무
          <input
            className="ir"
            id={`payer${user.id}`}
            type="radio"
            name="payer"
            defaultChecked={user.id === payer}
            onClick={handlePayer}
          />
        </label>
        <button onClick={() => onRemove(user.id)} disabled={user.id === payer}>
          <SlClose alt="삭제" />
        </button>
      </div>
    </ItemContainer>
  );
}

function UserList({ users, onRemove, onToggle, payer, setPayer }) {
  return (
    <ListContainer>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} payer={payer} setPayer={setPayer} />
      ))}
    </ListContainer>
  );
}

export default UserList;
