import firebase from "firebase";
import 'firebase/auth'
import 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDcSP-lfBS8_yJzKbTTtkbMQEDrleGN3gc",
    authDomain: "olx-clone-d24d9.firebaseapp.com",
    projectId: "olx-clone-d24d9",
    storageBucket: "olx-clone-d24d9.appspot.com",
    messagingSenderId: "423711162768",
    appId: "1:423711162768:web:caaf9f00c4aefb544c3315"
  };

 export default firebase.initializeApp(firebaseConfig)