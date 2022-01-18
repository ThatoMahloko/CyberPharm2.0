import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Touchable, ImageBackground, Alert } from 'react-native'
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker'
import * as ImagePicker from 'expo-image-picker'
const ScanCard = () => {

    const [image, setImage] = useState(null);

    const removeImage = () => {
        setImage('')
        Alert.alert('Image removed')
    }


    // const openCamera = () => {
    //     const options = {
    //         title: 'Select Image',
    //         customButtons: [
    //           {
    //             name: 'customOptionKey',
    //             title: 'Choose Photo from Custom Option'
    //           },
    //         ],
    //         storageOptions: {
    //           skipBackup: true,
    //           path: 'images',
    //         },
    //     };

    //     launchImageLibrary(options, response => {
    //         console.log('Response = ', response);
    //         if (response.didCancel) {
    //           console.log('User cancelled image picker');
    //         } else if (response.error) {
    //           console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //           console.log(
    //             'User tapped custom button: ',
    //             response.customButton
    //           );
    //           alert(response.customButton);
    //         } else {
    //             setSelectedImage(response);
    //         }


    //         // else {
    //         //     setSelectedImage(response.assets[0].base64)
    //         // }


    //     })
    // }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return (
        <View>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <View>
                <Image source={{ uri: image }} style={styles.imagePreview} />
            </View>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <Text style={styles.text}>Select Image</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={removeImage}>
                <Text style={styles.text}>Remove Image</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: '#000',
        width: '80%'
    },
    imagePreview: {
        backgroundColor: "#eee",
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginTop: 40
    }
})


export default ScanCard
