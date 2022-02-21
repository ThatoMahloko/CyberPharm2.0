import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Alert } from 'react-native'
import getUSER from '../config/user'
import { firebase } from '../config/firebase'
import * as SMS from 'expo-sms';

const SOS = ({ navigation }) => {
    const phoneNUmbers = []
    const [contact, setContact] = useState([
        {},
    ])
    useEffect(() => {
        const ud = getUSER();
        console.log(ud)
        firebase
            .firestore()
            .collection('Contacts')
            .doc(ud)
            .collection('Contact_List')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setContact(dis);
            });          
    }, []);

    const SOS = async () => {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            // do your SMS stuff here
            if (contact.length == 0) {
                Alert.alert('You have no contatcs to alert!!, ADD CONTACTS!');

            } else {
                
                console.log(contact[3])
            }
        } else {
            // misfortune... there's no SMS available on this device
            Alert.alert(" misfortune... there's no SMS available on this device")

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

            <TouchableOpacity style={styles.panicView} onPress={SOS}>
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
        height: 250,
        alignSelf: 'center',
    },
    add: {
        marginTop: 180,
        marginLeft: 280
    }
})   