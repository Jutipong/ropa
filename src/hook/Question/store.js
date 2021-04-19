import { reactive } from 'vue';
import questionsStore from '../MockData.js';

const questionsData = reactive(questionsStore.questions);

export default {
  questionsData,
};

// export function state() {
//   return {
//     questionsData,
//   };
// }
