import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ContactItem = (props) => {
    return (
        <View style={styles.contactContainer}>
            <Image style={styles.avatarIcon} source={require('../assets/icon/avatar.png')} />
            <View>
                <Text>{props.data.FirstName}</Text>
                <Text>{props.data.PhoneNumber}</Text>
            </View>
            <View style={styles.iconGroup}>
               
                <TouchableOpacity style={styles.delete}>
                    <Image style={styles.icon} source={require('../assets/icon/delete.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
        alignSelf:'center', 
        marginRight:58
    }
    ,
    avatarIcon: {
        height: 50,
        width: 50
    }
    ,
    iconGroup: {
        flexDirection: 'row',
        left: 110
    }
    ,
    icon: {
        height: 20,
        width: 20
    }
    ,
    delete: {
        textAlign: 'right',
        padding: 10
    }
})
