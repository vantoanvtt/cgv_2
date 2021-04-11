import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from "./components/index";

const Special = () => {
    return(
        <View>
            <Header />
            <Text>
            Special
            </Text>
        </View>
    )
}

export default Special;