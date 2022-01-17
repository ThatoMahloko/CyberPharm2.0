import { getAuth, updatePassword } from "firebase/auth";
import { firebase } from '../config/firebase'
import { Alert } from 'react-native'

const restPassword = (email) => {
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            Alert.alert("Password reset email sent!")
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert(errorMessage, ": " + errorCode)
        })
}

export default restPassword