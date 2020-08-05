import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "react-native";

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#F2F2F2" barStyle="dark-content" />
      <View>
        <Text>
          Selecione uma categoria
        </Text>
      </View>
      
      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("MaterialList")}
        >
          <Icon name="book" size={40} color="#fff" />
          <Text style={styles.text}>Materiais de Aula</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="broom" size={40} color="#fff" />
          <Text style={styles.text}>Limpeza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="shield-alt" size={40} color="#fff" />
          <Text style={styles.text}>Segurança</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Icon name="laptop" size={40} color="#fff" />
          <Text style={styles.text}>Informática</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  categories: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
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
    backgroundColor: "#B20000",
    borderRadius: 20,
    padding: 30,
    width: "80%",
    margin: 20,
  },
});

export default Home;
