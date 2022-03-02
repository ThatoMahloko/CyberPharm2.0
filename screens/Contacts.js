import React from 'react'
import { StyleSheet, View, StatusBar, Image, TouchableOpacity, ScrollView, SafeAreaView, Text, BottomNavbar, Alert, TextInput } from 'react-native'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { DataTable, Modal, Portal, Provider } from 'react-native-paper'
import { firebase } from '../config/firebase'
import { HiTrash } from "react-icons/hi";
import { Icon, ListItem } from 'react-native-elements'
const Contacts = ({ navigation }) => {
    const [editable, setEditable] = useState()
    const [documentId, setDocumentId] = useState()
    const userMail = firebase.auth().currentUser.email
    const [firstName, setFirstName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [contact, setContact] = useState([
        {},
    ])
    const [details, setDetails] = useState([]);
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const edit = () => {
        showModal()
    }
    const modalEdit = () => {
        if (firstName === "" && phoneNumber === "") {
            Alert.alert("Please complete form")
        } else {
            db.collection('Contacts')
                .doc(userMail)
                .collection('Contact_List')
                .doc(documentId)
                .update({
                    FirstName: firstName,
                    PhoneNumber: phoneNumber
                }).then(() => {
                    console.log("Document successfully updated!");
                    alert('Phone number successfully updated!')
                })
                .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                    alert('Error updating contact!')
                });
        }
    }
    const delete_ = (data) => {
        Alert.alert(
            ":warning: Delete Contact :warning:",
            "Are you sure you want to delete this contact?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () => {
                        db.collection('Contacts')
                            .doc(userMail)
                            .collection('Contact_List')
                            .doc(data)
                            .delete().then(() => {
                                console.log("Document successfully deleted!");
                                alert('Document successfully deleted!')
                            }).catch((error) => {
                                console.error("Error removing document: ", error);
                                alert("Document delete error ", error)
                            })
                    }
                }
            ]
        )
    }
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
                    <TouchableOpacity style={styles.add} onPress={()=>navigation.navigate('AddContacts')}>
                        <Icon name="plus" type="ant-design" color="white" />
                    </TouchableOpacity>
                    {
                        contact.length == 0 ?
                            <Image style={styles.emptyIcon} source={require('../assets/icons/emptyContacts.png')} />
                            :
                            contact.map((data, k) => (
                                <DataTable.Row style={styles.row} key={k} >
                                <DataTable.Cell>{data.FirstName}</DataTable.Cell>
                                <DataTable.Cell>{data.PhoneNumber}</DataTable.Cell>
                                <ListItem.Content>
                                    <Icon name="delete" type="ant-design" color="red" onPress={() => delete_(data.id)} />
                                </ListItem.Content>
                                    <ListItem.Content>
                                        <Icon name="edit" type="ant-design" color="blue" onPress={function () {
                                            edit();
                                            setDocumentId(data.id);
                                        }} />
                                    </ListItem.Content>
                                </DataTable.Row>
                            ))
                    }
                </ScrollView>
            </View>
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <TextInput placeholder={'FirstName'} style={styles.input} onChangeText={(firstName) => setFirstName(firstName)} />
                        <TextInput keyboardType='number-pad' placeholder={'Phone Number'} style={styles.input} onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)} />
                        <TouchableOpacity style={styles.button} onPress={modalEdit}>
                            <Text style={styles.text}>UPDATE</Text>
                        </TouchableOpacity>
                    </Modal>
                </Portal>
            </Provider>
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
        marginBottom: 5
    },
    row: {
        marginTop: 5,
        marginBottom: 5,
        justifyContent: 'center',
        height: 70
    },
    icon: {
        height: 10,
        width: 10,
    },
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 20,
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