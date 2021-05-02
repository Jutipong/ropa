<template>
  <div>
    <q-dialog v-model="isShowDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <!-- <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" /> -->
          IsShow: {{ isShowDialog }}
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add address" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { inject } from 'vue';
import stateUse from '../../hook/Groups/state';
export default {
  setup() {
    const { isShowDialog } = stateUse;
    return { isShowDialog };
  },
};
</script>
