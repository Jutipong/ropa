import { ref, reactive } from 'vue';
import questionsStore from './MockData.js';

const questionsData = reactive(questionsStore.questions);

export function state() {
  return {
    questionsData,
  };
}
