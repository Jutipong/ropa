<template>
  <div class="q-pa-md">
    <div v-if="isLoading" class="row q-gutter-sm">
      <!-- Loading -->
      <q-spinner-puff color="primary" size="lg" />
      <div class="q-pt-sm text-primary">กำลังโหลดข้อมูล</div>
    </div>
    <div v-else>
      <!-- content -->
      <q-table
        :rows="store"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        :loading="isLoading"
        :filter="filter"
        @request="onRequest"
        binary-state-sort
      >
        <!-- slot top -->
        <template v-slot:top="props">
          <q-btn flat round :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="props.toggleFullscreen" class="q-ml-md" />
          <!-- <q-space /> -->
          <q-separator vertical spaced />
          <div class="col-4 q-table-title q-pl-sm xs-hide sm-hide">Gropus</div>
          <q-space />
          <q-input class="" clearable dense bordered v-model="filter" placeholder="ค้นหา">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            round
            class="q-ml-md"
            color="secondary"
            icon="eva-refresh-outline"
            @click="OnRefresh()"
            :loading="isLoading"
            :disable="isLoading"
          />
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
import { onMounted } from 'vue';
import { date } from 'quasar';
import stateUse from '../hook/Groups/state';
import actionUse from '../hook/Groups/action';

export default {
  setup() {
    const { isLoading, store } = stateUse;
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
    const customSort = (store, sortBy, descending) => {
      const data = [...store];

      if (sortBy) {
        data.sort((a, b) => {
          const x = descending ? b : a;
          const y = descending ? a : b;

          if (sortBy === 'name') {
            // string sort
            return x[sortBy] > y[sortBy] ? 1 : x[sortBy] < y[sortBy] ? -1 : 0;
          } else {
            // numeric sort
            return parseFloat(x[sortBy]) - parseFloat(y[sortBy]);
          }
        });
      }
    };
    onMounted(() => GetGroups());
    return { isLoading, store, columns, customSort };
  },
};
</script>
