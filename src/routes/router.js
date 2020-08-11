import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Auth from "../screens/auth/auth";
import MaterialList from "../screens/material/materialList";
import SupplierList from "../screens/supplier/supplierList";
import DrawerNavigation from "./drawerNavigation";
import FornecedorForm from "../screens/fornecedor/fornecedorForm";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerStyle: { backgroundColor: "#B20000" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MaterialList"
        component={MaterialList}
        options={{ title: "Lista de materiais" }}
      />

      <Stack.Screen
        name="SupplierList"
        component={SupplierList}
        options={{ title: "Fornecedores" }}
      />
      <Stack.Screen
        name="FornecedorForm"
        component={FornecedorForm}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

export default Routes;
