import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddButton = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.add} onPress={() => navigation.navigate('AddContacts')}>
            <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    add: {
        backgroundColor: '#3E64FF',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        end: -310,
        top: -70,
    },
    addText: {
        textAlign: 'center',
        fontSize: 40,
        color: '#fff',
        position: 'relative',
        zIndex: -1
    }
});
