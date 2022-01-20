import { firebase } from '../config/firebase';

const getUSER = (() => {

    const id = firebase.auth().currentUser.uid;

    return id;
})


export default getUSER;