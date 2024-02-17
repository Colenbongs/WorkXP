import { initializeApp } from "firebase/app";
 import {
        GoogleAuthProvider, 
        getAuth,
        signInWithPopup,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        sendPasswordResetEmail,
        signOut,
}from "firebase/auth";

import {
        getFirestore,
        query,
        getDocs,
        collection,
        where,
        addDoc,
 } from "firebase/firestore";

const Config ={
    apiKey: "AIzaSyAOgu0wYtlU15U5szMlFJvtuEmLxxnbtEE",
    authDomain: "workxp-29dcb.firebaseapp.com",
    projectId: "workxp-29dcb",
    storageBucket: "workxp-29dcb.appspot.com",
    messagingSenderId: "1035302758591",
    appId: "1:1035302758591:web:38ed7196f2e2988824fe0a",
    measurementId: "G-MBNDDF7TCZ"

}


const app = initializeApp(Config);
const auth = getAuth(app);
 const db = getFirestore(app);

//Google Authentication function
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


//function for signing in using an email and password
const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //function for registering a user with an email and password

  const registerWithEmailAndPassword = async (firstname,lastname,email,phonenumber, password,confirmpassword) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password,);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstname,
        lastname,
        phonenumber,
        confirmpassword,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  //function that will send a password reset link to an email addres
  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  //the logout function
  const logout = () => {
    signOut(auth);
  };

  export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
 
  };