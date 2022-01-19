import { firebase } from '../config/firebase';

const getUSER = (() => {

    const id = firebase.auth().currentUser;

    return id;
})


export default getUSER;