import { firebase } from '../config/firebase'
import getUSER from '../config/user'
import { db } from '../config/firebase';

const openVaccineCard = () => {
    const ud = getUSER();
    const image = "";

    db.collection('VaxCards')
        .doc(ud)
        .collection('SavedCards')
        .onSnapshot((snapshot => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            image = dis
        }))

    return image
}
export default openVaccineCard