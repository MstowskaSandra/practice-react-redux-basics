import React from 'react';
import { useDispatch } from "react-redux";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch({ type: "removeUser", payload: { id: user.id } });
  };

  return (
    <li>
      {user.name} <button onClick={handleRemove}>usuń</button>
    </li>
  );
};

export default UserItem;