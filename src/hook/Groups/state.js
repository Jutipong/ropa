import { reactive, ref } from 'vue';

const store = reactive([]);
const isLoading = ref(false);
const loading = ref(false);

export default {
  isLoading,
  loading,
  store,
};
