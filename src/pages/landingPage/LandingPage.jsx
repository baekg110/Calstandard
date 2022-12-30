import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InputUser, UserList } from '../../components';

function LandingPage() {
  const [users, setUsers] = useState([]);
  const [payer, setPayer] = useState(0);
  const nameRef = useRef();
  const nextId = useRef(0);
  const navigate = useNavigate();

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
    <>
      <p>{payer}</p>
      <InputUser onCreate={onCreate} ref={nameRef} />
      <UserList users={users} onRemove={onRemove} payer={payer} setPayer={setPayer} />
      <Link to="/pay" state={{ users: users, payer: payer }}>
        다음
      </Link>
    </>
  );
}

export default LandingPage;
