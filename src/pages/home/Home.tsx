import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
const Home: React.FC = () => {
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
                    <IonButton color="dark" expand="block" routerLink="/products-list">
                          products
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
