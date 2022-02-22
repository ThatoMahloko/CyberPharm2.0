import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'
import getUSER from '../config/user'
import { db,firebase} from '../config/firebase'

const AddContacts = () => {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const userMail = firebase.auth().currentUser.email

    function save() {
        const ud = getUSER();
        console.log(ud)

        db.collection('Contacts').doc(userMail).collection('Contact_List').add(
            {
                Email: email,
                FirstName: firstName,
                LastName: lastName,
                PhoneNumber: phoneNumber
            }
        ).then(() => {

            alert('Contact has been successfully added')
        }).catch((error) => {
            console.error('Error adding document', error)
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <Title style={styles.title}>Name</Title>
            <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(firstName) => setFirstName(firstName)} />
            <Title style={styles.title}>Surname</Title>
            <TextInput style={styles.input} placeholder='Enter your surname' onChangeText={(lastName) => setLastName(lastName)} />
            <Title style={styles.title}>Phone number</Title>
            <TextInput style={styles.input} keyboardType='phone-pad' placeholder='+27 _ _   _ _ _   _ _ _ _' onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} />
            <Title style={styles.title}>Enter your email</Title>
            <TextInput style={styles.input} placeholder='name@mailservice.com' onChangeText={(email) => setEmail(email)} />

            <TouchableOpacity style={styles.button} onPress={save}>
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
