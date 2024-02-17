import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonButton,
    IonIcon,
    IonToolbar,
    IonInput,
    IonLabel,
    IonItem,
    
  } from "@ionic/react"
  import React from "react"
  import { logoFacebook, logoGoogle,} from 'ionicons/icons'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


import { auth, logInWithEmailAndPassword, signInWithGoogle,signInWithFacebook } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";
  

const Login = () => {

  
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [user, loading] = useAuthState(auth);
       
        
        //  track the authentication state of the user
        useEffect(() => {
          if (loading) {
            // maybe trigger a loading screen
            return;
          }
    
        }, [user, loading]);



    return (
      <IonPage>
        <IonToolbar>
          <IonHeader>
          
          </IonHeader>
          
        </IonToolbar>
      
        <IonContent className="ion-padding">
          
          
        <IonTitle id='header'>WorkXP!</IonTitle>
          
      <div className='container'>
      <div className='signin'>
  
      <h6>SIGN IN WITH</h6>
  
  <IonButton onClick={signInWithFacebook} ><IonIcon icon={logoFacebook}></IonIcon>FACEBOOK</IonButton> 
  <IonButton onClick={signInWithGoogle}><IonIcon icon={logoGoogle}></IonIcon> GOOGLE</IonButton> 
                <hr/>
  
          <form>
          <IonItem>
          <IonLabel position="floating" >Email </IonLabel>
          <IonInput placeholder="E-mail address" value={email} 
          onIonChange={(e)   => setEmail(e.target.value)}/>
          </IonItem>
          <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" placeholder="Enter password" value={password}
           onIonChange={(e) => setPassword(e.target.value)}/>
          </IonItem><hr/>
  
          <p>
          <Link  to={"Register"} >Register</Link>
          </p>
         <p>
         <IonLabel position="floating">
          <Link  to={"forgotpassword"}>Forget Password</Link>
          </IonLabel>
          </p>


          <IonButton onClick={() => logInWithEmailAndPassword(email, password)}>SIGN IN</IonButton> 
         
          </form>
      </div>
      </div>
        </IonContent>
      </IonPage>
    );
  };

  export default Login;