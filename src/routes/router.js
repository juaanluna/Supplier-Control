import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./drawerNavigation";

import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
import MaterialList from "../screens/material/materialList";
import MaterialForm from "../screens/material/materialForm";
import SupplierList from "../screens/supplier/supplierList";
import SupplierForm from "../screens/supplier/supplierForm";
import Associate from "../screens/supplier/associateSupplier";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const Routes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#B20000" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      {isAuth === true ? (
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen
        name="MaterialList"
        component={MaterialList}
        options={{ title: "Lista de materiais" }}
      />

      <Stack.Screen
        name="MaterialForm"
        component={MaterialForm}
        options={{ title: "Cadastrar Material" }}
      />
      <Stack.Screen
        name="SupplierForm"
        component={SupplierForm}
        options={{ title: "Cadastrar Fornecedor" }}
      />
      <Stack.Screen
        name="SupplierList"
        component={SupplierList}
        options={{ title: "Lista de Fornecedores" }}
      />
      <Stack.Screen
        name="Associate"
        component={Associate}
        options={{ title: "Associar fornecedor a item" }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
