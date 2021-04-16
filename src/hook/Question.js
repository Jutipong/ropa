import { ref, reactive } from 'vue';
import questionsStore from './MockData.js';

const question = reactive(questionsStore.question);

export function state() {
  return {
    question,
  };
}
