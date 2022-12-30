import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { InputPayment } from '../../components';
function PayPage() {
  const location = useLocation();
  const users = location.state.users;
  const payer = location.state.payer;
  console.log('user', users);
  console.log('payer', payer);

  return (
    <>
      <InputPayment></InputPayment>
      <Link to="/result">다음</Link>
    </>
  );
}

export default PayPage;
