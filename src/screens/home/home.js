import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "react-native";
import { materialType } from "../../store/materials/material.action";
import { useDispatch } from "react-redux";

const Home = () => {
  const { navigate } = useNavigation();

  const dispatch = useDispatch();

   useEffect(() => {
      dispatch(materialType());
    },
    [dispatch]
  );
 
  return (
    <View style={{ flex: 1, backgroundColor: "#e6e6e6" }}>
      <StatusBar backgroundColor="#e6e6e6" barStyle="dark-content" />

      <View style={styles.titleCategories}>
        <Text style={styles.title}>Categorias</Text>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("MaterialList",{type:'material'})}
        >
          <Icon name="book" size={50} color="#fff" />
          <Text style={styles.text}>
            Materiais de Aula
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("MaterialList", {type:'limpeza'})}
        >
          <Icon name="broom" size={50} color="#fff" />
          <Text style={styles.text}>
            Limpeza
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("MaterialList", {type:'servicos'})}
        >
          <Icon name="wrench" size={50} color="#fff" />
          <Text style={styles.text}>
            Serviços
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleTools}>
        <Text style={styles.title}>Cadastrar</Text>
      </View>

      <View style={styles.toolsContainer}>
        <TouchableOpacity
          style={styles.tools}
          onPress={() => navigate("MaterialForm")}
        >
          <Text style={styles.toolsText}>Material</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tools}
          onPress={() => navigate("SupplierForm")}
        >
          <Text style={styles.toolsText}>Fornecedor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleCategories: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
  categories: {
    top: "4%",
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  text: {
    justifyContent: "center",
    color: "#ffff",
    paddingLeft: 20,
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#B20",
    borderRadius: 40,
    padding: 30,
    width: "90%",
    margin: 10,
  },
  titleTools: {
    bottom: 80,
    marginTop: 30,
    alignItems: "center",
  },
  toolsContainer: {
    bottom: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tools: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#B20",
    borderRadius: 20,
    paddingVertical: 30,
    width: "40%",
    margin: 15,
  },
  toolsText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#ffff",
    fontSize: 25,
  },
});

export default Home;
