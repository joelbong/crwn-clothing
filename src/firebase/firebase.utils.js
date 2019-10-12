import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3rDNUPaDjtlJJe96socaWLvhagcm7DZw",
    authDomain: "crwn-db-6c5a6.firebaseapp.com",
    databaseURL: "https://crwn-db-6c5a6.firebaseio.com",
    projectId: "crwn-db-6c5a6",
    storageBucket: "crwn-db-6c5a6.appspot.com",
    messagingSenderId: "69917857951",
    appId: "1:69917857951:web:52d99d2dd61f8686aceaaa",
    measurementId: "G-Q8R7YJTY3L"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exist) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
           console.log('Error ccreating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase