import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Card, Title } from 'react-native-paper';
import React, { useState } from 'react';

const EditProfile = () => {
    const [userEmail, setUserEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    return (
        <View style={styles.container}>
            <Card style={styles.doctorCover}>
                <Image style={styles.imageIcon} source={require('../assets/image/thato.jpg')} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProflie')}>
                    <Text style={styles.text}>Change Photo</Text>
                </TouchableOpacity>
            </Card>

            <TextInput placeholder={'First Name'} style={styles.input} onChangeText={(firstName) => setFirstName(firstName)} />
            <TextInput placeholder={'Last Name'} style={styles.input} onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(userEmail) => setUserEmail(userEmail)} />
            <TextInput placeholder={'Phone Number'} style={styles.input} onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Save Personal Info</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EditProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    doctorCover: {
        width: '100%',
        height: '40%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingTop: '15%', marginBottom: 0
    },
    imageIcon: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        borderRadius: 100,
    },
    userName: {
        alignSelf: 'center'
    },
    userEmail: {
        alignSelf: 'center',
        margin: 10
    },
    usePhone: {
        alignSelf: 'center',
        margin: 10
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
    },
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 30
    },
});

