<template>
  <base-layout
    :page-title="loadNote ? loadNote.title : 'loading...'"
    previousPage="/notes"
  >
    <ion-item v-if="loadNote">
      <p>{{ loadNote.description }}</p>
    </ion-item>
    <ion-item v-if="loadNote.dateStart">
      <ion-label>Starting date: {{ loadNote.dateStart }}</ion-label>
    </ion-item>
    <ion-item v-if="loadNote.dateEnd">
      <ion-label>Ending date: {{ loadNote.dateEnd }}</ion-label>
    </ion-item>
    <ion-item v-if="loadNote.time">
      <ion-label>Time: {{ loadNote.time }}</ion-label>
    </ion-item>
  </base-layout>
</template>
<script>
import { IonItem, IonLabel } from "@ionic/vue";
export default {
  components: {
    IonItem,
    IonLabel,
  },
  data() {
    return { noteId: this.$route.params.id };
  },
  computed: {
    loadNote() {
      return this.$store.getters.note(this.noteId);
    },
  },
};
</script>