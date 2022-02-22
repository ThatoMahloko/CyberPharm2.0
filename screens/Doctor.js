import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, Button, TouchableOpacity, Linking, ScrollView, SafeAreaView } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'
import { Avatar, Badge } from 'react-native-elements';

const Doctor = ({ navigation, route }) => {
    const triggerCall = () => {
        Linking.openURL(route.params.Phone)
    };
    const triggerMail = () => {
        Linking.openURL(route.params.Email)
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
                        source={{ uri: route.params.ProfileImage }}
                        size="large"

                    />

                    {
                        route.params.Status === false ?
                            <Badge
                                status="error"
                                size="large"
                                containerStyle={{ position: 'relative', top: -80, left: 20, }}
                            />
                            :
                            <Badge
                                status="success"
                                size="large"
                                containerStyle={{ position: 'relative', top: -80, left: 20, }}
                            />
                    }


                    <Title style={styles.drName}>{route.params.Name}</Title>
                    <Text style={styles.drName}>{route.params.Specilization}</Text>

                    <View style={styles.medicalHistory}>
                        <View style={styles.hisIcon}>
                            <Image style={styles.hisIconIcon} source={require('../assets/icons/Doctors/patient.png')} />
                            <Title style={styles.mediHistTextDetail}>{route.params.Patients}</Title>
                            <Text style={styles.mediHistTextDetail}>Patients</Text>
                        </View>
                        <View style={styles.hisIcon}>
                            <Image style={styles.hisIconIcon} source={require('../assets/icons/Doctors/experience.png')} />
                            <Title style={styles.mediHistTextDetail}>{route.params.Experience}</Title>
                            <Text style={styles.mediHistTextDetail}>Experience</Text>
                        </View>
                        <View style={styles.hisIcon}>
                            <Image style={styles.hisIconIcon} source={require('../assets/icons/Doctors/rating.png')} />
                            <Title style={styles.mediHistTextDetail}>{route.params.Ratings}</Title>
                            <Text style={styles.mediHistTextDetail}>Ratings</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.infoContent}>
                    <Title style={styles.infoContentTitle}>About Doctor</Title>
                    <Paragraph>
                    {route.params.About}
                    </Paragraph>
                    <Title style={styles.infoContentTitle}>Working Time</Title>
                    <Paragraph>{route.params.WorkingTime}</Paragraph>
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

                    <TouchableOpacity style={styles.contactGroup} onPress={triggerCall} en>
                        <Image style={styles.contactIcon} source={require('../assets/icons/Doctors/contact/call.png')} />
                        <View>
                            <Title>Audio Call</Title>
                            <Paragraph>Call your doctor directly</Paragraph>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity disabled={false} style={styles.button} onPress={() => navigation.navigate('Appointments',route.params)}>
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
