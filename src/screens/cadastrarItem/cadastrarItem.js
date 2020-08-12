import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Picker, StatusBar } from "react-native";
import AuthInput from "../../components/AuthInput";

const CadastrarItem = () => {

  const [nome, setNome] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = [
   { id: 1, nome:  "Categoria 1" },
   { id: 2, nome:  "Categoria 2" },
   { id: 3, nome:  "Categoria 3" },
   { id: 4, nome:  "Categoria 4" },
   { id: 5, nome:  "Categoria 5" },
  ];

  const Cadastrar = () => {
    console.log(nome);
    console.log(detalhes.trim());
    console.log(categoria);
  }

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />
      {/* <Text style={styles.title}>Cadastrar Item</Text> */}

      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Nome</Text>
          <AuthInput style={styles.input}
            placeholder="Nome do Item"
            placeholderTextColor="#233245"
            onChangeText={text => setNome(text)}
            maxLength={30}
          />
        </View>
        <View>
          <Text style={styles.label}>Categoria</Text>
          {/* <AuthInput style={styles.input}
            placeholder="Categoria"
            placeholderTextColor="#233245"
            onChangeText={text => setCategoria(text)}
            maxLength={30}
          /> */}
          <View style={styles.picker}>
            <Picker selectedValue={categoria}
              onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>
              {categorias.map(item => {
                return (
                  <Picker.Item key={item.id} label={item.nome} value={item.nome} />
                );
              }
              )}
            </Picker>
          </View>
        </View>
        <View>
          <Text style={styles.label}>Detalhes</Text>
          <AuthInput style={styles.inputArea}
            placeholder="Detalhes"
            placeholderTextColor="#233245"
            onChangeText={text => setDetalhes(text.trim())}
            multiline={true}
            numberOfLine={4}
            maxLength={50}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.buttons} onPress={Cadastrar}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 25,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#5A6978",
    padding: 10,
  },  
  buttons: {
    alignItems: "center",
    backgroundColor: "#B20000",
    padding: 20,
    borderRadius: 20,
    margin: 10,
    width: "90%",
  },
  label: {
    margin: 10,
    color: "#fff"
  },
  background: {
    backgroundColor: "#F95F62",
    flex: 1,
    width: "100%",
    alignItems: "center"
  },
  input: {
    margin: 5,
    width: "90%",
    backgroundColor: "#F2F2F2",
  },
  inputArea: {
    height: 150,
    margin: 5,
    width: "90%",
    padding: 5,
    alignItems: "flex-start"
  },
  picker: {
    height: 50,
    width: 280,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  }
});

export default CadastrarItem;