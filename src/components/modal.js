import React, { useCallback } from "react";
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { deleteMaterial } from "../store/materials/material.action";
import { useDispatch } from "react-redux";

const ModalComponent = ({
  id,
  isVisible,
  onCancel,
  textHeader,
  children,
  buttonTitle,
  deleteItem
}) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onCancel}
      animationType="slide"
    >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>

      <View style={styles.children}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>{textHeader}</Text>
          <TouchableOpacity>
            <Icon
              name="trash"
              size={20}
              color="#fff"
              onPress={deleteItem}
            />
          </TouchableOpacity>
        </View>
        {children}

        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('SupplierList', {type:'vai pf'})}
          onCancel
        >
          <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity> */}
      </View>

      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(2, 2, 2, 0.7)",
  },
  children: {
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#B20",
    padding: 15,
  },
  textHeader: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    paddingRight: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default ModalComponent;
