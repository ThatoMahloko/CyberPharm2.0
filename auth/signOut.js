import { firebase } from '../config/firebase'
import React from 'react'
import { Alert } from 'react-native'

const signOut = (navigation) => {
    firebase.auth().signOut()
    navigation.navigate('Login')
    Alert.alert('Logged Out!')
}

export default signOut