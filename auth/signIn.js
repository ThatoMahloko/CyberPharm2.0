import { Alert } from "react-native";
import { firebase } from "../config/firebase";
import { NavigationContainer } from '@react-navigation/native'

const signIn = (email, password, navigation) => {

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            Alert.alert("Successfully Signed In!");
            navigation.navigate("Home")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorMessage, ": " + errorCode)
        })

}
export default signIn