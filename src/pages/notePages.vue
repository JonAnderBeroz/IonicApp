<template>
  <base-layout page-title="My Notes">
    <ion-list>
      <ion-item>
        <ion-label router-link="/notes/1"
          ><h1>Title</h1>
          <p>Description</p></ion-label
        >
        <ion-checkbox slot="end" > </ion-checkbox>
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
      <ion-fab-button router-link="/notes/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </base-layout>
</template>
<script>
import {
  IonList,
  IonItem,
  IonCheckbox,
  IonIcon,
  IonFab,
  IonFabButton,
  IonLabel
} from "@ionic/vue";
import { add, trash } from "ionicons/icons";
export default {
  components: {
    IonList,
    IonItem,
    IonCheckbox,
    IonIcon,
    IonFab,
    IonFabButton,
    IonLabel
  },
  data() {
    return { add, trash };
  },
};
</script>