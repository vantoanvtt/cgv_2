import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Group,
  Image,
  FlatList,
} from 'react-native';

import {Header2} from '../../components/UI/index';

const data = [
  {
    image: "https://vtcpay.vn/media2/upload/images/news/images/650x340(19).jpg",
    des: "mua 2 ve 2s tang 1. dat ngay di ba con nao", 
    time: "13/4/2020 - 25/4/2020" 
  },
  {
    image: "https://static.mservice.io/blogscontents/momo-upload-api-200310085034-637194270347117260.jpg",
    des: "dat ve tren momo",
    time: "12/6/789 - 23/6/2021"
  },
  {
    image: "https://viettelpay.vn/upload/avatar_84.jpg",
    des: "dhakjhdkhaskhfsadflkdsjflkjalfk",
    time: "23/5/645 - 45/5/54645"
  }
]
const Item = ({image, des, time}) => {
    return(
        <View style={{margin: 10}}>
          <View style={{
            zIndex: 1
          }}>
            <Image 
            source={{uri: image}}
            style={{
              height: 200,
              width: "100%",
            }}
            />
          </View>
          <View style={{
            position: "absolute",
            zIndex: 2,
            marginTop: -70,
            marginLeft: 10,
            height: 70,
            width: "90%",
            //backgroundColor: "#80000001",
            //opacity: 0.6
          }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                width: "90%",
                color: "#fafcfc",
              }}
              numberOfLines={2}
              ellipsizeMode="tail"

            >
              {des}
            </Text>
            <Text
              style={{
                fontWeight: '300',
                fontSize: 14,
                width: "90%",
                color: "#fafcfc"
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {time}
            </Text>
          </View>
        </View>
    )
}

const FullNews = () => {
  return(
    <View style={{
      backgroundColor: '#ced9d5',
      flex: 1
    }}>
      <Header2 />
      <FlatList 
        style={{flex: 1}}
        data={data}
        keyExtractor={data => data.image}
        renderItem={({item}) => {
          console.log(item)
          return(
            <View>
              <Item image={item.image} des={item.des} time={item.time}/>
            </View>
          )
        }}
      />
    </View>
  )
}

export default FullNews;
