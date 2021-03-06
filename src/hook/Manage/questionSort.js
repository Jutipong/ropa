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

const GetQuestionsById = async (IdGroup) => {
  loading.value = true;
  let result = [];
  await api
    .get(`ConfigGroupQuestion/GetQuestionById?IdGroup=${IdGroup.value.value}`)
    .then((res) => {
      !res.data.Success && NotifyFail(`${res.data.Message}`);
      loading.value = false;
      result = res.data.Datas || [];
    })
    .catch((err) => {
      loading.value = false;
      NotifyFail(`GetQuestionsAll :${err.message}`);
    });
  return result;
};


const ActionSort = async (configGroupQuestion) => {
  let result = false;
  loading.value = true;
  debugger;
  configGroupQuestion.value.forEach((item, inex) => {
    debugger;
    item.Order = (inex + 1)
  });

  await api
    .post(`ConfigGroupQuestion/ActionSort`, configGroupQuestion.value)
    .then((res) => {
      debugger;
      (result = res.data.Success)
        ? NotifySucceed(res.data.Message)
        : NotifyFail(`${res.data.Message}`);
      loading.value = false;
    })
    .catch((err) => {
      loading.value = false;
      NotifyFail(`GetQuestionsAll :${err.message}`);
    });
  return result;
};

export default {
  GetGroupsAll,
  GetQuestionsAll,
  GetQuestionsById,
  ActionSort
};
