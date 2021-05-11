import { reactive, ref } from 'vue';
import { api } from 'boot/axios';

const store = reactive([]);
const loading = ref(false);

export default {
  loading,
  store,
};
