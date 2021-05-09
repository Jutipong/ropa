<template>
  <div>
    <q-dialog v-model="isShowDialog" persistent>
      <q-card style="min-width: 350px">
        <div class="q-pa-md" style="max-width: 400px">
          <div>
            <div class="text-h6">Create MsGroup</div>
          </div>
          <q-form @submit="OnAction" class="q-gutter-md">
            <q-input
              autofocus
              v-model="msGroup.Name"
              label="Name *"
              :rules="[(val) => (val && val.length > 0) || 'Please type something']"
            />
            <div align="right" class="text-primary">
              <q-btn type="reset" flat label="Cancel" v-close-popup />
              <q-btn type="submit" flat label="Create" />
            </div>
          </q-form>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { watch } from 'vue';
import dialogActionUse from '../../hook/Groups/dialogAction';
import qTableUse from '../../hook/Groups/q-table';
export default {
  setup() {
    const { OnRequest, pagination } = qTableUse;
    const { Action, ClearMsGroup, isShowDialog, msGroup } = dialogActionUse;

    const OnAction = async () => {
      const action = msGroup.IdGroup === null ? 'Create' : 'Update';
      await Action(msGroup, action);
      // OnRequest({
      //   pagination: pagination.value,
      // });
    };

    watch(isShowDialog, () => {
      isShowDialog.value && ClearMsGroup();
    });

    return { isShowDialog, OnAction, msGroup };
  },
};
</script>
