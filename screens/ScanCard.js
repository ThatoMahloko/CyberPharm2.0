import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, Touchable, ImageBackground, Alert, Platform } from 'react-native'
import { launchCamera, launchImageLibrary, } from 'react-native-image-picker'
import * as ImagePicker from 'expo-image-picker'
import { db } from '../config/firebase'
import getUSER from '../config/user'


const ScanCard = () => {

  const [image, setImage] = useState(null);



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


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.getCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera permission to make this work!')
        }
      }
    })();
  }, [])

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri)
    }
  }


  const saveImage = () => {
    const ud = getUSER();
    console.log(ud);

    if (image !== null) {
      db.collection('VaxCards').doc(ud).collection('SavedCards').add(
        {
          SavedImage: image
        }
      ).then(() => {
        Alert.alert('Image has been saved successfully!')
      }).catch((error) => {
        console.log('Error adding document', error)
      })
    } else {
      Alert.alert('Image needs to be selected or captured!')
    }

  }

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

      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.text}>Caputure Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={saveImage}>
        <Text style={styles.text}>Save</Text>
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
    height: 470,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 40
  }
})


export default ScanCard
