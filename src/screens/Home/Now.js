import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Listcarousel from "./components/index";
import Header from "./components/index";


const Now = () => {
    return(
        <View style={{
            width: 500,
            height: 666,
            flex: 1
        }}>
            <Header />
            <Listcarousel />
        </View>
    )
}

export default Now;