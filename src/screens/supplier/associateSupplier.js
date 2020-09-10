import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  getSupplier,
  associateSupplier,
} from "../../store/suppliers/suppliers.action";

const Associate = ({ route }) => {
  const { id } = route.params;
  const materialId = id;

  const [SupplierSelected, setSupplierSelected] = useState("");

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSupplier());
  }, []);

  const save = useCallback(async () => {
    const values = { item_codigo: materialId, for_codigo: SupplierSelected };
    await dispatch(associateSupplier(values));
  }, [materialId, SupplierSelected]);

  const suppliers = useSelector((state) => state.suppliers.list);

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor="#B20000" barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.text}>Selecione um fornecedor já cadastrado:</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={SupplierSelected}
            onValueChange={(itemValue) => setSupplierSelected(itemValue)}
          >
            {suppliers.map((supplier) => {
              return (
                <Picker.Item
                  label={supplier.for_razaoSoc}
                  value={supplier.for_codigo}
                />
              );
            })}
          </Picker>
        </View>
        <TouchableOpacity onPress={() => save()} style={styles.button}>
          <Text style={styles.textButton}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("SupplierList")}
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
  picker: {
    marginTop: 20,
    marginBottom: 450,
    height: 50,
    width: 399,
    borderRadius: 13,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
});

export default Associate;
