<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons  slot="start">
          <ion-back-button :default-href="previousPage"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
        <slot name='username'></slot>
        <ion-buttons slot="end">
            <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content> <slot /> </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from "@ionic/vue";
export default {
  props: ["pageTitle", "previousPage"],
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
  },
};
</script>