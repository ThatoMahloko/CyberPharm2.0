import React from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'

const AddContacts = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <Title style={styles.title}>Name</Title>
            <TextInput style={styles.input} placeholder='Enter you email address' />
            <Title style={styles.title}>Surname</Title>
            <TextInput style={styles.input} placeholder='Enter you email address' />
            <Title style={styles.title}>Phone number</Title>
            <TextInput style={styles.input} placeholder='+27 _ _   _ _ _   _ _ _ _' />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddContacts

const styles = StyleSheet.create({
    container: {
        marginTop: 40
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
        marginLeft: 60
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
