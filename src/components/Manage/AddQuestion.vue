<template>
  <div class="full-width">
    <q-table
      color="primary"
      :rows="rows"
      :columns="columns"
      :hide-pagination="true"
      :rows-per-page-options="[0]"
      :filter="filter"
      row-key="IdQuestion"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:top="props">
        <q-btn
          flat
          round
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        >
          <template v-slot>
            <q-tooltip>{{ props.inFullscreen ? 'fullscreen exit' : 'fullscreen' }}</q-tooltip>
          </template>
        </q-btn>
        <q-separator
          vertical
          spaced
        />
        <q-btn
          class="q-mr-md"
          icon="eva-arrow-back-outline"
          label="Back"
          @click="OnBack"
        />
        <q-btn
          color="secondary"
          icon="eva-save-outline"
          label="Save"
          @click="OnAction"
        />
        <q-space />
        <q-input
          style="width: 350px"
          clearable
          dense
          bordered
          placeholder="ค้นหา"
          :disable="loading"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import stateUse from '../../hook/Manage/state';
import addQuestionUse from '../../hook/Manage/addQuestion';

export default {
  setup() {
    const { list, loading, isAddQuestion, msQuestions } = stateUse;
    const { Action } = addQuestionUse;

    const columns = [{ name: 'Name', field: 'Name', label: '', align: 'left' }];
    const rows = ref([]);
    const selected = ref([]);
    const filter = ref(null);

    const OnAction = async () => {
      let res = await Action(selected);
      if (res) {
        isAddQuestion.value = false;
      }
    };

    const OnBack = () => {
      list.value = [];
      isAddQuestion.value = false;
    };

    onMounted(() => {
      let questionlist = msQuestions.map((r) => ({ IdQuestion: r.IdQuestion, Name: r.Name }));
      list.value.forEach((item) => {
        let obj = questionlist.find((r) => r.IdQuestion == item.IdQuestion);
        if (obj != null) {
          obj.IdConfigGroupQuestion = item.IdConfigGroupQuestion;
          obj.IdGroup = item.IdGroup;
          obj.IsActive = item.IsActive;
          obj.CreateDate = item.CreateDate;
          obj.CreateBy = item.CreateBy;
          obj.Order = item.Order;
        }
      });
      rows.value = questionlist;
      selected.value = list.value;
    });

    return { filter, loading, columns, rows, selected, isAddQuestion, OnAction, OnBack };
  },
};
</script>

<style scoped>
.q-tab-panel {
  padding: 20px;
}
</style>
