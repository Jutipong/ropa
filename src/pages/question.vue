<template>
  <div class="q-pa-md">
    <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio v-model="color" val="red" label="Red" color="red" />
      <q-radio v-model="color" val="cyan" label="Cyan" color="cyan" />
    </div>
    <div class="q-gutter-sm">
      <q-radio keep-color v-model="color" val="teal" label="Teal" color="teal" />
      <q-radio keep-color v-model="color" val="orange" label="Orange" color="orange" />
      <q-radio keep-color v-model="color" val="red" label="Red" color="red" />
      <q-radio keep-color v-model="color" val="cyan" label="Cyan" color="cyan" />
    </div>
    <div class="q-px-sm q-mt-sm">
      Your selection is: <strong>{{ color }}</strong>
    </div>
  </div>

    <!-- card -->
    <q-card class="q-ma-md" v-for="(item, index) in question.Questions" :key="index">
      <!-- title -->
      <q-card-section>
        <u>
          <div class="text-bold">คำถามข้อที่: {{ index + 1 }}</div></u
        >
      </q-card-section>
      <!-- title detail -->

      <!-- <q-separator inset /> -->

      <q-card-section class="q-pt-none q-ml-md">
        {{ item.Question }}
      </q-card-section>

      <!-- content -->
      <q-card-section class="q-pt-none q-ml-md">
        <div class="q-pa-md q-gutter-sm">
          <div class="q-gutter-sm">
            <q-radio dense val="line" label="Line" />
            <q-radio dense val="rectangle" label="Rectangle" />
            <q-radio dense val="ellipse" label="Ellipse" />
            <q-radio dense val="polygon" label="Polygon" />
          </div>
        </div>
        <!-- <div class="row inline" v-for="(item_answer, index_answer) in item.Answers" :key="index_answer">
          <div class="q-gutter-sm">
            <q-radio dense val="item_answer.Answer" label="item_answer.Answer" />
          </div> -->
        <!-- <div class="q-mr-sm">
            {{ item_answer.Answer }}
          </div> -->
        <!-- </div> -->
      </q-card-section>
    </q-card>
    <!-- end card -->
  </div>
</template>

<script>
import { ref } from 'vue';
import { state } from '../hook/Question';

export default {
  setup() {
    const color = ref('cyan');
    const { question } = state();
    return { question, color };
  },
};
</script>
