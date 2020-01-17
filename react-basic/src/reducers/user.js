function user(state = { users: [], loading: false }, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, loading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
}

export default user;
