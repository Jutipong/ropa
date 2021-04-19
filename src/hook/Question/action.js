import { reactive } from 'vue';
import mockDataUse from '../MockData.js';

const store = reactive(mockDataUse.questions);

const InitDisable = (Referen) => {
  store.Questions.filter((r) => Referen.includes(r.Id)).forEach((r) => {
    r.IsDisable = true;
  });
};

const CheckCardDisable = (id) => {
  debugger;
  const obj = store.Questions.find((r) => r.Id === id);
  if (obj) {
    debugger;
    store.Questions.filter((r) => obj.Referen.includes(r.Id)).forEach((r) => {
      if (obj.Result) {
        r.IsDisable = false;
      } else {
        r.IsDisable = true;
        r.Result = null;
      }
    });
  }
};

export default {
  InitDisable,
  CheckCardDisable,
};
