import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'

const Appointments = () => {
    return (
        <View>
            <Text></Text>
            <Title>Available Time</Title>
            <View style={styles.timeColumn}>
                <View style={styles.timeRow}>
                    <TouchableOpacity style={styles.hourCard}><Text>9:00  AM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>9:30  AM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>10:00 AM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>10:30 AM</Text></TouchableOpacity>
                </View>
                <View style={styles.timeRow}>
                    <TouchableOpacity style={styles.hourCard}><Text>12:00 PM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>12:30 PM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>01:30 PM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>02:00 AM</Text></TouchableOpacity>
                </View>
                <View style={styles.timeRow}>
                    <TouchableOpacity style={styles.hourCard}><Text>03:00 PM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>04:30 PM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>05:00 PM</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.hourCard}><Text>05:30 AM</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Appointments

const styles = StyleSheet.create({
    timeColumn: {
        flexDirection: 'column', 
        alignItems:'center'
    },
    timeRow: {
        flexDirection: 'row'
    },
    hourCard: {
        padding: 4,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'grey',
        margin: 5, 
        borderRadius:5, 
        width: 60
    }
})
