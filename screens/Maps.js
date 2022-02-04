import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../config/firebase';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const Maps = ({ navigation }) => {
    const [permission, setPermission] = useState();
    const [currentLatitude, setCurrentLatitude] = useState();
    const [currentLongitude, setCurrentLogitude] = useState();
    const [medicalLocation, setMedicalLocation] = useState([

    ])

    useEffect(() => {
        db.collection("MedicalFascilities")
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMedicalLocation(dis)
            });
    }, [])


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


    const [pin, setPin] = useState({
        latitude: -28.72186009301135,
        longitude: 24.7457629814744,
    })

    const [region, setRegion] = useState({
        latitude: -28.72186009301135,
        longitude: 24.7457629814744,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                    rankby: "distance"
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    setRegion({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    })
                }}
                query={{
                    key: 'AIzaSyCqHU8b6qdNaReZQDXDJwoG8qL5s2v9f5U',
                    language: 'en',
                    components: "country:us",
                    type: 'establishment',
                    radius: 30000,
                    location: `${region.latitude}, ${region.longitude}`
                }}
                styles={{
                    container: { flex: 0, position: 'absolute', width: "90%", zIndex: 1, marginTop: 20, alignSelf: 'center' },
                    listView: { backgroundColor: "white" }
                }}
            />

            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -28.72186009301135,
                    longitude: 24.7457629814744,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider="google"
            >



                {
                    //constidional render start
                    permission !== 'granted' ?
                        <Marker coordinate={{

                            latitude: -28.72186009301135,
                            longitude: 24.7457629814744,
                        }}


                            draggable={true}
                            onDragStart={(e) => {
                                console.log("Drag start", e.nativeEvent.coordinate)
                            }}
                            onDragEnd={(e) => {
                                setPin({
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude: e.nativeEvent.coordinate.longitude
                                })
                            }}
                        >
                            <Callout>
                                <Text>I'm here</Text>
                            </Callout>
                        </Marker>
                        :
                        <Marker coordinate={{

                            latitude: currentLatitude,
                            longitude: currentLongitude,
                        }}


                            draggable={true}
                            onDragStart={(e) => {
                                console.log("Drag start", e.nativeEvent.coordinate)
                                navigation.navigate('FacilityInfo')
                            }}
                            onDragEnd={(e) => {
                                setPin({
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude: e.nativeEvent.coordinate.longitude
                                })
                            }}

                        >
                            <Callout>
                                <Text>I'm here</Text>
                            </Callout>
                        </Marker>
                    //constidional render end

                }


                {

                    medicalLocation.map((medi) => {
                        console.log(medi.longitude, medi.latitude, "hello")
                        return (
                            <>
                                <Marker coordinate={{
                                    latitude:parseFloat(medi.latitude) ,
                                    longitude: parseFloat(medi.longitude),
                                }}


                                    draggable={true}
                                    onDragStart={(e) => {
                                        console.log("Drag start", e.nativeEvent.coordinate)
                                        navigation.navigate('FacilityInfo', medi)
                                    }}
                                    onDragEnd={(e) => {
                                        setPin({
                                            latitude: e.nativeEvent.coordinate.latitude,
                                            longitude: e.nativeEvent.coordinate.longitude
                                        })
                                    }}
                                >

                                    <Callout>
                                        <Text>MedicalFascility</Text>
                                    </Callout>
                                </Marker>

                            </>
                        )
                    })
                }



                {
                    // <Circle
                    //     center={pin}
                    //     radius={1000} />
                }
            </MapView>
        </View>
    )
}

export default Maps

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
})
