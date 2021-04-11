import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header2 = (props) => {
    return(
        <View 
        style={{
            flexDirection: 'row',
            height: 50,
            width: "100%",
            backgroundColor: '#fcfcfc',
            justifyContent: 'space-between',
            paddingTop: 5,
            elevation: 5,
            marginBottom: 10
            
        }}>
            <View style={{
                flexDirection: 'row',
                //width: 150,
                
            }}>
                <TouchableOpacity>
                    <Icon 
                        name="arrow-left"
                        size={38}
                        color="#d12c2c"
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 22,
                    marginTop: 5,
                    marginLeft: 5,
                    fontWeight: 'bold'
                }}>
                    title
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-around'
            }}>
                <Icon 
                    name="share-variant"
                    size={30}
                    color="#d12c2c"
                    style={{marginTop: 3}}
                />
                <Icon 
                    name="menu"
                    size={38}
                    color="#d12c2c"
                />
            </View>
        </View>
    )
}

export default Header2;