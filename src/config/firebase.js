import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjfwlBsER3VyEniH1mnaYQV4S6ty0xUDk",
    authDomain: "eventos-47ebc.firebaseapp.com",
    databaseURL: "https://eventos-47ebc.firebaseio.com",
    projectId: "eventos-47ebc",
    storageBucket: "eventos-47ebc.appspot.com",
    messagingSenderId: "407073254416",
    appId: "1:407073254416:web:284541f8e3dd4218b6ae95"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);