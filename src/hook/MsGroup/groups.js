import { reactive, ref } from 'vue';
import { api } from 'boot/axios';
import { Notify } from 'quasar';

const store = reactive([]);
const loading = ref(false);

const GetGroups = async (req) => {
  let totalRows = 0;
  let datas = [];
  await api
    .post(`MsGroup/Inquiry`, req)
    .then((res) => {
      datas = res.data.Datas;
      totalRows = res.data.Total;
    })
    .catch((err) => {
      loading.value = false;
      Notify.create({
        color: 'negative',
        message: err.message,
        icon: 'report_problem',
      });
    });

  return { datas, totalRows };
};

export default {
  loading,
  store,
  GetGroups
};
