
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Drawer from './src/Drawer/Drawer'

const App = () => {
  return(
    
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}

export default App;