import React, { useState, useCallback, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { materialType, deleteMaterial } from "../../store/materials/material.action";

const MaterialList = ({ route }) => {
  const { type } = route.params;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(materialType());
  }, [dispatch]);

  const materials = useSelector((state) => state.materials.list || []);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  const { navigate } = useNavigation();

  const setInModal = useCallback((value) => {
    setOpenModal(true);
    setId(value.id);
    setTitle(value.nome);
    setDetails(value.detalhes);
    setCategory(value.categoria);
  }, []);

  const destroy = useCallback(() => {
    dispatch(deleteMaterial(id));
  }, [dispatch, id]);

  const B = (props) => (
    <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />
      <Modal
        id={id}
        isVisible={openModal}
        textHeader={title}
        onCancel={() => setOpenModal(false)}
        deleteItem={destroy}
      >
        <Text style={styles.listModal}><B>Código do produto: </B> {id} </Text>
        <Text style={styles.listModal}><B>Nome: </B> {title} </Text>
        <Text style={styles.listModal}><B>Categoria: </B> {category} </Text>
        <Text style={styles.listModal}><B>Descrição: </B> {details} </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setOpenModal(false);
            navigate("SupplierList", { id: id });
          }}
        >
          <Text style={styles.buttonTitle}>Ver fornecedores</Text>
        </TouchableOpacity>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Nome do item</Text>
      </View>
      <ScrollView style={styles.main}>
        {materials.map((material) => {
          if (material.item_categoria !== type) return null;
          const values = {
            categoria: material.item_categoria,
            nome: material.item_nome,
            detalhes: material.item_detalhes,
            id: material.item_codigo,
          };
          return (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => setInModal(values)}
            >
              <Text style={styles.listTitle}>{material.item_nome}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.bbar}
        onPress={() => navigate("MaterialForm")}
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
  },
  headerSubtitle: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  listTitle: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: "#AAA",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonTitle: {
    margin: 20,
    marginRight: 30,
    color: "#B20",
    fontSize: 20,
  },
  listModal: {
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: "#AAA",
    justifyContent: "center",
    alignItems:'center',
    flexDirection: "column",
    textAlign:'center'
    
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

export default MaterialList;
