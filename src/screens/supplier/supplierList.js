import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Modal from "../../components/modal";
import {
  supplierAssociateList,
  deleteSupplier,
} from "../../store/suppliers/suppliers.action";
import { useDispatch, useSelector } from "react-redux";

const SupplierList = ({ route }) => {
  const { id } = route.params;
  const item_codigo = id;
  const dispatch = useDispatch();

  useEffect(() => {
    const value = { item_codigo };
    dispatch(supplierAssociateList(value));
  }, [dispatch, item_codigo]);

  const suppliers = useSelector((state) => state.suppliers.associateList);

  const [openModal, setOpenModal] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [razaoSoc, setRazaoSoc] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const { navigate } = useNavigation();

  const setInModal = useCallback((values) => {
    setOpenModal(true);
    setCodigo(values.codigo);
    setRazaoSoc(values.razaoSoc);
    setCnpj(values.cnpj);
    setEmail(values.email);
    setCelular(values.celular);
    setTelefone(values.telefone);
    setEndereco(values.endereco);
  }, []);

  const B = (props) => (
    <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
  );

  const destroy = useCallback(() => {
    const value = { material: item_codigo, fornecedor: codigo };
    dispatch(deleteSupplier(value));
  }, [dispatch, item_codigo, codigo]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />

      <Modal
        isVisible={openModal}
        textHeader={razaoSoc}
        onCancel={() => setOpenModal(false)}
        deleteItem={destroy}
      >
        <Text style={styles.listModal}>
          <B>Código do fornecedor: </B> {codigo}{" "}
        </Text>
        <Text style={styles.listModal}>
          <B>Razão social: </B> {razaoSoc}{" "}
        </Text>
        <Text style={styles.listModal}>
          <B>CNPJ: </B>
          {cnpj}
        </Text>
        <Text style={styles.listModal}>
          <B>E-mail: </B>
          {email}
        </Text>
        <Text style={styles.listModal}>
          <B>Celular: </B>
          {celular}
        </Text>
        <Text style={styles.listModal}>
          <B>Telefone: </B>
          {telefone}
        </Text>
        <Text style={styles.listModal}>
          <B>Endereço: </B>
          {endereco}
        </Text>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Nome</Text>
        <Text style={styles.headerSubtitle}>Telefone</Text>
      </View>

      <ScrollView style={styles.main}>
        {suppliers.map((supplier) => {
          const values = {
            codigo: supplier.for_codigo,
            razaoSoc: supplier.for_razaoSoc,
            cnpj: supplier.for_cnpj,
            email: supplier.for_email,
            celular: supplier.for_celular,
            telefone: supplier.for_telefone,
            endereco: supplier.for_endereco,
          };
          return (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => setInModal(values)}
            >
              <Text style={styles.listTitle}>{supplier.for_razaoSoc}</Text>
              <Text style={styles.listTitle}>{supplier.for_telefone}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.bbar}
        onPress={() => navigate("Associate", { id: item_codigo })}
      >
        <Image
          style={styles.img}
          source={require("../../../assets/imgs/plus.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#AAA",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerSubtitle: {
    marginHorizontal: 30,
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listTitle: {
    fontSize: 20,
    marginRight: 30,
    marginLeft: 30,
    alignItems: "center",
  },
  listContainer: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: "#AAA",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  listModal: {
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: "#AAA",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  buttonTitle: {
    margin: 20,
    marginRight: 30,
    color: "#B20",
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
  },
  bbar: {
    backgroundColor: "#b20",
    borderRadius: 30,
    width: 50,
    height: 50,
    margin: 20,
    alignSelf: "flex-end",
  },
  img: {
    marginTop: 10,
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
  },
});

export default SupplierList;
