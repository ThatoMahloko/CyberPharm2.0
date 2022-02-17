import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, Button, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'
import { Avatar, Badge } from 'react-native-elements';

const Doctor = ({ navigation }) => {
    const triggerCall = () => {
        Linking.openURL('tel:0818855766')
    };
    const triggerMail = () => {
        Linking.openURL('mailto:oloratopule716@gmail.com')
    }
    return (
        <SafeAreaView>
            <ScrollView>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <View style={styles.doctorCover}>
               
             <Avatar style={styles.imageIcon}
              rounded
              source={require('../assets/image/thato.jpg')}
              size="large"
             
            />
             <Badge
              status="error"
              size="xl"
              containerStyle={{ position: 'absolute', top: 18, left: 209 }}
            />
            

                <Title style={styles.drName}>DR. Thato Mahloko</Title>
                <Text style={styles.drName}>Virologist</Text>

                <View style={styles.medicalHistory}>
                    <View style={styles.hisIcon}>
                        <Image style={styles.hisIconIcon} source={require('../assets/icons/Doctors/patient.png')} />
                        <Title style={styles.mediHistTextDetail}>1000+</Title>
                        <Text style={styles.mediHistTextDetail}>Patients</Text>
                    </View>
                    <View style={styles.hisIcon}>
                        <Image style={styles.hisIconIcon} source={require('../assets/icons/Doctors/experience.png')} />
                        <Title style={styles.mediHistTextDetail}>10yrs</Title>
                        <Text style={styles.mediHistTextDetail}>Experience</Text>
                    </View>
                    <View style={styles.hisIcon}>
                        <Image style={styles.hisIconIcon} source={require('../assets/icons/Doctors/rating.png')} />
                        <Title style={styles.mediHistTextDetail}>4.5</Title>
                        <Text style={styles.mediHistTextDetail}>Ratings</Text>
                    </View>
                </View>
            </View>

            <View style={styles.infoContent}>
                <Title style={styles.infoContentTitle}>About Doctor</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis voluptate tempora, architecto ipsum dolor sapiente?
                    Reiciendis nam laborum culpa vitae.
                </Paragraph>
                <Title style={styles.infoContentTitle}>Working Time</Title>
                <Paragraph>MON - SAT (08:30 AM - 09:00)</Paragraph>
            </View>

            <View style={styles.infoContent}>
                <Title style={styles.infoContentTitle}>Communication</Title>

                <TouchableOpacity style={styles.contactGroup} onPress={triggerMail}>
                    <Image style={styles.contactIcon} source={require('../assets/icons/Doctors/contact/text.png')} />
                    <View>
                        <Title>Messaging</Title>
                        <Paragraph>Chat me up</Paragraph>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.contactGroup} onPress={triggerCall}>
                    <Image style={styles.contactIcon} source={require('../assets/icons/Doctors/contact/call.png')} />
                    <View>
                        <Title>Audio Call</Title>
                        <Paragraph>Call your doctor directly</Paragraph>
                    </View>
                </TouchableOpacity>

               
            </View>

            <TouchableOpacity disabled={false} style={styles.button} onPress={() => navigation.navigate('Appointments')}>
                <Text style={styles.text}>BOOK APPOINTMENT</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Doctor

const styles = StyleSheet.create({
    doctorCover: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    imageIcon: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderRadius: 55,
        marginTop: 15
    },
    drName: {
        alignSelf: 'center'
    },
    medicalHistory: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    hisIcon: {
        width: 110,
        height: 130,
        margin: 6,
        backgroundColor: '#F8F8F8',
        borderRadius: 10
    },
    hisIconIcon: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        marginTop: 5
    },
    mediHistTextDetail: {
        textAlign: 'center'
    },
    infoContent: {
        marginLeft: 20
    },
    infoContentTitle: {
        marginTop: 8,
        marginBottom: 8
    },
    contactIcon: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginRight: 10
    },
    contactGroup: {
        flexDirection: 'row'
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
