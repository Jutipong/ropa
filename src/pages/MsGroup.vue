<template>
  <div class="q-pa-md">
    <!-- content -->
    <div class="row q-mb-md">
      <q-btn color="primary" icon="eva-plus-outline" label="Create" @click="OnCreate" />
    </div>
    <MsGroupTableComponent></MsGroupTableComponent>
    <!-- end content -->
  </div>
</template>

<script>
import MsGroupTableComponent from '../components/MsGroup/MsGroupTable';
import dialogActionUse from '../hook/MsGroup/dialogAction';

export default {
  components: {
    MsGroupTableComponent,
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
