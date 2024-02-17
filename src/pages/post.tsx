import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonItem,
  IonInput,
  IonButton
} from "@ionic/react";


const Post = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        Post a Job
          <IonIcon name="search" slot="icon-only" />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonItem>
        <IonInput placeholder="Enter company name"></IonInput>
      </IonItem>

       <IonItem>
        <IonInput placeholder="Job type"></IonInput>
      </IonItem>

        <IonItem>
       <IonInput placeholder="work experience"></IonInput>
        </IonItem>
       <IonItem>
        <IonInput placeholder="Education"></IonInput>
      </IonItem>

      <IonButton expand="block">Post Job</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Post;