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
        <q-tab name="sort" label="Sort" />
        <q-tab name="reference" label="Reference" />
        <!-- <q-tab name="movies" label="Movies" /> -->
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="sort">
          <QuestionSortComponent></QuestionSortComponent>
        </q-tab-panel>
        <q-tab-panel name="reference">
          <div class="text-h6">reference</div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import QuestionSortComponent from '../components/Manage/QuestionSort';
export default {
  components: {
    QuestionSortComponent,
  },
  setup() {
    const tab = ref('sort');
    return { tab };
  },
};
</script>
