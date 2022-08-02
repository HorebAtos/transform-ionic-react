import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from 'react';
const Home: React.FC = () => {
  const [image, setImage] = useState<string>("");
  const requestPermit = async () => {
    const image = Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
    });
    let image_url = `data:image/jpg;base64,${(await image).base64String}`;
    setImage(image_url);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Home screen
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome user</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeXs="12">
              <IonTitle size="small" className="ion-text-start">
                Shortcuts & navigation
              </IonTitle>
            </IonCol>
            <IonCol sizeXs="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle className="ion-text-center">
                    Products list
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton color="dark" expand="block" routerLink="/product-list">
                    products
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol sizeXs="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle className="ion-text-center">
                    Edit product
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonButton color="dark" expand="block" onClick={() => requestPermit()}>
                    open camera
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol sizeXs="6">
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle className="ion-text-center">
                    Edit product
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  {
                    image && <IonImg src={image} />
                  }
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>

    </IonPage>
  );
};

export default Home;

