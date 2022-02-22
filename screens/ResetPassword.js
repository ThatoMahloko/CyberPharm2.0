import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import resetPassword from '../auth/resetPassword'
import LogoIcon from '../components/LogoIcon'


const ResetPassword = () => {
    const [userEmail, setUserEmail] = useState('')

    const submit = () => {
        resetPassword(userEmail)
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <View>
                <LogoIcon />
            </View>
            <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(userEmail) => setUserEmail(userEmail)} />
            <TouchableOpacity style={styles.button} onPress={submit}>
                <Text style={styles.text}>RESET PASSWORD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor:'white'
    },
    
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'black',    
        marginTop: 20,
    },
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    }
})
