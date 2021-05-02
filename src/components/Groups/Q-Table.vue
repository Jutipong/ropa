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
import actionUse from '../../hook/Groups/action';
import DialogAction from '../../components/Groups/DialogAction';

export default {
  components: {
    DialogAction,
  },
  setup() {
    const $q = useQuasar();
    const { loading, columns } = stateUse;
    const { GetGroups } = actionUse;

    const isShow = ref(true);
    const rows = ref([]);
    const filter = ref('');
    const pagination = ref({
      sortBy: 'CreateDate',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });

    const OnRequest = async (props) => {
      debugger;
      loading.value = true;
      const { page, rowsPerPage, sortBy, descending } = props.pagination;

      // fetch data from "server"
      const { datas, totalRows } = await GetGroups({
        Page: page,
        RowsPerPage: rowsPerPage,
        SortBy: sortBy,
        Descending: descending,
        Filter: filter.value,
      });

      // clear out existing data and add new
      rows.value.splice(0, rows.value.length, ...datas);

      // don't forget to update local pagination object
      pagination.value.page = page;
      pagination.value.rowsPerPage = rowsPerPage;
      pagination.value.rowsNumber = totalRows;
      if (sortBy) {
        pagination.value.sortBy = sortBy;
        pagination.value.descending = descending;
      } else {
        pagination.value.descending = false;
      }

      loading.value = false;
    };

    onMounted(async () => {
      await OnRequest({
        pagination: pagination.value,
      });
    });

    return { loading, rows, columns, pagination, filter, OnRequest, isShow };
  },
};
</script>
