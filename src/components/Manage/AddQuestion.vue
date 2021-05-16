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
        <q-btn flat round :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="props.toggleFullscreen">
          <template v-slot>
            <q-tooltip>{{ props.inFullscreen ? 'fullscreen exit' : 'fullscreen' }}</q-tooltip>
          </template>
        </q-btn>
        <q-separator vertical spaced />
        <q-btn class="q-mr-md" icon="eva-arrow-back-outline" label="Back" @click="() => (isAddQuestion = false)" />
        <q-btn color="secondary" icon="eva-save-outline" label="Save" />
        <q-space />
        <q-input style="width: 350px" clearable dense bordered placeholder="ค้นหา" :disable="loading" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import stateUse from '../../hook/Manage/state';
export default {
  props: {
    questonList: {
      type: Array,
      default: [],
      required: false,
    },
  },
  setup(props) {
    const { questonList } = props;
    const columns = [{ name: 'Name', field: 'Name', label: '', align: 'left' }];
    const { loading, isAddQuestion, msQuestions } = stateUse;
    const rows = ref([...msQuestions]);
    const selected = ref([]);
    const filter = ref(null);

    return { filter, loading, columns, rows, selected, isAddQuestion };
  },
};
</script>

<style scoped>
.q-tab-panel {
  padding: 20px;
}
</style>
