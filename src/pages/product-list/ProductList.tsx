import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { calendar, personCircle, map, informationCircle, trashBin, pencilSharp, eyeOffSharp, eyeSharp } from 'ionicons/icons';
import "./ProductList.css";
const ProductList = () => {
    return (
        <IonPage>
            <IonToolbar>
                <IonTitle></IonTitle>
            </IonToolbar>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/" />
                </IonButtons>
                <IonTitle>Back Button</IonTitle>
            </IonToolbar>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Products</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    {/* ! item */}
                    <IonItemSliding>
                        <IonItem>
                                <IonLabel>Product name</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="success">
                                <IonIcon icon={eyeSharp}></IonIcon>
                            </IonItemOption>
                            <IonItemOption>
                                <IonIcon icon={pencilSharp}></IonIcon>
                            </IonItemOption>
                            <IonItemOption color="danger">
                                <IonIcon icon={trashBin}></IonIcon>
                            </IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonList>
            </IonContent>

        </IonPage>

    );
}
export default ProductList;