import { reactive, ref } from 'vue';

const store = reactive([]);
const isLoading = ref(false);

export default {
  isLoading,
  store,
};
