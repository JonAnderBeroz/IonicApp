<template>
  <base-layout page-title="My Notes">
    <template v-slot:username>
      <ion-label slot="end">{{ currentUser.name }}</ion-label>
    </template>
    <template v-slot:actions-end>
      <ion-button @click="logoutUser">
        <ion-icon :icon="logOut"></ion-icon
      ></ion-button>
    </template>
    <ion-list>
      <ion-item v-for="note in notes" :key="note.id">
        <ion-label router-link="/notes/${note.id}"
          ><h1>{{ note.title }}</h1>
          <p>{{ note.description }}</p></ion-label
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
  IonLabel,
  IonButton,
} from "@ionic/vue";
import { add, trash, logOut } from "ionicons/icons";
export default {
  components: {
    IonList,
    IonItem,
    IonCheckbox,
    IonIcon,
    IonFab,
    IonFabButton,
    IonLabel,
    IonButton,
  },
  data() {
    return { add, trash, logOut };
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
      this.$router.replace("/login");
    },
  },
  mounted() {
    this.$store.dispatch("loadUser");
  },
};
</script>