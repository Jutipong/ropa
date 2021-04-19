<template>
  <div class="q-pa-md">
    <!-- card -->
    <CardComponent v-for="(item, index) in store.Questions" :key="item" :question="item" :index="index"></CardComponent>
    <!-- end card -->
  </div>
</template>

<script>
import stateUse from '../hook/Question/store';
import CardComponent from '../components/Question/Card';

export default {
  components: {
    CardComponent,
  },
  setup() {
    const { store } = stateUse;
    return { store };
  },
};
</script>
