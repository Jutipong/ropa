import { ref, reactive } from 'vue';
import { api } from 'boot/axios';
import helperUse from '../helper';
import groupsUse from '../Groups/groups';
import qTableUse from './msGroupTable';

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
  debugger;
  await api
    .post(`MsGroup/${action}`, req)
    .then((res) => {
      res.data.Success ? NotifySucceed(res.data.Message) : NotifyFail(res.data.Message);
      isShowDialog.value = false;
      OnRequest({
        pagination: pagination.value,
      });
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
