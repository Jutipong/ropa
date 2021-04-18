<template>
  <div class="q-pa-md">
    <!-- card -->
    <q-card class="q-ma-md" v-for="(item, index) in question.Questions" :key="index">
      <!-- title -->
      <!-- <q-card-section>
        <u>
          <div class="text-bold">คำถามข้อที่: {{ index + 1 }}</div></u
        >
      </q-card-section> -->
      <!-- title detail -->

      <!-- <q-separator inset /> -->

      <q-card-section class="q-ml-md">
        <span>
          <div>
            <b class="q-mr-xs">ข้อที่: {{ index + 1 }}</b
            >{{ item.Question }}
          </div>
        </span>
      </q-card-section>

      <!-- content -->
      <q-card-section class="q-pt-none q-ml-md">
        <div class="row inline">
          <div v-if="item.Type === null">
            <!-- radio -->
            <q-option-group class="q-ml-sm" :options="item.Answers" type="radio" v-model="item.Result" />
          </div>
          <div v-else>
            dddd
          </div>
        </div>
      </q-card-section>
    </q-card>
    <!-- end card -->
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
import { state } from '../hook/Question';

export default {
  setup() {
    const color = ref('cyan');
    const { question } = state();

    watch(question.Questions, (val) => {
      console.log(val);
    });

    const options = reactive([
      { label: 'Battery too low', value: 'bat' },
      { label: 'Friend request', value: 'friend', color: 'green' },
      { label: 'Picture uploaded', value: 'upload', color: 'red' },
    ]);

    return { question, color, options };
  },
};
</script>
