import { api } from 'boot/axios';
import stateUse from '../Manage/state';
import helperUse from '../helper';

const { loading, msGroups, msQuestions } = stateUse;
const { NotifySucceed, NotifyFail } = helperUse;

const GetGroupsAll = async () => {
  loading.value = true;
  await api
    .post(`MsGroup/GetAll`)
    .then((res) => {
      !res.data.Success && NotifyFail(`${res.data.Message}`);
      Object.assign(msGroups, res.data.Datas);
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      NotifyFail(`GetGroupsAll :${err.message}`);
    });
};
const GetQuestionsAll = async () => {
  loading.value = true;
  await api
    .post(`MsQuestion/GetAll`)
    .then((res) => {
      !res.data.Success && NotifyFail(`${res.data.Message}`);
      Object.assign(msQuestions, res.data.Datas);
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      NotifyFail(`GetQuestionsAll :${err.message}`);
    });
};

export default {
  GetGroupsAll,
  GetQuestionsAll,
};
