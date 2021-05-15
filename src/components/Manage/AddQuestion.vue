<template>
  <!-- <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
      :hide-bottom="hideBottom"
      :hide-selected-banner="hideSelectedBanner"
      :hide-no-data="hideNoData"
      :hide-pagination="hidePagination"
    /> -->

  <div class="full-width">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="IdQuestion"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:top>
        <q-btn icon="eva-arrow-back-outline" label="Back" @click="() => (isAddQuestion = false)" />
        <q-space />
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import stateUse from '../../hook/Manage/state';
export default {
  setup() {
    const columns = [{ name: 'Name', field: 'Name', label: 'Name', align: 'left' }];
    const { isAddQuestion, msQuestions } = stateUse;
    const rows = ref([...msQuestions]);
    const selected = ref([]);

    return { columns, rows, selected, isAddQuestion };
  },
};
</script>

<style scoped>
.q-tab-panel {
    padding: 20px;
}
</style>
