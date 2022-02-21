import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CloseButton = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.add} >
            <Text style={styles.addText}>x</Text>
        </TouchableOpacity>
    );
};

export default CloseButton;

const styles = StyleSheet.create({
    add: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        marginBottom:-40,
        paddingBottom:10,
        marginLeft:330,
    },
    addText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#fff',
        position: 'relative',
        zIndex: -1
    }
});
