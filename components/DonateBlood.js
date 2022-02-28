import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { width, height, totalSize } from 'react-native-dimension';


const DonateBlood = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.icon} source={require('../assets/donate.png')}/>
        <Text style={styles.heading}>DONATE BLOOD</Text>
        <Text style={styles.text}>Provides information on the importance of blood and will direct you to the SANBS webpage.</Text>
       
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('BookDoctors')}><Text style={styles.text2}>Next</Text></TouchableOpacity>
       
        
    </View>
    )
}

export default DonateBlood

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height: '100%',
        width: width(100), 
        fontSize: totalSize(2),
    },
    icon:{
        marginTop:30,
        width:300, 
        height:300, 
        alignSelf:'center'
    },
    heading:{
        fontSize:35,
        marginTop:30,
        textAlign:'center',
        color:'#054EDE',
        fontWeight:'bold',
    },
    text:{
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        textAlign:'center',
        color:'#00A48F',
        fontSize:20
    },
    button2:{
        height:'4%',
        width:'35%',
        backgroundColor:'#3E64FF',
        borderRadius:20,
<<<<<<< HEAD
        paddingLeft:50,
        
        paddingTop:5,
        
        color:'white',
        top:'20%',
        marginLeft:'60%'
=======
        paddingLeft:15,
        paddingTop:6,
        color:'white',
        marginTop:'25%',
        marginLeft:300
>>>>>>> 5e3bf3a16aba7e4dd0b14b637d978db47307c1ae
    },
    text2:{
        color:'white'
        
    }
})
