import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const BookDoctors = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/appointment.png')}/>
        <Text style={styles.heading}>BOOK YOUR DOCTORS APPOINTMENT</Text>
        <Text style={styles.text}> Will be able to book appointments and get notifications before the apooint is due.</Text>
        <View style={styles.btns}>
        <TouchableOpacity style={styles.button} >Prev</TouchableOpacity>
        <TouchableOpacity style={styles.button2}>Next</TouchableOpacity>
        </View>
        
    </View>
    )
}

export default BookDoctors

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%'
    },
    icon:{
        marginTop:40,
        width:350, 
        height:350, 
        alignSelf:'center'
    },
    heading:{
        fontSize:35,
        marginTop:80,
        textAlign:'center',
        color:'#054EDE',
        fontWeight:'bold',
    },
    text:{
        marginTop:50,
        textAlign:'center',
        color:'#00A48F',
        fontSize:20
    },
    button:{
        height:33,
        width:82,
        backgroundColor:'#3E64FF',
        borderRadius:20,
        marginLeft:-20,
        paddingLeft:30,
        paddingTop:8,
        color:'white',
        marginTop:100
    },
    btns:{
        flexDirection:'row',
    },
    button2:{
        height:33,
        width:82,
        backgroundColor:'#3E64FF',
        borderRadius:20,
        paddingLeft:15,
        paddingTop:8,
        color:'white',
        marginTop:100,
        marginLeft:270
    },
})
