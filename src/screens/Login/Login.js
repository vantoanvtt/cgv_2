import * as React from 'react';
import {
  View,
} from 'react-native';

import {Header2} from '../../components/UI/index';
import {TextInput} from 'react-native-paper';
import colors from '../../utility/Colors';

const Login = () => {
    return(
        <View>
            <Header2/>
            <TextInput
                label="Email hoặc số điện thoại"
                mode="flat"
                underlineColor={colors.red}
            />
            <TextInput 
                label="Mật khẩu"
                mode='flat'
                underlineColor={colors.red}
                secureTextEntry={true}
            />
        </View>
    )
}

export default Login;