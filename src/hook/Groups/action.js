import { api } from 'boot/axios';
import storeUse from './state';

const { store, isLoading } = storeUse;

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
      $q.notify({
        color: 'negative',
        message: err.message,
        icon: 'report_problem',
      });
    });

  return { datas, totalRows };
};

export default {
  GetGroups,
};
