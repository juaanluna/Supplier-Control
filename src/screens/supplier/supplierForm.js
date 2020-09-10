import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { TextInputMask } from "react-native-masked-text";
import { useDispatch } from "react-redux";
import { supplierRegister } from "../../store/suppliers/suppliers.action";

const SupplierForm = () => {
  const [cnpj, setCnpj] = useState("00.322.251/0001-92");
  const [razaoSocial, setSocial] = useState("juanzito");
  const [phone, setPhone] = useState("959964412");
  const [celphone, setCelphone] = useState("959964412");
  const [email, setEmail] = useState("juaanluna@gmail.com");
  const [adress, setAdress] = useState("Rua do juan");
  const { navigate } = useNavigation();
  

  const dispatch = useDispatch();

  const register = useCallback(() => {
    const values = { cnpj, razaoSocial, phone, celphone, email, adress };
    dispatch(supplierRegister(values));
  }, [dispatch, cnpj, razaoSocial, phone, celphone, email, adress]);
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.text}>CNPJ</Text>
        <TextInputMask
          type={"cnpj"}
          value={cnpj}
          onChangeText={(text) => {
            setCnpj(text);
          }}
          style={styles.input}
          placeholder="Ex: 99.999.999/9999-99"
        />

        <Text style={styles.text}>Razão Social</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setSocial(text);
          }}
          placeholder="Ex: Mega Sistemas"
        />

        <Text style={styles.text}>Telefone</Text>
        <TextInputMask
          type={"cel-phone"}
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
          style={styles.input}
          placeholder="Ex: (99) 9999-9999"
        />

        <Text style={styles.text}>Celular</Text>
        <TextInputMask
          type={"cel-phone"}
          value={celphone}
          onChangeText={(text) => {
            setCelphone(text);
          }}
          style={styles.input}
          placeholder="Ex: (99) 99999-9999"
        />

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder="Ex: contato@megasistemas.com.br"
        />

        <Text style={styles.text}>Endereço</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setAdress(text);
          }}
          placeholder="Ex: Rua das cravinas, 168, Itu - SP"
        />

        <TouchableOpacity onPress={register} style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
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
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#AAAA",
    padding: 10,
  },

  text: {
    color: "#fff",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#444",
  },

  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 13,
    padding: 10,
  },

  button: {
    backgroundColor: "#b20",
    width: "90%",
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

  titulo: {
    fontSize: 25,
    color: "#fff",
    marginBottom: 15,
  },
});

export default SupplierForm;
