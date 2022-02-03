import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { db } from '../config/firebase';


const Maps = () => {
    const [location, setLocation] = useState([
        {
            longitude: -28.72186009301135,
            latitude: 24.7457629814744
        }
        ,
        {
            latitude: -28.74897770884684,
            longitude: 24.75232433527708,
        }
        ,
        {
            latitude: -28.73654265626159,
            longitude: 24.739557355642322,
        }
        ,
        {
            latitude: -28.726063385883364,
            longitude: 24.75580718368292
        }
        ,
        {
            latitude: -28.713545331482006,
            longitude: 24.746176376938823
        }
        ,
    ])

    const _getLocation = async () =>{
        
    }

    useEffect(() => {
        db.collection("MedicalFascilities").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.data()+"000000000000000000000000000000000000000000");
                console.log(doc)
                setLocation(doc)


            });
        });
    }, [])


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
                    // location.map(makrkerPointer => {

                    //     return (
                    //         <Marker coordinate={{

                    //             latitude: makrkerPointer.latitude,
                    //             longitude: makrkerPointer.longitude,
                    //         }}


                    //             draggable={true}
                    //             onDragStart={(e) => {
                    //                 console.log("Drag start", e.nativeEvent.coordinate)
                    //             }}
                    //             onDragEnd={(e) => {
                    //                 setPin({
                    //                     latitude: e.nativeEvent.coordinate.latitude,
                    //                     longitude: e.nativeEvent.coordinate.longitude
                    //                 })
                    //             }}
                    //         >
                    //             <Callout>
                    //                 <Text>I'm here</Text>
                    //             </Callout>
                    //         </Marker>
                    //     )
                    // })


                }

                {
                    // <Marker coordinate={{
                    //     latitude: -28.72186009301135,
                    //     longitude: 24.7457629814744,
                    // }}


                    //     draggable={true}
                    //     onDragStart={(e) => {
                    //         console.log("Drag start", e.nativeEvent.coordinate)
                    //     }}
                    //     onDragEnd={(e) => {
                    //         setPin({
                    //             latitude: e.nativeEvent.coordinate.latitude,
                    //             longitude: e.nativeEvent.coordinate.longitude
                    //         })
                    //     }}
                    // >
                    //     <Callout>
                    //         <Text>I'm here</Text>
                    //     </Callout>
                    // </Marker>
                }



                <Circle
                    center={pin}
                    radius={1000} />
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
})
