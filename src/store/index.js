import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";
import auth from "./auth/auth.reducer";
import materials from "./materials/material.reducer";
import suppliers from "./suppliers/suppliers.reducer";

const reducers = combineReducers({
  auth,
  materials,
  suppliers,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
