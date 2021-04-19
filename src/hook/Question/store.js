import { reactive, ref } from 'vue';
import questionsStore from '../MockData.js';

// const store = reactive(questionsStore.questions);
const store = reactive([]);
const isLoading = ref(false);

export default {
  isLoading,
  store,
};
