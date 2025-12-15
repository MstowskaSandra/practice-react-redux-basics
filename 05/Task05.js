import React from 'react';
import { useDispatch } from "react-redux";
import { removeAllUsersAction } from "../src/actions/users";

const Task05 = () => {
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(removeAllUsersAction());
  };

  return (
    <section>
      <h1>Task 5</h1>
      <button onClick={handleRemoveAll}>remove all users</button>
    </section>
  );
};

export default Task05;

