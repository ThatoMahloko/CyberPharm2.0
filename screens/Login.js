import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import LogoIcon from '../components/LogoIcon'
import signIn from '../auth/signIn'

const Login = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")

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

            
                <View>
                    <LogoIcon />
                </View>
                <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(email) => setUserEmail(email)}/>
                <TextInput placeholder={'Password'} style={styles.input} secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
                <TouchableOpacity style={styles.button} onPress={() => onLogin(navigation)}>
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>

                <View style={styles.links}>
                    <View style={styles.linkText}>
                        <Text style={styles.textLink}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.textLink_}>Register Here</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.linkTextBottom}>
                        <Text style={styles.textLink}>Forgot Password? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                            <Text style={styles.textLink_}>Reset Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
        </View>
    )

}
export default Login

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
        border:'1px solid #000000'
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
    links:{
marginTop:140
    }
    ,
    linkText: {
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row'
    }
    ,
    linkTextBottom: {
        alignSelf: 'center',
        marginTop: 15,
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
