import { reactive } from 'vue';
import questionsStore from '../MockData.js';

const store = reactive(questionsStore.questions);

export default {
  store,
};
