<template>
  <div class="q-pa-md">
    <!-- content -->
    <div class="row q-mb-md">
      <q-btn color="primary" icon="eva-plus-outline" label="Create" @click="OnCreate" />
    </div>
    <TableDetailComponent></TableDetailComponent>
    <!-- end content -->
  </div>
</template>

<script>
import TableDetailComponent from '../components/MsGroup/TableDetail';
import dialogActionUse from '../hook/MsGroup/dialogAction';

export default {
  components: {
    TableDetailComponent,
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
