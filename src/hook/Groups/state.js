import { reactive, ref } from 'vue';

const store = reactive([]);
const loading = ref(false);

//#region //ใช้สำหรับ Dialog Action
const isShowDialog = ref(false);
//#endregion

export default {
  loading,
  store,
  isShowDialog,
};
