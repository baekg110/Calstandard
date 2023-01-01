import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputUser from '../../components/inputUser/InputUser';
import { Container, Header, LinkContainer } from '../../components/layout/Layout';
import UserList from '../../components/userList/UserList';

function LandingPage() {
  const [users, setUsers] = useState([]);
  const [payer, setPayer] = useState(0);
  const nameRef = useRef();
  const nextId = useRef(0);
  const navigate = useNavigate();

  const onCreate = (setActiv) => {
    if (users.filter((user) => user.name === nameRef.current.value).length) {
      alert('중복된 이름을 사용할 수 없습니다');
    } else {
      const user = {
        id: nextId.current,
        name: nameRef.current.value,
      };

      nextId.current += 1;
      nameRef.current.value = '';
      setActiv(true);
      setUsers([...users, user]);
    }
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const navigateCheck = () => {
    if (users.length) {
      navigate(`${process.env.PUBLIC_URL}/pay`, { state: { users: users, payer: payer } });
    } else {
      alert('구성원 정보를 입력하세요.');
    }
  };

  return (
    <Container>
      <Header>
        <h2>정산의 정석</h2>
        <p>정산에 참여할 구성원을 입력해주세요.</p>
      </Header>
      <InputUser onCreate={onCreate} ref={nameRef} />
      <UserList users={users} onRemove={onRemove} payer={payer} setPayer={setPayer} />
      <LinkContainer onClick={navigateCheck} active={users.length}>
        다음
      </LinkContainer>
    </Container>
  );
}

export default LandingPage;
