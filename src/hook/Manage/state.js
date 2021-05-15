import { reactive, ref } from 'vue';

const msGroups = reactive([]);
const msQuestions = reactive([]);
const loading = ref(false);
const isAddQuestion = ref(false);
const IdGroupSelected = ref(null);

export default {
  loading,
  msGroups,
  msQuestions,
  isAddQuestion,
  IdGroupSelected,
};
