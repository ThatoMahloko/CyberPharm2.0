import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Alert } from 'react-native'
import getUSER from '../config/user'
import { firebase } from '../config/firebase'
import * as SMS from 'expo-sms';

const SOS = ({ navigation }) => {
    const [phoneNumbers, setPhoneNumbers] = useState([])
    const [contact, setContact] = useState([])

    const user = firebase.auth().currentUser
    useEffect(() => {
        firebase
            .firestore()
            .collection('Contacts')
            .doc(user.email)
            .collection('Contact_List')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setContact(dis);
            });

    }, []);


    const SOSPanic = () => {
        contact.map((data) => {
            setPhoneNumbers(data.PhoneNumber)
        })
        console.log(phoneNumbers)
        const isAvailable =  SMS.isAvailableAsync();
        if (isAvailable) {
            // do your SMS stuff here
            const { result } =  SMS.sendSMSAsync(
                phoneNumbers,
                'My sample Hello World message',
            )
        } else {
            // misfortune... there's no SMS available on this device
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

            <TouchableOpacity style={styles.panicView} onPress={SOSPanic}>
                <Image style={styles.panicButton} source={require('../assets/icons/SOS.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AddContacts')}>
                <Image style={styles.add} source={require('../assets/icons/add.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default SOS

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        paddingTop: 260
    },
    panicView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    panicButton: {
        width: 250,
        //height: 250,
        alignSelf: 'center',
    },
    add: {
        marginTop: 180,
        marginLeft: 280
    }
})   