import { Camera, CameraResultType } from '@capacitor/camera';

import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,IonInput,
  IonList,
  IonModal,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonSelectoption,

} from '@ionic/react';
import { useState} from 'react';
import {
	timerOutline,
	locationOutline,
	logoUsd,
    filter,
    arrowBackOutline,
    timeOutline,
    personOutline,
    peopleOutline,
    chatboxEllipsesOutline,
    cameraOutline,
    imageOutline
} from "ionicons/icons";



   const XPerProfile = () => {
    const [card, setCard] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [text, setText] = useState("");
    const [employment, setCEmployment] = useState("");
    const [quality, setQuality] = useState("");
    
    
console.log(card,subtitle,text,employment,quality)
return (

  <IonPage>
    
			<IonHeader>
				<IonToolbar>
					<IonTitle>Profile</IonTitle>

</IonToolbar>
</IonHeader>
<IonContent>
<IonCard>
  <IonCardHeader>
    
  <IonItem>
						<IonAvatar slot="start">
							<img
								alt="Silhouette of a person's head"
								src="https://ionicframework.com/docs/img/demos/avatar.svg"
							/>
						</IonAvatar>
						<IonCardHeader>
							<IonCardTitle>Card Title</IonCardTitle>
                            <IonInput onIonChange={(e) => setCard(e.target.value)}/>
							<IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonInput onIonChange={(e) => setSubtitle(e.target.value)}/>
						</IonCardHeader>
            
					</IonItem>
  
  </IonCardHeader>

  <IonCardContent>
  <IonIcon icon={ chatboxEllipsesOutline } />

						Here's a small text description for the card content. Nothing more,
						nothing less.
                        <IonInput onIonChange={(e) => setText(e.target.value)}/>
					</IonCardContent>

  </IonCard>

<IonCard>
<IonItem>
								<IonIcon icon={locationOutline} />
								<IonLabel> Location </IonLabel>
                            
							<IonItem>
								
								<IonSelect
									multiple={true}
								>
									<IonSelectOption value="apples">Gauteng</IonSelectOption>
									<IonSelectOption value="oranges">
										Western Cape
									</IonSelectOption>
									<IonSelectOption value="oranges">North West</IonSelectOption>
									<IonSelectOption value="oranges">Limpopo</IonSelectOption>
									<IonSelectOption value="oranges">
										KwaZuluNatal
									</IonSelectOption>
									<IonSelectOption value="oranges">
										Eastern Cape
									</IonSelectOption>
									<IonSelectOption value="oranges">
										Northern Cape
									</IonSelectOption>
									<IonSelectOption value="oranges">Free State </IonSelectOption>
									<IonSelectOption value="bananas"> Mpumalanga</IonSelectOption>
									<IonSelectOption value="oranges">Select All</IonSelectOption>
								</IonSelect>
							</IonItem>
						

								<IonIcon icon={timerOutline} />
                                <IonSelect>
								<IonLabel>  Years </IonLabel>
                             
                                <IonSelectOption>1 year</IonSelectOption>
                                <IonSelectOption>2 year</IonSelectOption>
                                <IonSelectOption>3 year</IonSelectOption>
                                <IonSelectOption>4 year</IonSelectOption>
                                </IonSelect>
                                
								<IonIcon icon={logoUsd} />
								<IonLabel> years </IonLabel>
							</IonItem>
  </IonCard>


  <IonCard>
<IonItem>
								<IonIcon icon={peopleOutline} />
								<IonLabel> Current Employment Type: </IonLabel>
                                <IonInput onIonChange={(e) => setCEmployment(e.target.value)}/>
                </IonItem>
<IonItem>
								<IonIcon icon={timerOutline} />
								<IonLabel> Qualifications </IonLabel>
                                <IonInput onIonChange={(e) => setQuality(e.target.value)}/>
</IonItem>
<IonItem>
								<IonIcon icon={cameraOutline} />
								<IonLabel> Previous Project Snippets</IonLabel>
                <IonItem>
                <IonIcon icon={ imageOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>Photos</IonCardSubtitle>
                  </IonItem>	
 </IonItem>
  </IonCard>

  <IonCard>

  <IonIcon icon={cameraOutline} />
								<IonLabel> Reviews</IonLabel>
                <IonItem slot="start">
                <IonIcon icon={ imageOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>Reviews</IonCardSubtitle>
                  </IonItem>
                  <IonItem slot="">
                <IonIcon icon={ imageOutline } />
									<IonCardTitle>147</IonCardTitle>
									<IonCardSubtitle>Reviews</IonCardSubtitle>
                  </IonItem>
  </IonCard>  

<IonButton>
Send Message
  </IonButton>
  </IonContent>
</IonPage>
);
};

export default XPerProfile;
