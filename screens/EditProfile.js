import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Card, Title } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'
import getUSER from '../config/user';
import { firebase } from '../config/firebase'

const EditProfile = () => {
    const [userEmail, setUserEmail] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [image, setImage] = useState('');
    const [profileImage, seProfileImage] = useState('');

    const [displayName, setDisplayName] = useState('')
    const [displayEmail, setDisplayEmail] = useState('')
    const [displayPhoto, setDisplayPhoto] = useState('')

    const user = firebase.auth().currentUser;




    useEffect(() => {
        (async () => {
            if (user != null) {
                const displayName = user.displayName;
                const email = user.email;
                const photoURL = user.photoURL;
                const emailVerified = user.emailVerified;
            }

        })();
    }, []);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.getCameraPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert('Sorry, we need camera permission to make this work!')
                }
            }
        })();
    }, [])

    const changePhoto = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            seProfileImage(result.uri);
            setImage(profileImage)
        }
    }

    const saveInformation = () => {
        const user = firebase.auth().currentUser;
        console.log(profileImage)

        if (userEmail === '' && lastName === '' && firstName === '' && mobileNumber === '' && image === '') {
            Alert.alert("Fill in the required fields!")

        } else {

            user.updateProfile({
                displayName: `${firstName + " " + lastName}`,
                photoURL: `${image}`
            }).then(() => {
                Alert.alert("Profile Updated Successfully")
            }).catch((error) => {
                Alert.alert("Error: " + error)
            })

            user.updateEmail(userEmail).then(() => {
            }).catch((error) => {
                Alert.alert("Error: " + error)
            })
        }


    }

    return (
        <View style={styles.container}>

            <Card style={styles.doctorCover}>
                {
                    image === '' ?
                        <Image style={styles.imageIcon} source={require('../assets/icon/user.png')} />
                        :
                        <Image style={styles.imageIcon} source={{ uri: profileImage }} />
                }

                <TouchableOpacity style={styles.button} onPress={changePhoto}>
                    <Text style={styles.text}>Change Photo</Text>
                </TouchableOpacity>
            </Card>

            <TextInput placeholder={'First Name'} style={styles.input} onChangeText={(firstName) => setFirstName(firstName)} />
            <TextInput placeholder={'Last Name'} style={styles.input} onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(userEmail) => setUserEmail(userEmail)} />
            <TextInput placeholder={'Phone Number'} style={styles.input} onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)} />

            <TouchableOpacity style={styles.button} onPress={saveInformation}>
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

