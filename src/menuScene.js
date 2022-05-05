import Phaser from './phaser.js';
import { firebaseApp } from './firebase.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js';

export default class MenuScene extends Phaser.Scene {
  async create() {
    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        let progress = 0;
        const userDoc = await getDoc(doc(db, 'users', uid));
        const userData = userDoc.data();
        if (userData) {
          progress = userData.progress;
        } else {
          await setDoc(doc(db, 'users', uid), {'progress': progress});
        }
        const mapDoc = await getDoc(doc(db, 'maps', progress.toString()));
        const map = mapDoc.data()
        console.log(map);
      }
    });
  }
}