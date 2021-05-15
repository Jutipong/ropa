<template>
  <div class="q-pa-md">
    <q-card>
      <q-tabs v-model="tab" align="left" inline-label outside-arrows mobile-arrows active-color="primary" indicator-color="primary">
        <q-tab name="sort" label="Sort" />
        <q-tab name="reference" label="Reference" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel :style="{ padding: isAddQuestion ? '2px 0px 0px 0px' : '0px 16px 16px 16px' }" name="sort">
          <div v-if="!isAddQuestion">
            <QuestionSortComponent></QuestionSortComponent>
          </div>
          <div v-else>
            <AddQuestionComponent></AddQuestionComponent>
          </div>
        </q-tab-panel>
        <q-tab-panel name="reference"> </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import QuestionSortComponent from '../components/Manage/QuestionSort';
import AddQuestionComponent from '../components/Manage/AddQuestion';
import stateUse from '../hook/Manage/state';
import questionSortUse from '../hook/Manage/questionSort';

export default {
  components: {
    QuestionSortComponent,
    AddQuestionComponent,
  },
  setup() {
    const { isAddQuestion } = stateUse;
    const { GetGroupsAll, GetQuestionsAll } = questionSortUse;
    const tab = ref('sort');

    onMounted(async () => {
      await GetGroupsAll();
      await GetQuestionsAll();
    });

    return { tab, isAddQuestion };
  },
};
</script>

<!-- <style scoped vars="{ isAddQuestion }">
.q-tab-panel {
    padding: 0px;
}
</style> -->
