import Phaser from './phaser.js';
import { firebaseApp } from './firebase.js';
import { getFirestore, doc, getDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

export default class MenuScene extends Phaser.Scene {
  async create() {
    const db = getFirestore(firebaseApp);
    await updateDoc(doc(db, 'maps', 'map1'), {'4,4': 'skull'});
    const map1 = await getDoc(doc(db, 'maps', 'map1'));
    console.log(map1.data());
  }
}