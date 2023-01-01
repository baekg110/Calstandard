import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { InputPayment, PaymentList } from '../../components';
import { Container, Header, LinkContainer } from '../../components/layout/Layout';

function PayPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let users = location.state.users;
  let payer = location.state.payer;
  for (const user of users) {
    if (payer === user.id) {
      payer = user.name;
      break;
    }
  }
  users = users.map((user) => user.name);

  const itemRef = useRef();
  const priceRef = useRef();
  const nextId = useRef(0);
  const ref = {
    itemRef: itemRef,
    priceRef: priceRef,
  };

  const [pays, setPays] = useState([]);

  const onCreate = (setActiv) => {
    const pay = {
      id: nextId.current,
      name: itemRef.current.value,
      price: parseInt(priceRef.current.value),
      users: [...users],
    };
    nextId.current += 1;
    itemRef.current.value = '';
    priceRef.current.value = '';
    setActiv(true);
    setPays([...pays, pay]);
  };

  const onRemove = (id) => {
    setPays(pays.filter((pay) => pay.id !== id));
  };

  const navigateCheck = () => {
    if (pays.length) {
      navigate(`${process.env.PUBLIC_URL}/result`, { state: { users: users, payer: payer, pays: pays } });
    } else {
      alert('정산 정보를 입력하세요.');
    }
  };

  return (
    <Container>
      <Header>
        <h2>정산 항목</h2>
        <p>항목과 금액을 입력하세요.</p>
        {/* <br /> 정산에 참여할 구성원을 선택해주세요.
        </p> */}
      </Header>
      <InputPayment onCreate={onCreate} ref={ref} />
      <PaymentList users={users} pays={pays} setPays={setPays} onRemove={onRemove} />
      <LinkContainer onClick={navigateCheck} active={pays.length}>
        다음
      </LinkContainer>
    </Container>
  );
}

export default PayPage;
