import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc, setDoc, updateDoc  } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

export default class Firebase {}

Firebase.firebaseApp = initializeApp({
  apiKey: "AIzaSyBN_TrOw4Mw3YvRV9NRHWmCzFhwf8ZuPKs",
  authDomain: "phasertest-fd799.firebaseapp.com",
  databaseURL: "https://phasertest-fd799.firebaseio.com",
  projectId: "phasertest-fd799",
  storageBucket: "phasertest-fd799.appspot.com",
  messagingSenderId: "1086303235228",
  appId: "1:1086303235228:web:4b3c9138404161cbf31159",
  measurementId: "G-2H86F8RGWG"
});
Firebase.db = getFirestore();
Firebase.setMap = async (data) => {
  return await setDoc(doc(Firebase.db, 'maps', 'map1'), data);
}
Firebase.updateMap = async (data) => {
  return await updateDoc(doc(Firebase.db, 'maps', 'map1'), data);
}
Firebase.getMap = async (map) => {
  return await getDoc(doc(Firebase.db, 'maps', map));
}
Firebase.getMaps = async () => {
  return await getDocs(collection(Firebase.db, 'maps'));
}