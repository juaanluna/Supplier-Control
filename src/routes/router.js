import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../screens/auth/auth";
import Home from "../screens/home/home";
// import BottomNavigation from './bottomNavigation'
const Stack = createStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator initialRouteName="Auth" screenOptions={{headerStyle:{backgroundColor:'#B20000'}, headerTintColor:'#fff', headerTitleAlign:'center'}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
      </Stack.Navigator>
  );
};

export default Routes;
