import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { useHistory } from 'react-router';
const Home: React.FC = () => {
  const routerHistory = useHistory();
  const scanCode = async () => {
    const data = await BarcodeScanner.scan();
    routerHistory.push(`/product-update/${data.text}`);
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
                  <IonButton color="dark" expand="block" onClick={() => scanCode()}>
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
                  <IonButton routerLink={`/product-update/${'asdasd'}`}>
                    banana
                  </IonButton>
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

