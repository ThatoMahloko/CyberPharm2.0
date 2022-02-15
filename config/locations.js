import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { db } from '../config/firebase';

const locations = () => {
    const [location, setLocation] = useState({})

    db.collection("MedicalFascilities").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const dis = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setLocation(doc.data());
            console.log(location)

            location.map((pinPoint) => {


                setLocation(
                    { latitude: pinPoint.latitude, longitude: pinPoint.longitude }
                )


            })

        });

    });
};
export const theLocation = [location]
export default locations;


