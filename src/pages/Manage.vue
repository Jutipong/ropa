<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs
        v-model="tab"
        align="left"
        inline-label
        outside-arrows
        mobile-arrows
        active-color="primary"
        indicator-color="primary"
      >
        <q-tab name="group" label="Group" />
        <q-tab name="alarms" label="Alarms" />
        <!-- <q-tab name="movies" label="Movies" /> -->
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="group">
          <div class="text-h6">Mails</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <!-- <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel> -->
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const tab = ref('group');
    return { tab };
  },
};
</script>
