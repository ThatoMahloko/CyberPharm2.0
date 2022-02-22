import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const DonateBlood = ({navigation}) => {
    return (
        <View style={styles.contactContainer}>
            <View><Image source={require('../assets/donate.png')} style={styles.img} />

                <Text style={styles.header}>DONATE BLOOD HELP SAVE A LIFE</Text>


                <Text style={styles.text}>Provides information on the importance
                    of blood donation and will direct you
                    to the SANBS webpage.</Text>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookDoctors')}>
                        <Text style={styles.btn}>Next</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default DonateBlood

const styles = StyleSheet.create({
    contactContainer: {
        width: '100%',
        backgroundColor: '#fff', 
        height: '100%'
    },
    img: {
        marginTop:40,
        width:300, 
        height:300, 
        alignSelf:'center'
    },
    header: {
        marginTop: 60,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#054EDE',
        textAlign:'center'
    },
    text: {
        marginTop: 30,
        fontSize: 20,
        color: '#00A48F',
        textAlign: 'center',

    },
    button: {
        width: 82,
        height: 33,
        borderRadius: 20,
        backgroundColor: '#3E64FF',
        marginTop: 70, 
        marginLeft: 300 
    },
    btn: {
        paddingLeft: 15,
        color: '#fff',
        paddingTop: 5
    }
})
