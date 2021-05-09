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

      <!-- Edit  -->
      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <q-btn
            type="button"
            round
            flat
            color="primary"
            icon="eva-edit-outline"
            @click="OnEdit(props.row)"
          >
            <template v-slot>
              <q-tooltip>Edit</q-tooltip>
            </template>
          </q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <!-- Delete -->
          <q-btn
            type="button"
            round
            flat
            color="negative"
            icon="eva-trash-2-outline"
            @click="OnDelete(props.row)"
          >
            <template v-slot>
              <q-tooltip>Delete</q-tooltip>
            </template>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
  <div>
    <DialogActionComponent></DialogActionComponent>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';
import stateUse from '../../hook/Groups/groups';
import msGroupTable from '../../hook/Groups/msGroupTable';
import dialogActionUse from '../../hook/Groups/dialogAction';

import DialogActionComponent from '../../components/Groups/DialogAction';

export default {
  components: {
    DialogActionComponent,
  },
  setup() {
    const $q = useQuasar();
    const { loading } = stateUse;
    const { columns, rows, filter, pagination, OnRequest } = msGroupTable;
    const { Action, isShowDialog, msGroup } = dialogActionUse;

    const OnEdit = async (row) => {
      isShowDialog.value = true;
      Object.assign(msGroup, { ...row });
    };

    const OnDelete = async (row) => {
      $q.dialog({
        title: 'Confirm Delete',
        message: `Are you sure to delete this item: ${row.Name}`,
        cancel: true,
        persistent: true,
      }).onOk(() => {
        Action(row, 'Delete');
      });
    };

    onMounted(async () => {
      await OnRequest({
        pagination: pagination.value,
      });
    });

    return {
      loading,
      isShowDialog,
      rows,
      columns,
      pagination,
      filter,
      OnRequest,
      OnEdit,
      OnDelete,
    };
  },
};
</script>
