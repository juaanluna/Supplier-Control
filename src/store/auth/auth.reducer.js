const INITIAL_STATE = {
  isAuth: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH":
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};
