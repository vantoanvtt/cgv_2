import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {FlatListSlider} from 'react-native-flatlist-slider';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation, DrawerActions } from '@react-navigation/native';

const Header = () => {
    const images = [
        {
         image:'https://images.unsplash.com/photo-1515734674582-29010bb37906?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXNpYW4lMjBnaXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
       {
         image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
         desc:
           'Red fort in India New Delhi is a magnificient masterpeiece of humans',
       },
       ]
       const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <View style={{flexDirection: 'row', 
                            position: 'absolute',
                            zIndex: 2,
                            justifyContent: 'space-between',
                            //flex: 1,
                            //backgroundColor: "red",
                            width: '100%',
                            marginTop: 10
                            }}>

                <View style={{marginLeft: 20}}>
                    <Icon 
                        name="account-circle"
                        size={30}
                        color="black"
                    />
                </View>

                <View style={{
                            marginRight: 20,
                            flexDirection: 'row'
                            }}>
                    
                    <Icon 
                        name="ticket"
                        size={30}
                        color="black"
                        style={{marginRight: 15}}
                    />
                    <Icon 
                        name="menu"
                        size={30}
                        color="black"
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    />
                </View>
            </View>
            
            <View style={{}}>
                <FlatListSlider 
                    data={images}
                    //imageKey={'banner'}
                    //width={275}
                    height={140}
                   
                    //timer={6000}
                    //indicatorActiveWidth={0}
                    onPress={item => alert(JSON.stringify(item))}
                />
            </View>

           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //height: 20,
        //width: 10
        zIndex: 1
    }
})

export default Header;