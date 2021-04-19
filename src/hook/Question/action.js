import { ref, reactive } from 'vue';
import questionsStore from '../MockData.js';

const questionsData = reactive(questionsStore.questions);

const InitDisable = (id) => {
  let referers = [];
  questionsData.Questions.filter((r) => r.Id != id && r.Referer && r.Result === null)
    .map((r) => r)
    .map((r) => r.Referer)
    .forEach((r) => {
      const arrs = Object.keys(r).map(function (key) {
        return r[key];
      });
      referers = referers.concat(arrs);
    });
    
  const result = referers.some((r) => r === id);
  referers = [];
  return result;
};

export default {
  InitDisable,
};
