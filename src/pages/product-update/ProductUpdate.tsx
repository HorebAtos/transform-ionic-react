import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";

interface IProductActionsRouteParams {
    id: string;
}

const ProductUpdate = () => {
    const { id: productId } = useParams<IProductActionsRouteParams>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Update product
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Update product</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol size="12" sizeXs="12">
                            <IonTitle size="small" className="ion-text-start">
                               { productId }
                            </IonTitle>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

        </IonPage>
    );
}

export default ProductUpdate;