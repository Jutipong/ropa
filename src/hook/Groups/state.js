import { reactive, ref } from 'vue';
import { date } from 'quasar';

const store = reactive([]);
const loading = ref(false);
const columns = [
  { name: 'Name', label: 'Name', align: 'center', field: 'Name', sortable: false },
  {
    name: 'CreateDate',
    label: 'CreateDate',
    align: 'center',
    field: 'CreateDate',
    sortable: true,
    format: (val) => (val ? `${date.formatDate(val, 'DD/MM/YYYY HH:mm:ss')}` : '-'),
  },
  { name: 'CreateBy', label: 'CreateBy', align: 'center', field: 'CreateBy', sortable: true },
  {
    name: 'UpdateDate',
    label: 'UpdateDate',
    align: 'center',
    field: 'UpdateDate',
    sortable: true,
    format: (val) => (val ? `${date.formatDate(val, 'DD/MM/YYYY HH:mm:ss')}` : '-'),
  },
  { name: 'UpdateBy', label: 'UpdateBy', align: 'center', field: 'UpdateBy', sortable: false },
];

export default {
  loading,
  store,
  columns,
};
