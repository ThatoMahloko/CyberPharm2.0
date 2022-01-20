import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { db } from '../config/firebase'
import ContactItem from '../components/ContactItem'
import getUSER from '../config/user'

const Contacts = ({ navigation }) => {
    const [user, setUser] = useState([
        { FirstName: '' },
    ])

    const [contact, setContact] = useState([
        {},
    ])

    const [details, setDetails] = useState([]);

    useEffect(() => {
        const ud = getUSER();
        console.log(ud)
        db.collection('Contacts')
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

    return (
        <View>
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
            <TouchableOpacity onPress={() => navigation.navigate('AddContacts')}>
                <Image style={styles.add} source={require('../assets/icons/add.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    contactItem: {
    }
    ,
    emptyIcon: {
        width: 179,
        height: 187.4,
        alignSelf: 'center',
        marginTop: 100,
    },
    add: {
        marginTop: 400,
        marginLeft: 280,
    }
})
