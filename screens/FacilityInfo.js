import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, } from 'react-native';

import React, { useState, useEffect } from 'react';

import getDirections from 'react-native-google-maps-directions'

const FacilityInfo = ({ route }) => {
    const [permission, setPermission] = useState();
    const [currentLatitude, setCurrentLatitude] = useState();
    const [currentLongitude, setCurrentLogitude] = useState();

    useEffect(async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
        setPermission(status)
        if (status !== 'granted') {
            console.log('PERMISSION NOT GRANTED')
        }
        const location = await Location.getCurrentPositionAsync();
        setCurrentLatitude(location.coords.latitude);
        setCurrentLogitude(location.coords.longitude);
    })

    const handleGetDirections = () => {
        const data = {
            source: {
                latitude: currentLatitude,
                longitude: currentLongitude
            },
            destination: {
                latitude: route.params.latitude,
                longitude: route.params.longitude
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ],
            // waypoints: [
            //     {
            //         latitude: -33.8600025,
            //         longitude: 18.697452
            //     },
            //     {
            //         latitude: -33.8600026,
            //         longitude: 18.697453
            //     },
            //     {
            //         latitude: -33.8600036,
            //         longitude: 18.697493
            //     }
            // ]
        }

        getDirections(data)
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../assets/Gariep_hospital.jpg')}
            />
            <ScrollView>
                <Text style={styles.mainHeading}>MEDICLINIC GARIEP</Text>
                <Image style={styles.locationLogo} source={require('../assets/locationIcon.png')} />
                <Text style={styles.locationText}>177 Du Toitspan Rd, Memorial Road Area, Kimberley, 8301</Text>
                <Text style={styles.ratingText}>Ratings</Text>
                <Text style={styles.rateNumber}>60.5</Text>
                <Image style={styles.ratings} source={require('../assets/ratings.png')} />
                <Text style={styles.availabilityHeading}>AVAILABILITY</Text>
                <Text style={styles.allspecialistsHeading}>ALL SPECIALISTS</Text>
                <Text style={styles.availDrHeading}>AVAILABLE DOCTORS</Text>
                <Image style={styles.xrayIcon} source={require('../assets/xRay.png')} />
                <Text style={styles.xRayText}>X RAY</Text>
                <Image style={styles.phamacyIcon} source={require('../assets/pharmacy.png')} />
                <Text style={styles.pharmacyText}>PHARMACY</Text>
                <Image style={styles.surgery} source={require('../assets/surgery.png')} />
                <Text style={styles.surgeryText}>SURGERY</Text>
                <Image style={styles.dentist} source={require('../assets/dentist.png')} />
                <Text style={styles.dentistText}>DENTIST</Text>
                <Text style={styles.aboutText}>ABOUT</Text>
                <Text style={styles.info}>Mediclinic Kimberley, a multidisciplinary hospital with spacious rooms and excellent nursing and medical care is situated in Kimberley, capital city of the Northern Cape. Mediclinic Kimberley. 177 Du Toitspan Road, Kimberley, 8301. P O Box 2082, Kimberley, 8300. +27 53 838 1111.</Text>
                <TouchableOpacity onPress={handleGetDirections} >
                    <View style={styles.button}>
                        <Text style={styles.directionText}>Get Direction</Text>

                    </View>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );
};

export default FacilityInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignSelf: 'center',
        height: 100,



    },

    image: {
        height: 248,
        width: 428,

    },
    mainHeading: {
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 30,
        fontSize: 18


    },
    locationLogo: {
        width: 30,
        height: 30,
        marginTop: 25,
        marginLeft: 40
    },
    locationText: {
        marginLeft: 100,
        marginRight: 150,
        marginTop: -35
    },
    ratingText: {
        marginLeft: 40,

        marginTop: 20
    },
    rateNumber: {
        marginLeft: 40,
        fontWeight: 'bold',

    },
    ratings: {
        width: 100,
        height: 100,
        marginLeft: 60,
        marginTop: -59


    },
    availabilityHeading: {
        fontWeight: 'bold',
        marginLeft: 40,
        marginTop: -10,
        fontSize: 13
    },

    allspecialistsHeading: {
        fontWeight: 'bold',
        marginLeft: 140,
        marginTop: -17,
        fontSize: 13

    },

    availDrHeading: {
        marginLeft: 260,
        marginTop: -17,
        fontWeight: 'bold',
        fontSize: 13

    },
    xrayIcon: {
        width: 80,
        height: 50,
        marginTop: 20,
        marginLeft: 30,

    },

    phamacyIcon: {
        width: 74,
        height: 67,
        marginTop: -90,
        marginLeft: 110,
    },
    surgery: {
        width: 42,
        height: 49,
        marginLeft: 220,
        marginTop: -80,
    },

    dentist: {
        width: 75,
        height: 75,
        marginLeft: 290,
        marginTop: -93,

    },

    xRayText: {
        marginLeft: 50,
        marginTop: 10,
        fontWeight: 'bold',
    },
    pharmacyText: {
        marginLeft: 110,
        marginTop: 4,
        fontWeight: 'bold',
        fontSize: 13
    },

    surgeryText: {
        marginLeft: 210,
        marginTop: 13,
        fontSize: 13,
        fontWeight: 'bold',
    },
    dentistText: {
        marginLeft: 300,
        fontWeight: 'bold',
        marginTop: -1
    },
    aboutText: {
        marginTop: 40,
        marginLeft: 40,
        fontWeight: 'bold',

    },
    info: {
        marginLeft: 40,
        marginRight: 90,
        marginTop: 10,
        fontSize: 16,

    },
    button: {
        width: 360,
        height: 60,
        backgroundColor: '#3E64FF',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10
    },

    directionText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 15
    }


});
