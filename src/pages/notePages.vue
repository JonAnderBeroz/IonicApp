<template>
  <ion-page>
    <ion-header>
      <ion-title>Mi notes</ion-title>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label
            ><h1>Title</h1>
            <p>Description</p></ion-label
          >
          <ion-checkbox slot="end"> </ion-checkbox>
          <ion-button slot="end">
            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
          </ion-button>
        </ion-item>
        <ion-item>
          <ion-label
            ><h1>Title</h1>
            <p>Description</p></ion-label
          >
          <ion-checkbox slot="end"> </ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label
            ><h1>Title</h1>
            <p>Description</p></ion-label
          >
          <ion-checkbox slot="end"> </ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label
            ><h1>Title</h1>
            <p>Description</p></ion-label
          >
          <ion-checkbox slot="end"> </ion-checkbox>
        </ion-item>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab> 
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonList,
  IonItem,
  IonCheckbox,
  IonIcon,
  IonFab,
  IonFabButton,
  IonButton,
} from "@ionic/vue";
import { add, trash } from "ionicons/icons";
export default {
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonList,
    IonItem,
    IonCheckbox,
    IonIcon,
    IonFab,
    IonFabButton,
    IonButton,
  },
  data() {
    return { add, trash };
  },
};
</script>