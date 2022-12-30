import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputPayment, PaymentList } from '../../components';
import { Container, Header } from '../../components/layout/Layout';

function PayPage() {
  const location = useLocation();
  const users = location.state.users.map((user) => user.name);
  const payer = location.state.payer;
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
      price: priceRef.current.value,
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

  return (
    <Container>
      <Header>
        <h2>정산 항목</h2>
        <p>
          항목과 금액을 입력하고
          <br /> 정산에 참여할 구성원을 선택해주세요.
        </p>
      </Header>
      <InputPayment onCreate={onCreate} ref={ref} />
      <PaymentList pays={pays} setPays={setPays} onRemove={onRemove} />
      <Link to="/result" state={{ users: users, payer: payer, pays: pays }}>
        다음
      </Link>
    </Container>
  );
}

export default PayPage;
