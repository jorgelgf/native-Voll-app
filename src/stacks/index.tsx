import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { Component } from 'react';
import { Login } from '../screens/login';
import { Register } from '../screens/register';
import { Tabs } from '../tabs';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Tabs: Component;
};

export const MainStacks = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  )

}