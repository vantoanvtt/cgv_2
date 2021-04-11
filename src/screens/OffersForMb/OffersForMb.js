import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Swiper from 'react-native-swiper'

import Header2 from '../../components/Header2';

const {width} = Dimensions.get('window');

const images = [
    "https://vuakhuyenmai.vn/wp-content/uploads/2018/06/cgv-khuyen-mai-moi.jpg",
    "https://vuakhuyenmai.vn/wp-content/uploads/2018/06/cgv-khuyen-mai-moi.jpg",
    "https://vuakhuyenmai.vn/wp-content/uploads/2018/06/cgv-khuyen-mai-moi.jpg"
]

const Slide = props => {
    return(
        <View style={{
            height: "80%",
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image 
                source={{uri: props.image}}
                style={styles.image}
            />
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold'
            }}>
                {props.index}
            </Text>
            <Text style={{
                fontSize: 17,
                marginTop: 15
            }}>
                description
            </Text>
            
        </View> 
    )
    
}

const OffersForMb = () => {
    return(
        <View style={{
            height: "90%",
            }}>
            <Header2 />
            <Swiper>
            {images.map((item, index) => {
                return(
                    <Slide 
                        image={item}
                        index={index}
                    />
                )
            })}
            
            </Swiper>
            <View style={{
                justifyContent: 'space-around',
                flexDirection: 'row'
            }}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text>
                        Đăng nhập
                    </Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                    style={{...styles.button, backgroundColor: '#b50b22'} }
                >
                    <Text>
                        Đăng kí
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OffersForMb;

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
    image: {
        width,
        //flex: 1,
        backgroundColor: 'transparent',
        height: 260,
        width: 210,
        marginBottom: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
    button: {
        width: 130,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        borderColor: "#b50b22",
        borderWidth: 1
    },
    buttonText: {
        color: "#b50b22",
        fontSize: 22,
        fontWeight: 'bold',

    }
  })