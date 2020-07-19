import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AuthInput from "../../components/AuthInput";
import BackgroudImage from "../../../assets/imgs/login.jpg";
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const { navigate } = useNavigation();

  return (
    <ImageBackground source={BackgroudImage} style={styles.background}>
      <View style={styles.viewEstilo}>
        <Text style={styles.subtitle}>Usuário</Text>
        <AuthInput style={styles.input} placeholder="Nome" />

        <Text style={styles.subtitle}>Senha</Text>
        <AuthInput style={styles.input} placeholder="Senha" />

        <TouchableOpacity style={styles.buttons} onPress={() => navigate('Home')}>
          <View>
            <Text style={styles.textButton}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttons: {
    alignItems: "center",
    backgroundColor: "#32a852",
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewEstilo: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 20
  },
});
export default Auth;

// Conversa aqui:
