


import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA74cJZvgmeeyWuCVxs-OODwKlNENXfmN0",
    authDomain: "lesson9-bbab4.firebaseapp.com",
    projectId: "lesson9-bbab4",
    storageBucket: "lesson9-bbab4.appspot.com",
    messagingSenderId: "687705199376",
    appId: "1:687705199376:web:2371f68db7082f85c64b95"
};


const app = firebase.initializeApp(firebaseConfig);

export const db = app.database().ref();
export const auth = app.auth();