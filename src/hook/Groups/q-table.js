import { ref } from 'vue';
import stateUse from './state';
import actionUse from './action';

const { loading } = stateUse;
const { GetGroups } = actionUse;
const rows = ref([]);
const filter = ref('')
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
  OnRequest,
  filter,
  rows,
  pagination,
};
