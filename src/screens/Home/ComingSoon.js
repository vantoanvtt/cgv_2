import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Header} from "./components/index";

import Listcarousel from "./components/index";
const ComingSoon = () => {
    return(
        <View>
            <Header />
            <Listcarousel />
        </View>
    )
}

export default ComingSoon;