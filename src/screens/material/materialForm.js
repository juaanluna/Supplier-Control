import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  StatusBar,
  DevSettings,
} from "react-native";
import AuthInput from "../../components/AuthInput";
import { materialRegister } from "../../store/materials/material.action";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const CadastrarItem = () => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [detalhes, setDetalhes] = useState("");

  const { navigate } = useNavigation();

  const categorias = [
    { id: 1, nome: "Escolha..." },
    { id: 1, nome: "Material de aula", value: "material" },
    { id: 2, nome: "Limpeza", value: "limpeza" },
    { id: 3, nome: "Serviços", value: "servicos" },
  ];

  const dispatch = useDispatch();

  const register = useCallback(() => {
    const values = { nome, categoria, detalhes };
    dispatch(materialRegister(values));
  }, [dispatch, nome, categoria, detalhes]);

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />
      <View>
        <Text style={styles.label}>Nome</Text>
        <AuthInput
          style={styles.input}
          placeholder="Nome do Item"
          onChange={(text) => {setNome(text)}}
          maxLength={30}
        />
      </View>
      <View>
        <Text style={styles.label}>Categoria</Text>

        <View style={styles.picker}>
          <Picker
            selectedValue={categoria}
            onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
          >
            {categorias.map((item) => {
              return <Picker.Item label={item.nome} value={item.value} />;
            })}
          </Picker>
        </View>
      </View>
      <View>
        <Text style={styles.label}>Detalhes</Text>
        <AuthInput
          style={styles.inputArea}
          placeholder="Detalhes"
          onChange={(text) => setDetalhes(text)}
          multiline={true}
          numberOfLine={4}
          maxLength={50}
        />
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#444",
    fontSize: 25,
    marginBottom: 20,
  },
  button: {
    top: 180,
    backgroundColor: "#b20",
    width: 400,
    height: 50,
    marginTop: 10,
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  textButton: {
    color: "#fff",
    fontSize: 23,
    alignSelf: "center",
  },
  label: {
    marginTop: 15,
    color: "#fff",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 10,
    color: "#444",
  },
  background: {
    backgroundColor: "#AAAA",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  input: {
    marginBottom: 10,
    // margin: 5,
    width: "95%",
    backgroundColor: "#F2F2F2",
    borderRadius: 13,
  },
  inputArea: {
    height: 150,
    margin: 5,
    width: "95%",
    padding: 5,
    alignItems: "flex-start",
  },
  picker: {
    marginBottom: 20,
    height: 50,
    width: 399,
    borderRadius: 13,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
});

export default CadastrarItem;
