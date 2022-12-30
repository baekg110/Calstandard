import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputPayment, PaymentList } from '../../components';

function PayPage() {
  const location = useLocation();
  const users = location.state.users;
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
      price: priceRef,
      users: [...users],
    };
    setPays([...pays, pay]);
    nextId.current += 1;
  };
  const chageJoin = () => {};
  return (
    <>
      <InputPayment onCreate={onCreate} ref={ref} />
      <PaymentList pays={pays} />
      <Link to="/result">다음</Link>
    </>
  );
}

export default PayPage;
