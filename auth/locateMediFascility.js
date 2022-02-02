import { db, firebase } from '../config/firebase'
import { useState } from 'react'

const locateMediFascility = () => {
    const [location, setLocation] = useState([])
    db.collection('MediacalFascilities').onSnapshot((snapshot) => {
        const dis = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setLocation(dis)
    })
}
export const value = [location]

export default { locateMediFascility }