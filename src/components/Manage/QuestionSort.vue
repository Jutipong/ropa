<template>
  <div class="row q-pb-lg">
    <div class="q-mt-md" v-if="!isAddQuestion && IdGroupSelected">
      <q-btn color="primary" icon="eva-plus-circle-outline" label="Create" @click="() => (isAddQuestion = true)" />
    </div>
    <q-space />
    <q-select
      v-if="!isAddQuestion"
      label="Group"
      use-input
      clearable
      input-debounce="0"
      :options="filterOptions"
      @filter="filterFn"
      style="width: 350px"
      label-color="primary"
      :loading="loading"
      v-model="IdGroupSelected"
    >
      <template v-slot:append>
        <q-icon name="eva-cube-outline" color="primary" />
      </template>
    </q-select>
  </div>

  <div v-if="loading">
    <div class="row q-ma-lg justify-center">
      <q-spinner-puff color="primary" size="lg" />
      <div class="q-pt-sm q-ml-sm text-primary">กำลังโหลดข้อมูล</div>
    </div>
  </div>
  <div v-else>
    <div v-if="isAddQuestion">add</div>
    <div v-else>
      <div v-if="list.length === 0">
        <div class="row q-ma-lg justify-center">
          <!-- <q-spinner-puff color="primary" size="lg" /> -->
          <div class="text-negative">
            <q-icon size="md" name="eva-alert-circle-outline"></q-icon>
            ไม่พบข้อมูล
          </div>
        </div>
      </div>
      <draggable class="list-group" tag="ul" :list="list" v-bind="dragOptions">
        <q-list class="list-group-item" v-for="(item, index) in list" :key="item.IdQuestion + item.Name">
          <q-item clickable v-ripple :active="true">
            <q-item-section>
              <b style="color: gray">ลำดับที่ {{ index + 1 }}</b>
              <div class="q-ml-md" style="color: black">คำถาม: {{ item.Name }}</div>
            </q-item-section>
            <q-item-section avatar>
              <q-avatar rounded>
                <q-btn type="button" flat color="negative" icon="eva-trash-2-outline">
                  <template v-slot>
                    <q-tooltip>Delete</q-tooltip>
                  </template>
                </q-btn>
              </q-avatar>
            </q-item-section>
          </q-item>
        </q-list>
      </draggable>
    </div>
  </div>
</template>

<script>
import { computed, watch, ref, onMounted } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import stateUse from '../../hook/Manage/state';
import questionSortUse from '../../hook/Manage/questionSort';

export default {
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const { loading, msGroups, msQuestions } = stateUse;
    const { GetQuestionsById } = questionSortUse;
    const { isAddQuestion, IdGroupSelected } = stateUse;

    const list = ref([]);
    const dragOptions = computed(() => {
      return {
        animation: 0,
        group: 'description',
        // disabled: false,
        ghostClass: 'ghost',
      };
    });

    // watch(list, (item) => {
    //   item.forEach((item, index) => {
    //     item.order = index + 1;
    //   });
    // });

    const filterOptions = ref([]);
    const filterFn = (val, update) => {
      update(() => {
        if (val === '') {
          filterOptions.value = msGroups;
        } else {
          const needle = val.toLowerCase();
          filterOptions.value = msGroups.filter((v) => v.label.toLowerCase().indexOf(needle) > -1);
        }
      });
    };

    watch(IdGroupSelected, async () => {
      if (IdGroupSelected.value) {
        let result = await GetQuestionsById(IdGroupSelected);
        list.value = result;
      } else {
        list.value = [];
      }
    });

    onMounted(async () => {
      IdGroupSelected.value = null;
    });

    return { loading, list, dragOptions, filterFn, filterOptions, IdGroupSelected, isAddQuestion };
  },
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.6s;
}
.no-move {
  transition: transform 0.6s;
}
.ghost {
  opacity: 0.5;
  background: #4ec1f7;
}
.list-group-item {
  border-bottom: 0.5px solid rgb(226, 226, 226);
}
.list-group-item i {
  cursor: pointer;
}
ul {
  list-style-type: none;
}
</style>
