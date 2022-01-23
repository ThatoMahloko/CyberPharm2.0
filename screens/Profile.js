import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';
import React from 'react';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.doctorCover}>
                <Image style={styles.imageIcon} source={require('../assets/image/thato.jpg')} />
                <Title style={styles.userName}>DR. Thato Mahloko</Title>
                <Text style={styles.userEmail}>thato732mahloko@gmail.com</Text>
                <Text style={styles.usePhone}>0718752396</Text>
            </Card>
            <Title style={styles.vaxcardTitle}>Vaccination Card</Title>
            <View style={styles.imagePreviewContainer}>
                <Image source={require('../assets/image/thato.jpg')} style={styles.imagePreview} />
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
