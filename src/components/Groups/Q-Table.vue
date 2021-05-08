<template>
  <div>
    <q-table
      row-key="id"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      @request="OnRequest"
      v-model:pagination="pagination"
      color="primary"
    >
      <!-- slot top -->
      <template v-slot:top="props">
        <q-btn
          flat
          round
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
        <q-space />
        <!-- <q-separator vertical spaced /> -->
        <div class="col-4 q-table-title q-pl-sm xs-hide sm-hide">Gropus</div>
        <q-space />
        <q-input
          clearable
          dense
          bordered
          placeholder="ค้นหา"
          :disable="loading"
          v-model="filter"
          @keyup.enter="OnRequest({ pagination })"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          round
          class="q-ml-md"
          color="secondary"
          icon="eva-refresh-outline"
          :loading="loading"
          :disable="loading"
          @click="OnRequest({ pagination })"
        />
      </template>
      <!-- <template v-slot:pagination="scope"> Page: {{ scope.pagination.page }}/ {{ scope.pagesNumber }} </template> -->
    </q-table>
  </div>
  <div>
    <DialogAction v-model="isShow"></DialogAction>
  </div>
</template>

<script>
import { onMounted, ref, provide } from 'vue';
import { useQuasar, date } from 'quasar';
import stateUse from '../../hook/Groups/state';
import qTableUse from "../../hook/Groups/q-table";
import DialogAction from '../../components/Groups/DialogAction';

export default {
  components: {
    DialogAction,
  },
  setup() {
    const $q = useQuasar();
    const { loading, columns } = stateUse;
    const { OnRequest, rows, filter, pagination} = qTableUse
    const isShow = ref(true);

    onMounted(async () => {
      await OnRequest({
        pagination: pagination.value,
      });
    });

    return { loading, rows, columns, pagination, filter, OnRequest, isShow };
  },
};
</script>
