import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Alert, Dimensions } from 'react-native'
import { Modal, Provider, Portal } from 'react-native-paper'
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

            <TouchableOpacity onPress={() => navigation.navigate('ScanCard')}>
                <Image style={styles.covidInfo} source={require('../assets/icons/covid-19.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Maps')}>
                <Image style={styles.locateMedi} source={require('../assets/icons/locate.png')} />
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
        // width: '100%',
        // height: '100%'
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
    ,
    iconGroup: {
        flexDirection: 'row',
        marginLeft: 200,

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
    covidInfo: {
        height: 460,
        width: 360,
        alignSelf: 'center',
        marginTop: 20
    }
    ,
    locateMedi: {
        width: 360,
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




