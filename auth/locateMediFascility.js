import { db, firebase } from '../config/firebase'

const locateMediFascility = () => {
    const location = ""
    db.collection('MediacalFascilities').onSnapshot((snapshot) => {
        const dis = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        location = dis
    })
    return location
}

export default locateMediFascility