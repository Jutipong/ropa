import { ref, reactive } from 'vue';
import { api } from 'boot/axios';
import helperUse from '../helper';
import groupsUse from './state';
import qTableUse from './tableDetail';

const { NotifySucceed, NotifyFail } = helperUse;
const { OnRequest, pagination } = qTableUse;
const { loading } = groupsUse;
const isShowDialog = ref(false);
const msGroupModel = {
  IdGroup: null,
  Name: null,
  IsActive: true,
  CreateBy: null,
  CreateDate: null,
  UpdateBy: null,
  UpdateDate: null,
};
const msGroup = reactive({ ...msGroupModel });
const ClearMsGroup = () => {
  Object.assign(msGroup, msGroupModel);
};

const Action = async (req, action) => {
  loading.value = true;
  await api
    .post(`MsGroup/${action}`, req)
    .then((res) => {
      res.data.Success
        ? NotifySucceed(`${action}: ${res.data.Message}`)
        : NotifyFail(`${action}: ${res.data.Message}`);
      isShowDialog.value = false;
      OnRequest({
        pagination: pagination.value,
      });
      loading.value = false;
    })
    .catch((err) => {
      isShowDialog.value = false;
      loading.value = false;
      NotifyFail(err.message);
    });
};

export default {
  msGroup,
  msGroupModel,
  isShowDialog,
  ClearMsGroup,
  Action,
};
