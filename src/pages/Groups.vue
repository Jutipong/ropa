<template>
  <div class="q-pa-md">
    <div v-if="loadingPage" class="row q-gutter-sm">
      <!-- Loading -->
      <q-spinner-puff color="primary" size="lg" />
      <div class="q-pt-sm text-primary">กำลังโหลดข้อมูล</div>
    </div>
    <div v-else>
      <!-- content -->
      <q-table :rows="store" :columns="columns" row-key="id" :loading="loading" v-model:pagination="pagination">
        <!-- slot top -->
        <template v-slot:top="props">
          <q-btn flat round :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="props.toggleFullscreen" class="q-ml-md" />
          <!-- <q-space /> -->
          <q-separator vertical spaced />
          <div class="col-4 q-table-title q-pl-sm xs-hide sm-hide">Gropus</div>
          <q-space />
          <q-input class="" clearable dense bordered placeholder="ค้นหา">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn round class="q-ml-md" color="secondary" icon="eva-refresh-outline" :loading="loading" :disable="loading" />
        </template>

        <!-- <template v-slot:pagination="scope">
          <q-btn
            v-if="scope.pagesNumber > 2"
            icon="first_page"
            color="grey-8"
            round
            dense
            flat
            :disable="scope.isFirstPage"
            @click="scope.firstPage"
          />

          <q-btn icon="chevron_left" color="grey-8" round dense flat :disable="scope.isFirstPage" @click="scope.prevPage" />

          <q-btn icon="chevron_right" color="grey-8" round dense flat :disable="scope.isLastPage" @click="scope.nextPage" />

          <q-btn
            v-if="scope.pagesNumber > 2"
            icon="last_page"
            color="grey-8"
            round
            dense
            flat
            :disable="scope.isLastPage"
            @click="scope.lastPage"
          />
        </template> -->
      </q-table>
      <!-- end content -->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { date } from 'quasar';
import stateUse from '../hook/Groups/state';
import actionUse from '../hook/Groups/action';

export default {
  setup() {
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
      sortBy: 'desc',
      descending: false,
      page: 1,
      rowsPerPage: 3,
      rowsNumber: 10,
    });

    function fetchFromServer(startRow, count, filter, sortBy, descending) {
      const data = filter ? store.filter((row) => row.name.includes(filter)) : store.slice();

      // handle sortBy
      if (sortBy) {
        const sortFn =
          sortBy === 'desc'
            ? descending
              ? (a, b) => (a.name > b.name ? -1 : a.name < b.name ? 1 : 0)
              : (a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            : descending
            ? (a, b) => parseFloat(b[sortBy]) - parseFloat(a[sortBy])
            : (a, b) => parseFloat(a[sortBy]) - parseFloat(b[sortBy]);
        data.sort(sortFn);
      }

      return data.slice(startRow, startRow + count);
    }

    function onRequest(props) {
      const { page, rowsPerPage, sortBy, descending } = props.pagination;
      const filter = props.filter;

      loading.value = true;

      // emulate server
      setTimeout(() => {
        // update rowsCount with appropriate value
        pagination.value.rowsNumber = getRowsNumberCount(filter);

        // get all rows if "All" (0) is selected
        const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage;

        // calculate starting row of data
        const startRow = (page - 1) * rowsPerPage;

        // fetch data from "server"
        const returnedData = fetchFromServer(startRow, fetchCount, filter, sortBy, descending);

        // clear out existing data and add new
        rows.value.splice(0, rows.value.length, ...returnedData);

        // don't forget to update local pagination object
        pagination.value.page = page;
        pagination.value.rowsPerPage = rowsPerPage;
        pagination.value.sortBy = sortBy;
        pagination.value.descending = descending;

        // ...and turn of loading indicator
        loading.value = false;
        loadingPage.value = false;
      }, 1500);
    }

    function getRowsNumberCount(filter) {
      if (!filter) {
        return store.length;
      }
      let count = 0;
      store.forEach((treat) => {
        if (treat.name.includes(filter)) {
          ++count;
        }
      });
      return count;
    }

    onMounted(() => {
      // get initial data from server (1st page)
      onRequest({
        pagination: pagination.value,
        filter: undefined,
      });
    });

    // onMounted(() => GetGroups());
    return { loadingPage, loading, store, columns, pagination };
  },
};
</script>
