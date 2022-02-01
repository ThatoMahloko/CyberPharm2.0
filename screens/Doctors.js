import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, Image, TouchableOpacity } from 'react-native'
import { DataTable,Title } from 'react-native-paper'
const Doctors = ({ navigation }) => {

    return (
        <View>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <TextInput placeholder={'Search'} style={styles.input} />

            <View style={styles.specialtyList}>

                <TouchableOpacity>
                    <View style={styles.specialtyIcon}>
                        <Image style={styles.centerImage} source={require('../assets/icons/brain.png')} />
                        <Text style={styles.specialtyIconText}>Neurology</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.specialtyIcon}>
                        <Image style={styles.centerImage} source={require('../assets/icons/dna.png')} />
                        <Text style={styles.specialtyIconText}>Genetics</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.specialtyIcon}>
                        <Image style={styles.centerImage} source={require('../assets/icons/dentist.png')} />
                        <Text style={styles.specialtyIconText}>Dentistry</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.specialtyIcon}>
                        <Image style={styles.centerImage} source={require('../assets/icons/surgery.png')} />
                        <Text style={styles.specialtyIconText}>Surgery</Text>
                    </View>
                </TouchableOpacity>
            </View>


            {/*create a table of each doctor & each cell should be a touchable opacity*/}


            <View style={styles.doctors}>
                <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
                    <View style={styles.doctor}>
                        <Image style={styles.imageIcon} source={require('../assets/image/thato.jpg')} />
                        <Text style={styles.drName}>DR. Thato Mahloko</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctor')}>
                    <View style={styles.doctor}>
                        <Image style={styles.imageIcon} source={require('../assets/image/thato.jpg')} />
                        <Text style={styles.drName}>DR. Thato Mahloko</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Doctors

const styles = StyleSheet.create({
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 30
    },
    specialtyList: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    specialtyIcon: {
        width: 90,
        height: 90,
        borderRadius: 20,
        backgroundColor: '#1597E5',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerImage: {
        width: 30,
        height: 30,

    },
    specialtyIconText: {
        color: '#fff'
    },
    doctors: {
        alignItems: 'center',
        marginTop: 50,
        width: '100%',
        flexDirection: 'row', justifyContent: 'center'
    },
    doctor: {
        backgroundColor: '#1597E5',
        width: 170,
        height: 170,
        margin: 5,
        borderRadius: 20
    },
    imageIcon: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        borderRadius: 55,
        marginTop: 15
    },
    drName: {
        alignSelf: 'center', 
        color:'#fff', 
        marginTop:20
    },

})
