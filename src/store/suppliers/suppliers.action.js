import axios from "axios";
import { baseURL } from "../../config";

export const getFunction = (value) => {
  return {
    type: "SUPPLIER_GET",
    payload: value,
  };
};

export const AssociateList = (value) => {
  return {
    type: "SUPPLIER_ASSOCIATE_LIST",
    payload: value,
  };
};

export const getSupplier = () => {
  return (dispatch) => {
    axios.get(`${baseURL}/fornecedores`)
      .then((resp) => {
        const action = getFunction(resp.data);
        dispatch(action);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

export const supplierRegister = (value) => {
  return (dispatch) => {
    axios.post(`${baseURL}/fornecedores`, value)
      .then((resp) => {
        dispatch(getSupplier());
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

export const supplierAssociateList = (value) => {
  return (dispatch) => {
    axios.post(`${baseURL}/for-itens-get`, value)
      .then((resp) => {
        const action = AssociateList(resp.data);
        dispatch(action);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

export const associateSupplier = (values) => {
  return (dispatch) => {
    axios.post(`${baseURL}/for-itens`, values)
      .then((resp) => {
        dispatch(supplierAssociateList(values));
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

export const deleteSupplier = (values) => {
  const {fornecedor, material} = values
  return (dispatch) => {
    axios.delete(`${baseURL}/for-itens/${material}/${fornecedor}`)
      .then((resp) => {
        dispatch(supplierAssociateList(values));
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};
