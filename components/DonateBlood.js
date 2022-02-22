import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const DonateBlood = (props) => {
    return (
        <View style={styles.contactContainer}>
            <View><Image source={require('../assets/donate blood.jpg')} style={styles.img} />

                <Text style={styles.header}>DONATE BLOOD <br />HELP SAVE A LIFE</Text>


                <Text style={styles.text}>Provides information on the importance<br />
                    of blood donation and will direct you<br />
                    to the SANBS webpage.</Text>

                    <TouchableOpacity style={styles.button}>
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
        width: 350,
        height: 300,
        marginTop: 30,
    },
    header: {
        marginTop: 60,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#054EDE',
        marginLeft: 50
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
        marginTop: 150, 
        marginLeft: 360 
    },
    btn: {
        paddingLeft: 15,
        color: '#fff',
        paddingTop: 4
    }
})
