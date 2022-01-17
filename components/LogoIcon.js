import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const LogoIcon = () => {
    return (
        <View>
            <Image style={styles.icon} source={require('../assets/icons/AppIcon.png')}/>
        </View>
    )
}

export default LogoIcon

const styles = StyleSheet.create({
    icon:{
        marginTop:40,
        width:200, 
        height:200, 
        alignSelf:'center'
    }
})
