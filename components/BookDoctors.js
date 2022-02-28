import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import {  totalSize } from 'react-native-dimension';


const BookDoctors = ({ navigation }) => {
    return (


        <View style={styles.container}>
         
                <Image style={styles.icon} source={require('../assets/appointment.png')} />
                <Text style={styles.heading}>BOOK APPOINTMENT</Text>
                <Text style={styles.text}> Will be able to book appointments and get notifications before the apooint is due.</Text>
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DonateBlood')}><Text style={styles.text2}>Prev</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Facility')}><Text style={styles.text2}>Next</Text></TouchableOpacity>
                </View>

            


        </View>
    )
}

export default BookDoctors

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        height:'100%',
        flex: 1,
        width: '100%', 
        fontSize: totalSize(2),
    },
    icon: {
        marginTop: 30,
        width: 300,
        height: 300,
        alignSelf: 'center'
    },
    heading: {
        fontSize: 35,
        marginTop: 10,
        textAlign: 'center',
        color: '#054EDE',
        fontWeight: 'bold',
    },
    text: {
        marginTop: 20,
        textAlign: 'center',
        color: '#00A48F',
        fontSize: 20,
        marginLeft:20,
        marginRight:20
    },
    button: {
        height: 30,
        width: '30%',
        backgroundColor: '#3E64FF',
        borderRadius: 20,
        right:-20,
        paddingLeft: 40,
        paddingTop: 5,
        textAlign: 'center',
        color: 'white',
        top:'40%',
    },
    btns: {
        flexDirection: 'row',
    },
    button2: {
        height: 30,
        width: '30%',
        backgroundColor:'#3E64FF',
        borderRadius:20,
        paddingLeft:50,
        
        paddingTop:5,
        
        color:'white',
        top:'40%',
        marginLeft:'35%'
    },
    text2: {
        color: 'white',

    }
})
