const initState = {
  message: "Działa!",
  time: new Date(),
  users: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    case "addNewUser":
      const { name } = action.payload;
      const newId =
        state.users.length > 0
          ? Math.max(...state.users.map((u) => u.id)) + 1
          : 1;
      return {
        ...state,
        users: [...state.users, { id: newId, name }],
      };
    case "removeUser":
      const { id } = action.payload;
      return {
        ...state,
        users: state.users.filter((user) => user.id !== id),
      };
    case "clearUsers":
        return {
            ...state,
            users: [],
        };
    default:
      return state;
  }
};

export default reducer;
