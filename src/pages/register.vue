<template>
  <base-layout page-title="Register User" previousPage="/main">
    <div class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label>Name</ion-label>
          <ion-input
            type="text"
            placeholder="Bartolo"
            v-model="registerInfo.name"
            required
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Email</ion-label>
          <ion-input
            type="email"
            placeholder="test@gmail.com"
            v-model="registerInfo.email"
            required
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Password</ion-label>
          <ion-input
            v-if="showPassword"
            type="text"
            v-model="registerInfo.password"
            required
          >
          </ion-input>
          <ion-input
            v-if="!showPassword"
            type="password"
            v-model="registerInfo.password"
            required
          >
          </ion-input>
          <ion-button position="end" @click="showPassword = !showPassword">
            <ion-icon :icon="showPassword ? eye : eyeOff"></ion-icon>
          </ion-button>
        </ion-item>
      </ion-list>
      <ion-button expand="full" @click="loginUser">Login</ion-button>
    </div>
  </base-layout>
</template>

<script>
import {
  IonInput,
  IonItem,
  IonButton,
  IonLabel,
  IonList,
  IonIcon,
} from "@ionic/vue";
import { eye, eyeOff } from "ionicons/icons";
export default {
  components: {
    IonInput,
    IonItem,
    IonButton,
    IonLabel,
    IonList,
    IonIcon,
  },
  data() {
    return {
      registerInfo: {
        name: "",
        email: "",
        password: "",
      },
      eye,
      eyeOff,
      showPassword: false,
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
  methods: {
    async loginUser() {
      let user = await this.$store.dispatch("registerUser", this.registerInfo);
      if (user.error) {
        alert(user.error);
      } else {
        this.$router.replace("/login");
      }
    },
  },
};
</script>

<style>
</style>