import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, 
    IonItem,IonInput,IonCheckbox,IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";


function Register () {
const [firstname, setFname] = useState('')
const [lastname, setLname] = useState('')
const [email, setEmail] = useState('')
const [phonenumber, setNumber] = useState('')
const [password, setPassword] = useState('')
const [confirmpassword, setCpassword] = useState('')
const [user, loading, ] = useAuthState(auth);

const register = () => {
  if (!firstname) alert("Please enter name");
  registerWithEmailAndPassword(firstname,lastname,email,phonenumber, password,confirmpassword);
  
if (password !== confirmpassword){
  alert('Password do not match')
}
if (email.trim() === '' || password.trim() === '') {
  alert('Email address and password required')

};
};
useEffect(() => {
  if (loading) return;
 
}, [user, loading]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create new account</IonTitle>
        </IonToolbar>
      </IonHeader>
   
      <IonContent fullscreen>      
      <form className="ion-padding">
      <IonItem>
    <IonLabel position="floating">First Name</IonLabel>
    <IonInput onIonChange={(e) => setFname(e.target.value)}/>
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Last Name</IonLabel>
    <IonInput onIonChange={(e) => setLname(e.target.value)}/>
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Email</IonLabel>
    <IonInput onIonChange={(e) => setEmail(e.target.value)}/>
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Phone Number</IonLabel>
    <IonInput  onIonChange={(e) => setNumber(e.target.value)}/>
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Password</IonLabel>
    <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.target.value)}/>
  </IonItem>
  <IonItem>
    <IonLabel position="floating">Confirm Password</IonLabel>
    <IonInput type="password" value={confirmpassword} onIonChange={(e) => setCpassword(e.target.value)}/>
  </IonItem>
  <IonItem lines="none">
    <IonLabel>Remember me</IonLabel>
    <IonCheckbox defaultChecked={true} slot="start" />
  </IonItem>
  <IonButton className="ion-margin-top"  expand="block" onClick={register}>
    Register
  </IonButton>

  Already have an account??? <Link to="/login">Login</Link>
  
  <IonButton   expand="block"  onClick={signInWithGoogle}>
    Register with Google
  </IonButton>
</form>

    
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};


export default Register;
