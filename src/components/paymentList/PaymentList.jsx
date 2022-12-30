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
  padding: 12px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  width: 100%;
  /* padding-bottom: 6px~; */
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

function Pay({ pay, onRemove, pays, setPays, onClick }) {
  return (
    <ItemContainer>
      <InfoContainer>
        <strong>{pay.name}</strong>
        <p>{pay.price}원</p>
        <button onClick={() => onRemove(pay.id)}>
          <SlClose alt="삭제" />
        </button>
      </InfoContainer>
      {/* <ButtonContainer>
        <button type="button">전체선택/해제</button>
        <Buttons>
          {pay.users.map((user, index) => (
            <MemberButton key={`${pay.id}${index}`} user={user} users={pay.users} />
          ))}
        </Buttons>
      </ButtonContainer> */}
    </ItemContainer>
  );
}

function MemberButton({ user, users, onClick }) {
  // users 사용자 정보
  // onClick이 일어나면 스타일링 토글
  // push, pop 진행 -> newUsers
  // user 업데이트
  // user인 인덱스를 가져와

  return (
    <Button type="button" activ={users.includes(user)} disabled={users.includes(user)} onClick={onClick}>
      {user}
    </Button>
  );
}

export default function PaymentList({ pays, setPays, onRemove }) {
  return (
    <ListContainer>
      {pays.map((pay) => (
        <Pay key={pay.id} pay={pay} onRemove={onRemove} pays={pays} setPays={setPays} />
      ))}
    </ListContainer>
  );
}
