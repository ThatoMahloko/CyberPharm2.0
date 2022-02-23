import React from 'react'
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, ScrollView, SafeAreaView, Text, BottomNavbar, Alert, TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import ContactItem from '../components/ContactItem'
import getUSER from '../config/user'
import AddButton from '../components/AddButton'
const Contacts = ({ navigation }) => {
    const [user, setUser] = useState([
        { FirstName: '' },
    ])
    const [contact, setContact] = useState([
        {},
    ])
    const [details, setDetails] = useState([]);
    useEffect(() => {
        db.collection('Contacts')
            .doc(userMail)
            .collection('Contact_List')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setContact(dis);
            });
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.containerContent}>
                <ScrollView horizontal={false} style={styles.scrollView} >
                    <StatusBar
                        animated={false}
                        barStyle='dark-content'
                        hidden={false}
                        translucent={false}
                    />
                    {contact.length == 0 ?
                         <Image style={styles.emptyIcon} source={require('../assets/icons/emptyContacts.png')} />
                        :
                        contact.map((data, k) => (
                            <View style={styles.contactItem}>
                                <ContactItem key={k} data={data} />
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}
export default Contacts
const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        // backgroundColor: 'red'
    },
    contactItem: {
        alignItems: 'center',
        marginBottom: -40,
        flexDirection: 'row',
        marginLeft: 20,
        padding: 0
    }
    ,
    emptyIcon: {
        width: 179,
        height: 187.4,
        alignSelf: 'center',
        marginTop: 100,
    },
    scrollView: {
        height: '100%',
        marginTop: 0,
        marginBottom: 0
    },
    add: {
        backgroundColor: '#3E64FF',
        width: 60,
        height: 60,
        borderRadius: 30,
        end: -320,
        top: 20,
        justifyContent: 'center',
        alignContent: 'center',
        position:'relative',
        zIndex:1,
    },
    addText: {
        fontSize: 15,
        color: '#fff',
        marginLeft: 16,
        marginBottom:5
    }
})