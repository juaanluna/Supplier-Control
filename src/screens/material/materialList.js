import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Modal from "../../components/modal";


const MaterialList = () => {
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

  const [openModal, setOpenModal] = useState(false);
  const { navigate } = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />

      <Modal 
      isVisible={openModal} 
      textHeader='NOME DO PRODUTO'
      >
        
        <Text>Informações: AAAAAAAAAAAA</Text>
        <Text>Informações: AAAAAAAAAAAA</Text>
        <Text>Informações: AAAAAAAAAAAA</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={
          () => {
            setOpenModal(false)
            navigate("SupplierList")
          }
        }
        >
          <Text style={styles.buttonTitle}>Ver fornecedores</Text>
        </TouchableOpacity>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Nome</Text>
        <Text style={styles.headerSubtitle}>Qtd Fornecedor</Text>
        
      </View>

      <ScrollView>
        {itens.map((item) => {
          return (
            <TouchableOpacity
              style={styles.listContainer}
              onPress={() => setOpenModal(true)}
            >
              <Text style={styles.listTitle}>{item["nome"]}</Text>
              <Text style={styles.listTitle}>{item["numFornec"]}</Text>
           
            </TouchableOpacity>
          );
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
  listTitle: {
    fontSize: 20,
    marginRight: 60,
    marginLeft: 20,
    alignItems: "center",
  },
  listContainer: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderColor: "#AAA",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonTitle: {
    margin: 20,
    marginRight: 30,
    color: "#B20",
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default MaterialList;
