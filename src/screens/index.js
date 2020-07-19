import React, { useState, useCallback, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";

const index = () => {

  const [name, SetName] = useState("");
  const [nameDefault, setNameDefault] = useState("José");

  const mudarTexto = useCallback(() => {
    setNameDefault(name);
  }, [name]);

  useEffect(() => {
    SetName("");
  }, []);

  console.log("nome padrao:", nameDefault);
  console.log("Nome:", name);
  return (
    <View>
    
      <TextInput style={styles.text} value={nameDefault} />
     
      <Text style={styles.input}>Digite outro nome a baixo:</Text>
     
      <TextInput style={styles.text} onChangeText={SetName} />
     
      <TouchableOpacity onPress={() => mudarTexto()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Mudar texto</Text>
        </View>
      </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 50,
    fontSize: 40,
  },
  input: {
    height: 50,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#080",
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default index;