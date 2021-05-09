import { ref, reactive } from 'vue';
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

export default {
  msGroup,
  msGroupModel,
  ClearMsGroup,
  isShowDialog,
};
