import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import LogoIcon from '../components/LogoIcon'
import signIn from '../auth/signIn'

const Login = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = () => {
        if (userEmail == "" && password == "") {
            Alert.alert("Username and Email Feild cannot be empty!")
        } else {
            signIn(userEmail, password, navigation)

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

            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../assets/backGroundImages/Login.jpg')}>
                <View>
                    <LogoIcon />
                </View>
                <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(userEmail) => setUserEmail(userEmail)} />
                <TextInput placeholder={'Password'} style={styles.input} secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
                <TouchableOpacity style={styles.button} onPress={() => onLogin(navigation)}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>

                <View style={styles.linkText}>
                    <Text style={styles.textLink}>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textLink_}>Register Here</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linkText}>
                    <Text style={styles.textLink}>Forgot Password? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                        <Text style={styles.textLink_}>Reset Here</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )

}
export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 30
    }
    ,
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
    ,
    linkText: {
        alignSelf: 'center',
        marginTop: 50,
        flexDirection: 'row'
    }
    ,
    textLink: {
        fontWeight: "900",
        color: '#000'
    }
    ,
    textLink_: {
        fontWeight: "900",
        color: '#3E64FF'
    }
})
