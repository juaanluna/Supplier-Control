import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Auth" component={Auth} options={{title:'Sair'}} />
      </Drawer.Navigator>
  );
}
export default DrawerNavigation;
