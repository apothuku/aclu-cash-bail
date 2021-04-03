import { Table } from "./classes/Table.js";
import { BAIL_RETENTION_FEE_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRetentionFeeTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: {
        "text": "County",
        "unit": ""
      },
      sortable: true,
      searchable: true
    },
    {
      class: "retention-fee-cell",
      header: {
        "text": "Retention Fee",
        "unit": "dollars"
      },
      sortable: false,
      searchable: false
    },
  ];
  const initSort = 0; // initially sort by difference
  const tableContainer = document.getElementById("bail-retention-fee-container");
  return new Table(BAIL_RETENTION_FEE_DATA, columnConfigs, initSort, tableContainer);
};

/* RENDER PAGE */
createBailRetentionFeeTable();