import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeHFjMcEL6r5OadwMEiWdj7tpdP7BhQw4",
    authDomain: "breezy-stores.firebaseapp.com",
    databaseURL: "https://breezy-stores.firebaseio.com",
    projectId: "breezy-stores",
    storageBucket: "breezy-stores.appspot.com",
    messagingSenderId: "728431970880",
    appId: "1:728431970880:web:78851064f2de7813276da5",
    measurementId: "G-29DHFVB7K0"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;