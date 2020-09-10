import axios from "axios";
import { baseURL } from "../../config";

export const authFunction = (value) => {
  return {
    type: "AUTH",
    payload: value,
  };
};

export const authenticate = (values) => {
    return (dispatch) => {
      axios.post(`${baseURL}/usuarios/auth`, values)
        .then((resp) => {
          const action = authFunction(resp.data);
          dispatch(action);
        })
        .catch((erro) => {
          console.log(erro);
        });
    };
  };