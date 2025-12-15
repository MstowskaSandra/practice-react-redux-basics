import React from 'react';
import { useDispatch } from "react-redux";
import { removeUserAction } from "../actions/users";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeUserAction({ id: user.id }));
  };

  return (
    <li>
      {user.name} <button onClick={handleRemove}>usuń</button>
    </li>
  );
};

export default UserItem;