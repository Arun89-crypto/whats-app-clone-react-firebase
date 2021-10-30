import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "whats-app-clone-react-firebase.firebaseapp.com",
    projectId: "whats-app-clone-react-firebase",
    storageBucket: "whats-app-clone-react-firebase.appspot.com",
    messagingSenderId: "381517309803",
    appId: "1:381517309803:web:3327598fc3f015da4e4e2e",
    measurementId: "G-HL5WKDQ4E7"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
