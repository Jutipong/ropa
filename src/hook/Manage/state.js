import { reactive, ref } from 'vue';

const msGroups = reactive([]);
const msQuestions = reactive([]);
const loading = ref(false);
const isAddQuestion = ref(false);
const groupSelected = ref(null);
const list = ref([]);

export default {
  loading,
  msGroups,
  msQuestions,
  isAddQuestion,
  groupSelected,
  list
};
