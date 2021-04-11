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
} from 'react-native';

const data = [
    {
        image: "https://vtcpay.vn/media2/upload/images/news/images/650x340(19).jpg",
        des: "mua 2 ve 2s tang 1. dat ngay di ba con nao"
    },
    {
        image: "https://static.mservice.io/blogscontents/momo-upload-api-200310085034-637194270347117260.jpg",
        des: "dat ve tren momo"
    }
]
const Item = ({image, des}) => {
    return(
        <View>
            <Image 
            style={{ height: 100, width: 160,
                borderRadius: 10,
                resizeMode: 'stretch', 
            
            }}
            source={{uri: image}} />
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    width: 160
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {des}
            </Text>
        </View>
    )
}
const GroupNewsItem = () => {
    return(
        <View style={{
            flexDirection: "row",
            height: 145,
            padding: 5,
            width: "100%",
            justifyContent: "space-around",
        }} >
            <Item image={data[0].image} des={data[0].des} />
            <Item image={data[1].image} des={data[1].des} />
        </View>
    )
}

export default GroupNewsItem;