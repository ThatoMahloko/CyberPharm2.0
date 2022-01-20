import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native'
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

                <View style={styles.iconGroup}>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../assets/icons/notify.png')} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={showModal}>
                    <Image style={styles.icon} source={require('../assets/icons/girl.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.clickIconsGroup}>
                <TouchableOpacity onPress={() => navigation.navigate('Vaccination')}>
                    <Image style={styles.clickIcons} source={require('../assets/icons/vaccinate.png')} />
                    <Text style={styles.iconsText}>Vaccination</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <Image style={styles.clickIcons} source={require('../assets/icons/bookDr.png')} />
                    <Text style={styles.iconsText}>Book a Dr</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
                    <Image style={styles.clickIcons} source={require('../assets/icons/donateBlood.png')} />
                    <Text style={styles.donateBloodText}>Donate Blood</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                    <Image style={styles.clickIcons} source={require('../assets/icons/SOScontacts.png')} />
                    <Text style={styles.iconsText}>Contacts </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Symptom')}>
                    <Image style={styles.clickIcons} source={require('../assets/icons/symptoms.png')} />
                    <Text style={styles.iconsText}>Symptoms </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.covidInfo} onPress={() => navigation.navigate('ScanCard')}>
                <Title style={styles.covidCardText}>Create A Digital</Title>
                <Title style={styles.covidCardText}>Vaccination</Title>
                <Title style={styles.covidCardText}>Card</Title>
                <Image style={styles.doctorAnime} source={require('../assets/icons/doctorAnime.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.locateMedi} onPress={() => navigation.navigate('Maps')}>
                <View style={styles.rowcontentLoacte}>
                    <Title style={styles.locateText}>Locate Nearst</Title>
                    <Title style={styles.locateText}>Medical Facility</Title>
                </View>
                <Image style={styles.mapIcon} source={require('../assets/icons/mapIcon.png')} />
            </TouchableOpacity>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <TouchableOpacity onPress={confirmLogout}>
                            <Text>LOG OUT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AddContacts')}>
                            <Text>Add Contacts</Text>
                        </TouchableOpacity>
                    </Modal>
                </Portal>
            </Provider>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
      
    }
    ,
    iconGroup: {
        flexDirection: 'row',
        marginLeft: '50%',

    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 20,
        margin: 10
    },
    clickIconsGroup: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    clickIcons: {
        width: 92,
        height: 92,
        top:1, 
       
      
        
    },
    imageText: {
        fontSize: 9,
        textAlign: 'center', 
        color:'#fff'
    }
    ,
    covidInfo: {
        height: 460,
        width: 360,
        alignSelf: 'center',
        marginTop: 20,
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
        marginTop: 10
    },
 
    iconsText: {

        fontWeight: 'bold',
        marginTop: -26,
        fontSize: 11,
        textAlign: 'center',
        color: 'black'
    },
    donateBloodText: {
        fontWeight: 'bold',
        marginTop: -26,
        fontSize: 10,
        textAlign: 'center',
        color: 'black',


    }

})




