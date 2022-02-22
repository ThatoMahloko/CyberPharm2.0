import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'
import LogoIcon from '../components/LogoIcon'
import signUp from '../auth/signUp'

const Register = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const register = () => {
        if (password === confirmPassword) {
            signUp(userEmail, password, navigation)
        } else {
            Alert.alert('Password and ConfirmPassword', "Don't match!")
        }
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
            <TextInput placeholder={'Password'} style={styles.input} onChangeText={(password) => setPassword(password)} />
            <TextInput placeholder={'Confirm Password'} style={styles.input} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />

            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.text}>REGISTER</Text>
            </TouchableOpacity>

            <View style={styles.linkText}>
                <Text style={styles.textLink}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textLink_}>Login Here</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
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
    
    },
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    }
    ,
    linkText: {
        alignSelf: 'center',
        marginTop: 40,
        marginTop: 30,
        flexDirection: 'row'
    }
    ,
    textLink: {
        fontWeight: "bold",
        color: '#000',
        fontSize: 15
    }
    ,
    textLink_: {
        fontWeight: "bold",
        color: '#3E64FF',
        fontSize: 15
    }
})
