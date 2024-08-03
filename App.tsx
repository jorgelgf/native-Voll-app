
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStacks } from './src/stacks';
import { StatusBar } from 'react-native';
import { Themes } from './src/themes/styles';


function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Themes.colors.blue[800]} />
      <MainStacks />
    </NavigationContainer>
  );
}

export default App;

