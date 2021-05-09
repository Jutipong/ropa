import { ref, reactive } from 'vue';
import { api } from 'boot/axios';
import { Notify, date } from 'quasar';
import groupsUse from '../Groups/groups';

const { loading } = groupsUse;
const isShowDialog = ref(false);
const msGroupModel = {
  IdGroup: null,
  Name: null,
  IsActive: true,
  CreateDate: null,
  CreateBy: null,
  UpdateDate: null,
  UpdateBy: null,
};
const msGroup = reactive({ ...msGroupModel });
const ClearMsGroup = () => {
  Object.assign(msGroup, msGroupModel);
};

const Action = async (req, action) => {
  switch (action) {
    case 'Create':
      req.IdGroup = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
      req.CreateDate = date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ss.SSSZ');
      req.CreateBy = 'System';
      break;
    case 'Update':
    case 'Delete':
      req.UpdateDate = date.formatDate(Date.now(), 'YYYY-MM-DDTHH:mm:ss.SSSZ');
      req.UpdateBy = 'System';
      break;
  }

  await api
    .post(`MsGroup/${action}`, req)
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
};

export default {
  msGroup,
  msGroupModel,
  isShowDialog,
  ClearMsGroup,
  Action,
};
