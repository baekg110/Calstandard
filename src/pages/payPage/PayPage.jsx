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

  const onCreate = () => {
    const pay = {
      id: nextId.current,
      name: itemRef.current.value,
      price: priceRef.current.value,
      users: [...users],
    };
    setPays([...pays, pay]);
    nextId.current += 1;
    itemRef.current.value = '';
    priceRef.current.value = '';
  };

  const onRemove = (id) => {
    setPays(pays.filter((pay) => pay.id !== id));
  };

  const handleTest = () => {
    console.log(pays);
  };

  return (
    <Container>
      <InputPayment onCreate={onCreate} ref={ref} />
      <PaymentList pays={pays} setPays={setPays} onRemove={onRemove} />
      <Link to="/result" state={{ users: users.map((user) => user.name), payer: payer, pays: pays }}>
        다음
      </Link>
    </Container>
  );
}

export default PayPage;
