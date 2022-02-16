import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const LogoIcon = () => {
    return (
        <View>
            <Image style={styles.icon} source={require('../assets/logo.png')}/>
        </View>
    )
}

export default LogoIcon

const styles = StyleSheet.create({
    icon:{
       // marginTop:40,
        width:400, 
        height:400, 
        alignSelf:'center'
    }
})
