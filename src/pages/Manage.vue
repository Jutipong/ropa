<template>
  <div class="q-pa-md">
    <!-- content -->

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
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
</template>
<!-- end content -->

<script>
import { ref } from 'vue';
export default {
  setup() {
    const tab = ref('mails');
    return { tab };
  },
};
</script>
