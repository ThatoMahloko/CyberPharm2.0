import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'

const SOS = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <TouchableOpacity style={styles.panicView}>
                <Image style={styles.panicButton} source={require('../assets/icons/SOS.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('AddContacts')}>
                <Image style={styles.add} source={require('../assets/icons/add.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default SOS

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        paddingTop: 260
    },
    panicView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    panicButton: {
        width: 250,
        height: 250,
        alignSelf: 'center',
    },
    add: {
        marginTop: 180,
        marginLeft: 280
    }
})