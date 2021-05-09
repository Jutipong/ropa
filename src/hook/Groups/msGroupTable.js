import { ref } from 'vue';
import { date } from 'quasar';
import groupsUse from './groups';

const { loading, GetGroups } = groupsUse;
const columns = [
  { name: 'edit', field: '', label: 'Edit', align: 'center' },
  { name: 'delete', field: '', label: 'Delete', align: 'center' },
  { name: 'Name', field: 'Name', label: 'Name', align: 'center' },
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
const rows = ref([]);
const filter = ref('');
const pagination = ref({
  sortBy: 'CreateDate',
  descending: true,
  page: 1,
  rowsPerPage: 10,
  rowsNumber: 0,
});

const OnRequest = async (props) => {
  loading.value = true;
  const { page, rowsPerPage, sortBy, descending } = props.pagination;

  // fetch data from "server"
  const { datas, totalRows } = await GetGroups({
    Page: page,
    RowsPerPage: rowsPerPage,
    SortBy: sortBy,
    Descending: descending,
    Filter: filter.value,
  });

  // clear out existing data and add new
  rows.value.splice(0, rows.value.length, ...datas);

  // don't forget to update local pagination object
  pagination.value.page = page;
  pagination.value.rowsPerPage = rowsPerPage;
  pagination.value.rowsNumber = totalRows;
  if (sortBy) {
    pagination.value.sortBy = sortBy;
    pagination.value.descending = descending;
  } else {
    pagination.value.descending = false;
  }

  loading.value = false;
};

export default {
  columns,
  filter,
  rows,
  pagination,
  OnRequest,
};
