import React from 'react';
import {
    Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import GroupNewsItem from './GroupNewsItem'
const ListHotNews = () => {
    return(
        <View>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                paddingVertical: 15
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 10

            }}>
                    Tin nóng
                </Text>
                <TouchableOpacity>
                    <View style={{
                        height: 22,
                        width: 70,
                        borderRadius: 11,
                        borderColor: 'gray',
                        borderWidth: 2,
                        justifyContent: "center",
                        alignItems: 'center',
                        marginRight: 10
                    }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                
                            }}
                        >
                            TẤT CẢ
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <GroupNewsItem/>
                <GroupNewsItem/>
                <GroupNewsItem/>
            </View>
            
        </View>
    )
}

export default ListHotNews;