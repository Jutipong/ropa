<template>
  <div class="q-pa-md">
    <!-- content -->
    <div class="row q-mb-md">
      <q-btn color="primary" icon="eva-plus-outline" label="Create" @click="OnCreate" />
    </div>
    <MsGroupTable></MsGroupTable>
    <!-- end content -->
  </div>
</template>

<script>
import MsGroupTable from '../components/Groups/MsGroupTable';
import dialogActionUse from '../hook/Groups/dialogAction';

export default {
  components: {
    MsGroupTable,
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
