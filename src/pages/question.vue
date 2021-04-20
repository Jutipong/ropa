<template>
  <div class="q-pa-md">
    <div v-if="isLoading" class="row q-gutter-sm">
      <!-- Loading -->
      <q-spinner-puff color="primary" size="lg" />
      <div class="q-pt-sm text-primary">กำลังโหลดข้อมูล</div>
    </div>
    <div v-else>
      <!-- card -->
      <CardComponent v-for="(item, index) in store.Questions" :key="item" :question="item" :index="index"></CardComponent>
      <!-- end card -->
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import stateUse from '../hook/Question/state';
import actionUse from '../hook/Question/action';
import CardComponent from '../components/Question/Card';

export default {
  components: {
    CardComponent,
  },
  setup() {
    const { isLoading, store } = stateUse;
    const { GetQuestions } = actionUse;
    onMounted(() => GetQuestions());
    return { store, isLoading };
  },
};
</script>
