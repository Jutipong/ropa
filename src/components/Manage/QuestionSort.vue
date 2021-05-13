<template>
  <div class="row q-pb-lg">
    <q-space />
    <q-select
      label="Group"
      use-input
      clearable
      input-debounce="0"
      :options="filterOptions"
      @filter="filterFn"
      style="width: 350px"
      label-color="primary"
      v-model="model"
    >
      <template v-slot:append>
        <q-icon name="eva-cube-outline" color="primary" />
      </template>
    </q-select>
  </div>

  <draggable
    class="list-group"
    tag="ul"
    :list="list"
    v-bind="dragOptions"
    @start="isDragging = true"
    @end="isDragging = false"
  >
    <q-separator />
    <transition-group type="transition" name="flip-list">
      <q-list class="list-group-item" v-for="(item, index) in list" :key="item.name">
        <q-item clickable v-ripple>
          <q-item-section>
            <b>ลำดับที่ {{ index + 1 }}</b>
            <div class="q-ml-md">คำถาม: {{ item.name }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </transition-group>
  </draggable>
</template>

<script>
import { reactive, computed, watch, ref, onMounted } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import stateUse from '../../hook/Manage/state';
import questionSortUse from '../../hook/Manage/questionSort';

export default {
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const { msGroups } = stateUse;
    const { GetGroupsAll } = questionSortUse;

    const list = reactive([
      { order: 1, name: 'name1' },
      { order: 2, name: 'name2' },
      { order: 3, name: 'name3' },
      { order: 4, name: 'name4' },
      { order: 5, name: 'name5' },
      { order: 6, name: 'name6' },
    ]);

    const dragOptions = computed(() => {
      return {
        animation: 0,
        group: 'description',
        // disabled: false,
        ghostClass: 'ghost',
      };
    });

    watch(list, (item) => {
      console.log('kdfjlsjfdls');
      item.forEach((item, index) => {
        item.order = index + 1;
      });
    });

    const model = ref(null);
    // const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'];
    // const filterOptions = ref(stringOptions);
    const filterOptions = ref([]);
    const filterFn = (val, update) => {
      update(() => {
        if (val === '') {
          filterOptions.value = msGroups;
        } else {
          const needle = val.toLowerCase();
          filterOptions.value = msGroups.filter((v) => v.toLowerCase().indexOf(needle) > -1);
        }
      });
    };

    onMounted(async () => {
      await GetGroupsAll();
      debugger;
      filterOptions.val = msGroups;
    });

    return { list, dragOptions, filterFn, filterOptions, model };
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
  background: #a0c8db;
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
