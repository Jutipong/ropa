import { api } from 'boot/axios';
import stateUse from '../Manage/state';
import helperUse from '../helper';

const { loading, groupSelected } = stateUse;
const { NotifySucceed, NotifyFail } = helperUse;


const Action = async (questions) => {
    let req = {
        Questions: questions.value,
        IdGroup: groupSelected.value.value
    }
    let result = false;
    loading.value = true;
    await api
        .post(`ConfigGroupQuestion/Action`, req)
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
    Action
}