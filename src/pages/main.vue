<template>
  <base-layout page-title="Notist">
    <ion-button  expand="block" router-link="/login">Login</ion-button>
    <ion-button expand="block" router-link="/register">Register </ion-button>
  </base-layout>
</template>

<script>
import { IonButton, } from "@ionic/vue";
export default {
  components: {
    IonButton,
  },
};
</script>

<style>
</style>