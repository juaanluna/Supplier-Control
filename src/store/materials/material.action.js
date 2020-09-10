import axios from "axios";
import { baseURL } from "../../config";

export const getFunction = (value) => {
  return {
    type: "MATERIAL_GET",
    payload: value,
  };
};


export const materialType = () => {
  return (dispatch) => {
    axios
      .get(`${baseURL}/itens`)
      .then((resp) => {
        const action = getFunction(resp.data);
        dispatch(action);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

export const materialRegister = (value) => {
  return (dispatch) => {
    axios
      .post(`${baseURL}/itens`, value)
      .then((resp) => {
        dispatch(materialType());
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

export const deleteMaterial = (value) => {
  console.log("material", value);
  return (dispatch) => {
    axios
      .delete(`${baseURL}/itens/${value}`, value)
      .then((resp) => {
        dispatch(materialType());
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};
