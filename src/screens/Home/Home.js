
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ComingSoon from './ComingSoon';
import Now from './Now';
import Special from './Special';
import {Header} from "./components/index";


const Tab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <ScrollView>
            
        <View style={{flex: 1}}>
            <Header />
            <Tab.Navigator>
                <Tab.Screen name="now" component={Now} />
                <Tab.Screen name="Special" component={Special} />
                <Tab.Screen name="comingSoon" component={ComingSoon} />
                
            </Tab.Navigator>
            
        </View>
        </ScrollView>
    )
}

export default Home;