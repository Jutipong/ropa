<template>
  <div>
    <q-dialog v-model="isShowDialog" persistent>
      <q-card style="min-width: 350px">
        <div class="q-pa-md" style="max-width: 400px">
          <div>
            <div class="text-h6">{{ labelAction }} MsGroup</div>
          </div>
          <q-form @submit="OnAction" class="q-gutter-md">
            <q-input
              v-model="msGroup.Name"
              filled
              type="textarea"
              :disable="loading"
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
            <div align="right" class="text-primary">
              <q-btn type="reset" flat label="Cancel" v-close-popup />
              <q-btn type="submit" flat :label="labelAction" :loading="loading" />
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { computed, watch } from 'vue';
import dialogActionUse from '../../hook/MsQuestion/dialogAction';
import groupsUse from '../../hook/MsQuestion/state';
export default {
  setup() {
    const { loading } = groupsUse;
    const { Action, ClearMsGroup, isShowDialog, msGroup } = dialogActionUse;
    const labelAction = computed(() => {
      return msGroup.IdQuestion === null ? 'Create' : 'Update';
    });

    const OnAction = async () => {
      const action = msGroup.IdQuestion === null ? 'Create' : 'Update';
      await Action(msGroup, action);
    };

    watch(isShowDialog, () => {
      !isShowDialog.value && ClearMsGroup();
    });

    return { labelAction, isShowDialog, OnAction, msGroup, loading };
  },
};
</script>
