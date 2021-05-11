import { reactive, ref } from 'vue';

const store = reactive([]);
const loading = ref(false);

export default {
  loading,
  store,
};
