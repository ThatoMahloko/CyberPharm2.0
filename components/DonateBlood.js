import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


const DonateBlood = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/donate.png')}/>
        <Text style={styles.heading}>DONATE BLOOD</Text>
        <Text style={styles.text}>Provides information on the imporatnce of blood and will direct you to the SANBS webpage.</Text>
       
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('BookDoctors')}><Text style={styles.text2}>Next</Text></TouchableOpacity>
       
        
    </View>
    )
}

export default DonateBlood

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%'
    },
    icon:{
        marginTop:30,
        width:300, 
        height:300, 
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
    button2:{
        height:'4%',
        width:'35%',
        backgroundColor:'#3E64FF',
        borderRadius:20,
        paddingLeft:15,
        paddingTop:8,
        color:'white',
        marginTop:'40%',
        marginLeft:320
    },
    text2:{
        color:'white'
        
    }
})
