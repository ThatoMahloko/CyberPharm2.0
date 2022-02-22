import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const Facility = () => {
    return (
        <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/facility.png')}/>
        <Text style={styles.heading}>MEDICAL FACILITY</Text>
        <Text style={styles.text}>Should be able to find the nearest medical facility based on their current location and get directions</Text>
        <View style={styles.btns}>
        <TouchableOpacity style={styles.button}>Prev</TouchableOpacity>
        <TouchableOpacity style={styles.button2}>Next</TouchableOpacity>
        </View>
        
    </View>
    )
}

export default Facility

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
        marginTop:150
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
        marginTop:150,
        marginLeft:270
    },
})
