import { ref, reactive } from 'vue';
import { api } from 'boot/axios';
import helperUse from '../helper';
import groupsUse from '../Groups/groups';

const { NotifySucceed, NotifyFail } = helperUse;
const { loading } = groupsUse;
const isShowDialog = ref(false);
const msGroupModel = {
  IdGroup: null,
  Name: null,
  IsActive: true,
};
const msGroup = reactive({ ...msGroupModel });
const ClearMsGroup = () => {
  Object.assign(msGroup, msGroupModel);
};

const Action = async (req, action) => {
  await api
    .post(`MsGroup/${action}`, req)
    .then((res) => {
      res.data.Success ? NotifySucceed(res.data.Message) : NotifyFail(res.data.Message);
      isShowDialog.value = false;
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
