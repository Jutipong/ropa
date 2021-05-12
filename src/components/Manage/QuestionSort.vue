<template>
  <draggable
    class="list-group"
    tag="ul"
    :list="list"
    v-bind="dragOptions"
    @start="isDragging = true"
    @end="isDragging = false"
  >
    <transition-group type="transition" name="flip-list">
      <q-list class="list-group-item" v-for="(item,index) in list" :key="item.name">
        <q-item clickable v-ripple>
          <q-item-section>
            <b>ลำดับที่ {{ index + 1 }}</b>
            <div class="q-ml-md">คำถาม: {{ item.name }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </transition-group>
  </draggable>
</template>

<script>
import { reactive, computed } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default {
  components: {
    draggable: VueDraggableNext,
  },
  setup() {
    const list = reactive([
      { order: 1, name: 'name1' },
      { order: 2, name: 'name2' },
      { order: 3, name: 'name3' },
      { order: 4, name: 'name4' },
      { order: 5, name: 'name5' },
      { order: 6, name: 'name6' },
    ]);

    const dragOptions = computed(() => {
      return {
        animation: 0,
        group: 'description',
        // disabled: false,
        ghostClass: 'ghost',
      };
    });

    // watch(list, (item) => {
    //     console.log('kdfjlsjfdls');
    //   item.forEach((item, index) => {
    //     item.order = index + 1;
    //   });
    // });

    return { list, dragOptions };
  },
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.7s;
}
.no-move {
  transition: transform 0.7s;
}
.ghost {
  opacity: 0.5;
  background: #a0c8db;
}
.list-group-item {
  border-bottom: 0.5px solid rgb(226, 226, 226);
}
/* .list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
} */
.list-group-item i {
  cursor: pointer;
}
ul {
  list-style-type: none;
}
</style>
