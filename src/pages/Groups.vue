<template>
  <div class="q-pa-md">
    <div v-if="loadingPage" class="row q-gutter-sm">
      <!-- Loading -->
      <q-spinner-puff color="primary" size="lg" />
      <div class="q-pt-sm text-primary">กำลังโหลดข้อมูล</div>
    </div>
    <div v-else>
      <!-- content -->
      <div class="row q-mb-md">
        <!-- <q-btn color="primary" icon="check" label="OK" @click="onAdd" /> -->
      </div>
      <q-table
        row-key="id"
        :rows="rows"
        :columns="columns"
        :loading="loading"
        @request="onRequest"
        v-model:pagination="pagination"
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
          <!-- <q-space /> -->
          <q-separator vertical spaced />
          <div class="col-4 q-table-title q-pl-sm xs-hide sm-hide">Gropus</div>
          <q-space />
          <q-input
            clearable
            dense
            bordered
            placeholder="ค้นหา"
            v-model="filter"
            @keyup.enter="onRequest({ pagination })"
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
            @click="onRequest({ pagination })"
          />
        </template>
        <!-- <template v-slot:pagination="scope"> Page: {{ scope.pagination.page }}/ {{ scope.pagesNumber }} </template> -->
      </q-table>
      <!-- end content -->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { api } from 'boot/axios';
import { useQuasar, date } from 'quasar';
import stateUse from '../hook/Groups/state';
import actionUse from '../hook/Groups/action';

export default {
  setup() {
    const $q = useQuasar();
    const loadingPage = ref(true);
    const { loading, store } = stateUse;
    const { GetGroups } = actionUse;
    const columns = [
      { name: 'Name', label: 'Name', align: 'center', field: 'Name', sortable: true },
      {
        name: 'CreateDate',
        label: 'CreateDate',
        align: 'center',
        field: 'CreateDate',
        sortable: true,
        format: (val) => (val ? `${date.formatDate(val, 'DD/MM/YYYY HH:mm:ss')}` : '-'),
      },
      { name: 'CreateBy', label: 'CreateBy', align: 'center', field: 'CreateBy', sortable: true },
      {
        name: 'UpdateDate',
        label: 'UpdateDate',
        align: 'center',
        field: 'UpdateDate',
        sortable: true,
        format: (val) => (val ? `${date.formatDate(val, 'DD/MM/YYYY HH:mm:ss')}` : '-'),
      },
      { name: 'UpdateBy', label: 'UpdateBy', align: 'center', field: 'UpdateBy', sortable: true },
    ];

    const rows = ref([]);
    const filter = ref('');
    const pagination = ref({
      sortBy: 'CreateDate',
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });

    async function fetchFromServer(Page, RowsPerPage, SortBy, Descending) {
      let totalRows = 0;
      let datas = [];
      const req = {
        Page,
        RowsPerPage,
        SortBy,
        Descending,
        Filter: filter.value,
      };
      await api
        .post(`MsGroup/Inquiry`, req)
        .then((res) => {
          datas = res.data.Datas;
          totalRows = res.data.Total;
        })
        .catch((err) => {
          loading.value = false;
          $q.notify({
            color: 'negative',
            message: err.message,
            icon: 'report_problem',
          });
        });

      return { datas, totalRows };
    }

    async function onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      loading.value = true;
      // fetch data from "server"
      const { datas, totalRows } = await fetchFromServer(page, rowsPerPage, sortBy, descending);
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
      //loading
      loading.value = false;
    }

    onMounted(async () => {
      await onRequest({
        pagination: pagination.value,
      });

      setTimeout(() => {
        loadingPage.value = false;
      }, 1000);
    });

    return { loadingPage, loading, store, rows, columns, pagination, onRequest, filter };
  },
};
</script>
