<template>
  <div class="q-pa-md">
    <!-- card -->
    <q-card class="q-ma-md" v-for="(item, index) in question.Questions" :key="index">
      <!-- title question -->
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
        <div class="row">
          <div v-if="item.Type === null">
            <!-- radio -->
            <q-option-group class="q-ml-sm" :options="item.Answers" type="radio" v-model="item.Result"/>
          </div>
          <!-- input -->
          <div class="full-width q-mb-sm" v-else>
             <q-input class="q-ml-lg" outlined v-model="item.Result" dense/>
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

    watch(question.Questions.Result, (val) => {
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
