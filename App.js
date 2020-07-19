import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes/router";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#B20000' barStyle='light-content'/>
      <Routes />
    </NavigationContainer>
  ); 
} 

