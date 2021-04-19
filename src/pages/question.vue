<template>
  <div class="q-pa-md">
    <!-- card -->
    <CardComponent v-for="(item, index) in questionsData.Questions" :key="item" :question="item" :index="index"></CardComponent>
    <!-- end card -->
  </div>
</template>

<script>
import state from '../hook/Question/store';
import CardComponent from '../components/Question/Card';

export default {
  components: {
    CardComponent,
  },
  setup() {
    const { questionsData } = state;
    return { questionsData };
  },
};
</script>
