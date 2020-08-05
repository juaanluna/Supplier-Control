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

const ModalComponent = ({
  isVisible,
  onCancel,
  textHeader,
  children,
  buttonTitle,
}) => {
  const { navigate } = useNavigation();

  // const buttonSupplier = useCallback({
  //FECHA MODAL E NAVEGA
  // },[])
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
          <Icon name="pen" size={20} color="#fff" />
        </View>

        {children}

        <TouchableOpacity
          style={styles.button}
          onPress={async () => navigate("SupplierList")}
          onCancel
        >
          <Text style={styles.buttonTitle}>{buttonTitle}</Text>
        </TouchableOpacity>
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
  buttonTitle: {
    margin: 20,
    marginRight: 30,
    color: "#B20",
    fontSize: 20,
  },
});
export default ModalComponent;
