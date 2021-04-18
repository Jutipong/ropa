<template>
  <q-card class="q-ma-sm q-mb-lg">
    <!-- title question -->
    <q-card-section class="q-ml-md">
      <span>
        <div>
          <b class="q-mr-xs">ข้อที่: {{ index }}</b
          >{{ question.Question }}
        </div>
      </span>
    </q-card-section>
    <!-- content -->
    <q-card-section class="q-pt-none q-ml-md">
      <div class="row">
        <div v-if="question.Type === null">
          <!-- radio -->
          <q-option-group class="q-ml-sm" :options="question.Answers" type="radio" v-model="question.Result" />
        </div>
        <!-- input -->
        <div class="full-width q-mb-sm" v-else>
          <q-input class="q-ml-lg" outlined v-model="question.Result" dense />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
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
    return { question, index };
  },
};
</script>

<style lang="scss" scoped></style>
