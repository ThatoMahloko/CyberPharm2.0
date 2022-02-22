import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DataTable } from 'react-native-paper'

const ContactItem = (props) => {
    return (
        <View style={styles.contactContainer}>
            <DataTable.Row>
                <DataTable.Cell><Image style={styles.avatarIcon} source={require('../assets/icon/avatar.png')} /></DataTable.Cell>
                <DataTable.Cell><Text>{props.data.FirstName}</Text></DataTable.Cell>
                <DataTable.Cell><Text>{props.data.PhoneNumber}</Text></DataTable.Cell>
                <TouchableOpacity style={styles.delete}>
                    <Image style={styles.icon} source={require('../assets/icon/delete.png')} />
                </TouchableOpacity>
            </DataTable.Row>

            <View>

            </View>
            <View style={styles.iconGroup}>


            </View>
        </View>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 58,
        marginTop: 60,
        padding: 0
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
