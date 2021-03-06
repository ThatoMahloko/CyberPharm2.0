import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Alert, Dimensions, ImageBackground } from 'react-native'
import { Modal, Provider, Portal, Title } from 'react-native-paper'
import signOut from '../auth/signOut'

const Home = ({ navigation }) => {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, alignItems: 'center' };

    const logout = () => {
        signOut(navigation)
    }

    const confirmLogout = () => {
        Alert.alert(
            "Log Out",
            "Do you want to Logout?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => logout() }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <View style={styles.iconGroup}>
                <TouchableOpacity onLongPress={() => navigation.navigate('SOS')}>
                    <Image style={styles.icon} source={require('../assets/icons/SosIcon.png')} />
                </TouchableOpacity >

                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Image style={styles.icon} source={require('../assets/icons/notify.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.icon} source={require('../assets/icons/girl.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.clickIconsGroup}>
                <TouchableOpacity style={styles.clickIcons} onPress={() => navigation.navigate('Vaccination')}>
                    <Image source={require('../assets/icon/syringe.png')} />
                    <Text style={styles.imageText}>Vaccination</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clickIcons} onPress={() => navigation.navigate('Doctors')}>
                    <Image source={require('../assets/icon/maskedDoctor.png')} />
                    <Text style={styles.imageText}>Book Dr.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clickIcons} onPress={() => navigation.navigate('Donate')}>
                    <Image source={require('../assets/icon/bloodDonate.png')} />
                    <Text style={styles.imageText}>Blood Bank</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clickIcons} onPress={() => navigation.navigate('Contacts')}>
                    <Image source={require('../assets/icon/contactIcon.png')} />
                    <Text style={styles.imageText}>Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.clickIcons} onPress={() => navigation.navigate('Symptom')}>
                    <Image source={require('../assets/icon/selfDiagnose.png')} />
                    <Text style={styles.imageText}>Self Help</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.covidInfo} onPress={() => navigation.navigate('VaccineCertificate')}>
                <Title style={styles.covidCardText}>Covid-19</Title>
                <Title style={styles.covidCardText}>Coronavirus</Title>
                <Title style={styles.covidCardText}>Vaccination</Title>
                <Title style={styles.covidCardText}>Certificate</Title>
                <Image style={styles.doctorAnime} source={require('../assets/icons/doctorAnime.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.locateMedi} onPress={() => navigation.navigate('Maps')}>
                <View style={styles.rowcontentLoacte}>
                    <Title style={styles.locateText}>Locate Nearest</Title>
                    <Title style={styles.locateText}>Medical Facility</Title>
                </View>
                <Image style={styles.mapIcon} source={require('../assets/icons/mapIcon.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        height: 'auto',

    }
    ,
    iconGroup: {
        flexDirection: 'row',
        marginLeft: '50%',
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: '10%',
        margin: '10%'
    },
    clickIconsGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: '1%',
    },
    clickIcons: {
        width: 70,
        height: 80,
        top: 1,
        backgroundColor: '#1597E5',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    imageText: {
        fontSize: 9,
        textAlign: 'center',
        color: '#fff'
    }
    ,
    covidInfo: {
        height: '60%',
        width: '90%',
        alignSelf: 'center',
        marginTop: '10%',
        backgroundColor: '#054EDE',
        borderRadius: 20
    },
    covidCardText: {
        color: '#fff',
        textAlign: 'left',
        fontSize: 30,
        marginTop: 20,
        marginLeft: 10
    },
    doctorAnime: {
        width: '98%',
        height: '60%',
        alignSelf: 'center',
        marginTop: 19
    }
    ,
    mapIcon: {
        left: 70,
        alignSelf: 'center'
    },
    locateMedi: {
        flexDirection: 'row',
        backgroundColor: '#054EDE',
        height: 80,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 20,
        width: '90%'
    },
    rowcontentLoacte: {
        flexDirection: 'column',
        right: 70
    },
    locateText: {
        color: '#fff'
    },
    iconsText: {
        fontWeight: 'bold',
        marginTop: -26,
        fontSize: 11,
        textAlign: 'center',
        color: 'black'
    },


})




