import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonButton, IonInput,IonLabel,IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import  useNavigate  from 'use-navigation'
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";

function ForgotPassword()  {
 
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
      if (loading) return;
      //if (user) navigate("/dashboard");
    }, [user, loading]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reset Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <form className="ion-padding">
    Please enter the email address of your account      

      <IonItem>
    <IonLabel position="floating">Email address</IonLabel>
    <IonInput placeholder="E-mail address" value={email} 
          onIonChange={(e)   => setEmail(e.target.value)}/>
  </IonItem>

 
  <IonButton className="ion-margin-top" type="submit" expand="block"
   onClick={() => sendPasswordReset(email)}>
  Send password reset email
  </IonButton>

        </form>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword ;
