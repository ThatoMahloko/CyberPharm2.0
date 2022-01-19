import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, StatusBar } from 'react-native'
import { Title } from 'react-native-paper'

const Messaging = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <Title style={styles.title}>Email Address</Title>
            <TextInput style={styles.input} placeholder='Enter you email address' />
            <TextInput selectionColor={'#3E64FF'} multiline={true} maxLength={256} numberOfLines={5} style={styles.inputMessage} placeholder='Write your message here' />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>SEND MESSAGE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Messaging

const styles = StyleSheet.create({
    container: {
        marginTop: 60
    },
    inputMessage: {
        width: 342,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 20,
        paddingBottom: 70
    },
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 20
    },
    title: {
        alignSelf: 'center'
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
