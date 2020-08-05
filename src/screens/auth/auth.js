import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AuthInput from "../../components/AuthInput";
import backgroundImage from "../../../assets/imgs/imageBackground.jpg";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const Auth = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const { navigate } = useNavigation();

  // Comentário

  return (
    <> 
    <StatusBar backgroundColor="#202125" barStyle="light-content" />
    <ImageBackground source={backgroundImage} style={styles.background}>
      <Text style={styles.title}>SUPPLIER CONTROL</Text>
      <View style={styles.viewEstilo}>
        <View style={styles.inputContainer}>
          <AuthInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#233245"
          />
          <AuthInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#233245"
          />

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 40,
    marginBottom: 30,
  },
  buttons: {
    alignItems: "center",
    backgroundColor: "#B20000",
    padding: 20,
    borderRadius: 20,
    margin: 10,
    width: "90%",
  },

  background: {
    backgroundColor: "#233245",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "100%",
    backgroundColor: "#AAA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  viewEstilo: {
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    width: "90%",
  },
  input: {
    margin: 10,
    width: "90%",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
});
export default Auth;

// Conversa aqui:
