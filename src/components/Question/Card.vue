<template>
  <q-card class="q-ma-sm q-mb-lg">
    <!-- title question -->
    <q-card-section class="q-ml-md">
      <span>
        <div :class="`${question.IsDisable ? 'text-grey' : ''}`">
          <b class="q-mr-xs">ข้อที่: {{ index + 1 }}</b
          >{{ question.Question }}
        </div>
      </span>
    </q-card-section>
    <!-- content -->
    <q-card-section class="q-pt-none q-ml-md">
      <div class="row">
        <div v-if="question.Type === null">
          <!-- radio -->
          <q-option-group
            :disable="question.IsDisable"
            class="q-ml-sm"
            :options="question.Answers"
            type="radio"
            v-model="question.Result"
          />
        </div>
        <!-- input -->
        <div class="full-width q-mb-sm" v-else>
          <q-input
            clearable
            :filled="question.IsDisable"
            :disable="question.IsDisable"
            class="q-ml-lg"
            outlined
            v-model="question.Result"
            dense
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { onMounted, watch } from 'vue';
import action from '../../hook/Question/action';

export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { question, index } = props;
    const { InitDisable, CheckCardDisable } = action;
    onMounted(() => question.Referen && InitDisable(question.Referen));
    watch(
      () => question.Result,
      () => CheckCardDisable(question.Id)
    );
    return { question, index };
  },
};
</script>
