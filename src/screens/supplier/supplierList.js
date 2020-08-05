import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const SupplierList = () => {
  const itens = [
    { nome: "Lapis", numFornec: 10 },
    { nome: "Apagador", numFornec: 5 },
    { nome: "Caneta", numFornec: 7 },
    { nome: "Borracha", numFornec: 3 },
    { nome: "Cola", numFornec: 2 },
    { nome: "Lapis", numFornec: 10 },
    { nome: "Apagador", numFornec: 5 },
    { nome: "Caneta", numFornec: 7 },
    { nome: "Borracha", numFornec: 3 },
    { nome: "Cola", numFornec: 2 },
    { nome: "Lapis", numFornec: 10 },
    { nome: "Apagador", numFornec: 5 },
    { nome: "Caneta", numFornec: 7 },
    { nome: "Borracha", numFornec: 3 },
    { nome: "Cola", numFornec: 2 },
    { nome: "Lapis", numFornec: 10 },
    { nome: "Apagador", numFornec: 5 },
    { nome: "Caneta", numFornec: 7 },
    { nome: "Borracha", numFornec: 3 },
    { nome: "Cola", numFornec: 2 },
    { nome: "Lapis", numFornec: 10 },
    { nome: "Apagador", numFornec: 5 },
    { nome: "Caneta", numFornec: 7 },
    { nome: "Borracha", numFornec: 3 },
    { nome: "Cola", numFornec: 2 },
    { nome: "Lapis", numFornec: 10 },
    { nome: "Apagador", numFornec: 5 },
    { nome: "Caneta", numFornec: 7 },
    { nome: "Borracha", numFornec: 3 },
    { nome: "Cola", numFornec: 2 },
  ];

  const { navigate } = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Fornecedor</Text>
        <Text style={styles.headerSubtitle}>Telefone</Text>
      </View>
      <ScrollView>
        {itens.map((item) => {
          return <Text> hola</Text>;
        })}
      </ScrollView>
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
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SupplierList;
