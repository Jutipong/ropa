import { reactive } from 'vue';
import mockDataUse from '../MockData.js';

const store = reactive(mockDataUse.questions);

const InitDisable = (Referen) => {
  debugger;
  store.Questions.filter((r) => Referen.includes(r.Id)).forEach((r) => {
    r.IsDisable = true;
  });

  //   let Referen = [];
  //   store.Questions.filter((r) => r.Id != id && r.Referer && r.Result === null)
  //     .map((r) => r)
  //     .map((r) => r.Referer)
  //     .forEach((r) => {
  //       const arrs = Object.keys(r).map(function (key) {
  //         return r[key];
  //       });
  //       Referen = Referen.concat(arrs);
  //     });

  //   const result = Referen.some((r) => r === id);
  //   Referen = [];
  //   return result;
};

const CheckCardDisable = (id) => {};

export default {
  InitDisable,
  CheckCardDisable,
};
