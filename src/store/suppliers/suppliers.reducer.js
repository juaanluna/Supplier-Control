const INITIAL_STATE = {
  list: [],
  associateList: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SUPPLIER_GET":
      return { ...state, list: action.payload };
    case "SUPPLIER_REGISTER":
      return { ...state, list: action.payload };
    case "SUPPLIER_ASSOCIATE_LIST":
      return { ...state, associateList: action.payload };
    case "SUPPLIER_ASSOCIATE":
      return { ...state, associateList: action.payload };
    default:
      return state;
  }
};
