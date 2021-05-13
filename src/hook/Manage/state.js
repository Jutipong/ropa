import { reactive, ref } from 'vue';

const msGroups = reactive([]);
const msQuestions = reactive([]);
const loading = ref(false);

export default {
  loading,
  msGroups,
  msQuestions,
};
