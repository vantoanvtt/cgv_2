import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Home from '../screens/Home/Home';
import DrawerContent from './DrawerContent'


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    drawerContent={props => <DrawerContent {...props} />}
    drawerPosition = "right"
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;