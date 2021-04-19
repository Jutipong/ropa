<template>
  <div class="q-pa-md">
    <div v-if="isLoading" class="row q-gutter-sm">
      <q-spinner-clock color="primary" size="lg" />
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
import stateUse from '../hook/Question/store';
import actionUse from '../hook/Question/action';
import CardComponent from '../components/Question/Card';

export default {
  components: {
    CardComponent,
  },
  setup() {
    const { GetQuestions } = actionUse;
    const { isLoading, store } = stateUse;
    onMounted(() => GetQuestions());
    return { store, isLoading };
  },
};
</script>
