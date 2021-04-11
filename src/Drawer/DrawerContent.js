import * as React from 'react';
import { View, Button, ImageBackground } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Text, Avatar, Paragraph, Caption, Drawer} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = ({title,iconName}) => {
    return(
        <View style={{
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
        }}>
            <Icon 
                name={iconName}
                size={35}
                color="#faf8f2"
            />
            <Text style={{
                color: "#faf8f2",
                fontSize: 11
            }}>
                {title}
            </Text>
        </View>
    )
}
const DrawerContent = (props) => {
    return(
        <View>
            <ImageBackground 
            source={{uri: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2t8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}}
            style={{
                resizeMode: "cover",
                height: '100%'
            }}
            >
                <View>
                    <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: "100%",
                    alignItems: "center",
                    marginBottom: 5,
                    marginTop: 15
                    }}>
                        <Icon
                            name="bell"
                            size={35}
                            color="#999382"
                            style={{marginLeft: 30}}
                        />
                        <Avatar.Image
                            size={80}
                            source={{uri: "https://kenh14cdn.com/2020/6/22/1016275081-15928077582601364968623.jpg"}}
                        />
                        <Icon 
                            name="cog"
                            size={35}
                            color="#999382"
                            style={{marginRight: 30}}
                        />
                    </View>
                    
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'yellow',
                    width: "100%",
                }}> 
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        fontSize: 17
                        }}>
                        Đăng nhập/Đăng kí
                    </Text>
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        fontSize: 17
                        }}>
                        Đặt vé theo phim
                    </Text>
                    <Text style={{
                        paddingBottom: 5,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 1,
                        fontSize: 17
                        }}>
                        Đặt vé theo rạp
                    </Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '96%',
                        marginLeft: 4
                    }}>
                        <Item title="Trang chủ" iconName="home" />
                        <Item title="Thành viên CGV" iconName="account-check-outline" />
                        <Item title="Rạp CGV" iconName="information" />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '96%',
                        marginLeft: 4
                    }}>
                        <Item title="Rạp Đặc Biệt" iconName="star-circle-outline" />
                        <Item title="Tin mới và Ưu đãi" iconName="gift-outline" />
                        <Item title="Vé của tôi" iconName="ticket" />
                    </View>
                </View>

            <DrawerItem 
                label="log out"
            />
            </ImageBackground>
        </View>
    )
}

export default DrawerContent;