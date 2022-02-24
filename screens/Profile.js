import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { db, firebase } from '../config/firebase'
import getUSER from '../config/user';

const Profile = ({ navigation }) => {
    const user = getUSER()
    const [file, setFile] = useState('')
    const [image, setImage] = useState('');
    const myUser = firebase.auth().currentUser

    useEffect(() => {
        var docRef = db.collection('VaxCards').doc(user).collection('SavedCards').doc('Card')
        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setFile(doc.data)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])

    return (
        <View style={styles.container}>
            <Card style={styles.doctorCover}>
                {
                    user.photoURL !== null ?
                        <>
                            <Image style={styles.imageIcon} source={require('../assets/icon/user.png')} />
                            <Title style={styles.userName}>{myUser.displayName}</Title>
                            <Text style={styles.userEmail}>{myUser.email}</Text>
                            <Text style={styles.usePhone}>0718752396</Text>
                        </>
                        :
                        <>
                            <Image style={styles.imageIcon} source={{ uri: user.photoURL }} />
                            <Title style={styles.userName}>Username</Title>
                            <Text style={styles.userEmail}>userEmail</Text>
                            <Text style={styles.usePhone}>Phone Number</Text>
                        </>
                }
            </Card>
            <Title style={styles.vaxcardTitle}>Vaccination Card</Title>
            <View style={styles.imagePreviewContainer}>
                <Image resizeMode='stretch' source={require('../assets/image/OIP.jpg')} style={styles.imagePreview} />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};




export default Profile;

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
        // backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1
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
    },
    vaxcardTitle: {
        alignSelf: 'center',
        margin: 0
    },
    imagePreviewContainer: {
        backgroundColor: "#eee",
        height: "45%",
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginTop: "1%",
        justifyContent: 'center'
    },
    imagePreview: {
        backgroundColor: "#eee",
        height: "100%",
        width: '100%',
        borderColor: 'black',
        alignSelf: 'center',
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

});
