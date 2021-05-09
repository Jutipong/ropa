<template>
  <div class="q-pa-md">
    <!-- content -->
    <div class="row q-mb-md">
      <q-btn color="primary" icon="eva-plus-outline" label="Create" @click="OnCreate" />
    </div>
    <QTable></QTable>
    <!-- end content -->
  </div>
</template>

<script>
import QTable from '../components/Groups/Q-Table';
import dialogActionUse from '../hook/Groups/dialogAction';

export default {
  components: {
    QTable,
  },
  setup() {
    const { isShowDialog } = dialogActionUse;
    const OnCreate = () => {
      isShowDialog.value = true;
    };
    return { OnCreate };
  },
};
</script>
