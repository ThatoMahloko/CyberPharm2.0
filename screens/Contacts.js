import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'

const Contacts = ({ navigation }) => {
    return (
        <View>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            {<Image style={styles.emptyIcon} source={require('../assets/icons/emptyContacts.png')} />}
            <TouchableOpacity onPress={() => navigation.navigate('AddContacts')}>
                <Image style={styles.add} source={require('../assets/icons/add.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    emptyIcon: {
        width: 179,
        height: 187.4,
        alignSelf: 'center',
        marginTop: 100
    },
    add: {
        marginTop: 400,
        marginLeft: 280
    }
})
