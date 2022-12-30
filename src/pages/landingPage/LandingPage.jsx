import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputUser from '../../components/inputUser/InputUser';
import { Container, Header } from '../../components/layout/Layout';
import UserList from '../../components/userList/UserList';

function LandingPage() {
  const [users, setUsers] = useState([]);
  const [payer, setPayer] = useState(0);
  const nameRef = useRef();
  const nextId = useRef(0);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      name: nameRef.current.value,
    };
    setUsers([...users, user]);

    nextId.current += 1;
    nameRef.current.value = '';
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container>
      <Header>
        <h2>오늘의 정산</h2>
        <p>정산에 참여할 구성원을 입력해주세요.</p>
      </Header>
      <InputUser onCreate={onCreate} ref={nameRef} />
      <UserList users={users} onRemove={onRemove} payer={payer} setPayer={setPayer} />
      <Link to="/pay" state={{ users: users, payer: payer }}>
        다음
      </Link>
    </Container>
  );
}

export default LandingPage;
