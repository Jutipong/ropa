<template>
  <div class="q-pa-md">
    <!-- card -->
    <CardComponent v-for="(item, index) in questionsData.Questions" :key="item" :question="item" :index="index"></CardComponent>
    <!-- end card -->
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { state } from '../hook/Question';
import CardComponent from '../components/Question/Card';

export default {
  components: {
    CardComponent,
  },
  setup() {
    const { questionsData } = state();

    // watch(question.Questions.Result, (val) => {
    //   console.log(val);
    // });

    const options = reactive([
      { label: 'Battery too low', value: 'bat' },
      { label: 'Friend request', value: 'friend', color: 'green' },
      { label: 'Picture uploaded', value: 'upload', color: 'red' },
    ]);

    return { questionsData, options };
  },
};
</script>
