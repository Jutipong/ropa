import mockDataUse from '../MockData';
import storeUse from './state';

const { store, isLoading } = storeUse;

const GetQuestions = () => {
  isLoading.value = true;
  setTimeout(() => {
    //mock get data from API
    Object.assign(store, mockDataUse.questions);
    isLoading.value = false;
  }, 5000);
};

const InitDisable = (Referen) => {
  store.Questions.filter((r) => Referen.includes(r.Id)).forEach((r) => {
    r.IsDisable = true;
  });
};

const CheckCardDisable = (id) => {
  const obj = store.Questions.find((r) => r.Id === id);
  if (obj) {
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
  GetQuestions,
  CheckCardDisable,
};
