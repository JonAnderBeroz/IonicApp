<template>
  <base-layout page-title="Note detail" previousPage="/notes">
    <h2>Detail page</h2>
    <ion-item>
      <ion-label>Title of the note</ion-label>
      <ion-input v-model="noteData.title"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Description note</ion-label>
      <ion-textarea v-model="noteData.description"></ion-textarea>
    </ion-item>
    <ion-item>
      <ion-label>Select start date</ion-label>
      <ion-datetime
        display-format="MM-DD-YYYY"
        placeholder="Select Date"
        max="2099"
        :min="year"
        v-model="noteData.eventStart"
      ></ion-datetime>
    </ion-item>
    <ion-item>
      <ion-label>Select end date</ion-label>
      <ion-datetime
        display-format="MM-DD-YYYY"
        placeholder="Select Date"
        max="2099"
        :min="year"
        v-model="noteData.eventEnd"
      ></ion-datetime>
    </ion-item>
    <ion-item>
      <ion-label>Select time</ion-label>
      <ion-datetime
        display-format="hh:mm a"
        placeholder="Select Date"
        v-model="noteData.eventTime"
      ></ion-datetime>
    </ion-item>
    <ion-button expand="full" @click="addNote"> Add</ion-button>
  </base-layout>
</template>
<script>
import { IonDatetime, IonLabel, IonButton, IonItem, toastController,IonInput,IonTextarea  } from "@ionic/vue";
export default {
  components: {
    IonDatetime,
    IonLabel,
    IonButton,
    IonItem,
    IonInput,
    IonTextarea
  },
  data() {
    return {
      year: "",
      noteData: {
        title: "",
        description: "",
        eventStart: "",
        eventEnd: "",
        eventTime: "",
      },
    };
  },
  methods: {
    callFunction: function () {
      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      this.year = currentDateWithFormat.split("/")[0];
    },
    async addNote() {
      if (this.noteData.eventStart > this.noteData.eventEnd) {
        const toast = await toastController
        .create({
          message: 'Invalid Date',
          duration: 2000,
        })
        return toast.present();
      } else {
        console.log('validDate');
        if (this.noteData.eventStart) {
          this.noteData.eventStart = this.noteData.eventStart.split("T")[0];  
        }
        if (this.noteData.eventEnd) {
          this.noteData.eventEnd = this.noteData.eventEnd.split("T")[0];  
        }
        if(this.noteData.eventTime){
          this.noteData.eventTime = this.noteData.eventTime.split("T")[1].split('.')[0];
          this.noteData.eventTime = this.noteData.eventTime.substring(0,this.noteData.eventTime.length-3);
        }
        this.$store.dispatch("addNote", this.noteData);
        this.$router.replace("/notes")
      }
      
    },
  },
  mounted() {
    this.callFunction();
  },
};
</script>