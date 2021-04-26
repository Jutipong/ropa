// import { reactive } from 'vue';
import mockDataUse from '../MockData';
import storeUse from './state';

const { store, isLoading } = storeUse;

const GetGroups = () => {
  isLoading.value = true;
  setTimeout(() => {
    //mock get data from API
    Object.assign(store, mockDataUse.groups);
    isLoading.value = false;
  }, 2000);
};

export default {
  GetGroups,
};
