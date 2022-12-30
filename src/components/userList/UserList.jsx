import React from 'react';

function User({ user, onRemove, payer, setPayer }) {
  const handlePayer = () => {
    setPayer(user.id);
  };
  return (
    <div>
      {user.name}
      <input type="radio" name="payer" defaultChecked={user.id === payer} onClick={handlePayer} />
      <button onClick={() => onRemove(user.id)} disabled={user.id === payer}>
        삭제
      </button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle, payer, setPayer }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} payer={payer} setPayer={setPayer} />
      ))}
    </div>
  );
}

export default UserList;
