import React from 'react';



import {
    View,
    Text,
} from 'react-native';

import {TextInput} from 'react-native-paper';
import colors from '../../utility/Colors';

const Input = () => {
    return(
        <View>
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

export default Input;