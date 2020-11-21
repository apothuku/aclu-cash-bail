import { Table, SwitchableTable } from "./classes/Table.js";
import {
  BAIL_RATE_DATA,
  BAIL_RACE_RATE_DATA,
  ROR_RATE_DATA,
  BAIL_RACE_AMOUNT_DATA,
  BAIL_POSTING_DATA,
  BAIL_RETENTION_FEE_DATA,
  PRETRIAL_SPENDING_DATA,
  MDJ_DATA } from "./data.js";

/* TABLE CREATION FUNCTIONS */
const createBailRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 60,
        "averages": [
          {
            "name": "Avg.",
            "value": 42.5966697900,
          },
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-rate-cell number-cell",
      header: "Cash\xa0Bail Rate\xa0(%)",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-cases-cell number-cell",
      header: "Cash\xa0Bail Cases",
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: "Total Cases",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 2; // initially sort by cash bail rate
  const stateData = [
    "Pennsylvania",
    {
      "type": "bar",
      "values": [
        42.5966697900
      ]
    },
    42.5966697900,
    2470,
    5681
  ];

  const tableContainer = document.getElementById("bail-rate-container");
  return new Table(BAIL_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createRorRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 75,
        "averages": [
          {
            "name": "Avg.",
            "value": 22.73,
          }
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "ror-rate-cell number-cell",
      header: "ROR\xa0Bail Rate\xa0(%)",
      sortable: true,
      searchable: false
    },
    {
      class: "ror-cases-cell number-cell",
      header: "ROR Cases",
      sortable: true,
      searchable: false
    },
    {
      class: "total-cases-cell number-cell",
      header: "Total Cases",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 2; // initially sort by ror bail rate
  const stateData = [
    "Pennsylvania",
    {
      "type": "bar",
      "values": [
        22.73
      ]
    },
    22.73,
    1294,
    5681
  ];

  const tableContainer = document.getElementById("ror-rate-container");
  return new Table(ROR_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createBailRaceRateTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 100,
        "averages": [
          {
            "name": "Black",
            "value": 54.7462525,
          },
          {
            "name": "White",
            "value": 37.87542236,
          }
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "Black\xa0(%)",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: "White\xa0(%)",
      sortable: true,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: "Diff",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 4; // initially sort by difference
  const stateData = [
    "Pennsylvania",
    {
      "type": "line",
      "values": [
        54.7,
        37.0
      ]
    },
    54.7,
    37.0,
    0
  ];


  const tableContainer = document.getElementById("bail-race-rate-container");
  return new Table(BAIL_RACE_RATE_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createBailRaceAmountTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "viz-cell",
      header: {
        "start": 10000,
        "end": 80000,
        "averages": [
          {
            "name": "Black",
            "value": 38700.61968,
          },
          {
            "name": "White",
            "value": 27572.55514,
          }
        ],
        "unit": "dollars"
      },
      sortable: false,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "Black",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: "White",
      sortable: true,
      searchable: false
    },
    {
      class: "diff-cell number-cell",
      header: "Diff",
      sortable: true,
      searchable: false
    },
  ];
  const initSort = 4; // initially sort by difference
  const stateData = [
    "Pennsylvania",
    {
      "type": "line",
      "values": [
        38700.61968,
        27572.55514
      ]
    },
    "$36,202",
    "$26,868",
    0
  ];

  const tableContainer = document.getElementById("bail-race-amount-container");
  return new Table(BAIL_RACE_AMOUNT_DATA, columnConfigs, initSort, tableContainer, stateData, false);
};

const createBailPostingTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "bail-amount-cell number-cell",
      header: "Bail Set",
      sortable: false,
      searchable: false
    },
    {
      class: "nonposting-rate-cell number-cell",
      header: "Non-Posting Rate",
      sortable: true,
      searchable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 100,
        "averages": [
          {
            "name": "Avg.",
            "value": 58.5211725
          }
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    },
  ];
  const initSort = 2;
  const stateData = [
    "Pennsylvania",
    "$31.8K",
    58.5211725,
    {
      "type": "line",
      "values": [
        58.5211725
      ]
    }
  ];

  const tableContainer = document.getElementById("bail-posting-container");
  return new Table(BAIL_POSTING_DATA, columnConfigs, initSort, tableContainer, stateData);
};

const createBailRetentionFeeTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "County",
      sortable: false,
      searchable: true
    },
    {
      class: "retention-fee-cell",
      header: "Retention Fee",
      sortable: false,
      searchable: false
    },
  ];
  const initSort = 0; // initially sort by difference
  const tableContainer = document.getElementById("bail-retention-fee-container");
  return new Table(BAIL_RETENTION_FEE_DATA, columnConfigs, initSort, tableContainer);
};

const createPretrialSpendingTable = () => {
  const columnConfigs = [
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "spending-cell",
      header: "Cost",
      sortable: true,
      searchable: false
    },
    {
      class: "total-budget-cell",
      header: "Total Budget",
      sortable: false,
      searchable: false
    },
    {
      class: "fraction-budget-cell number-cell",
      header: "% of Budget",
      sortable: false,
      searchable: false
    },
    {
      class: "viz-cell",
      header: {
        "start": 0,
        "end": 140,
        "averages": [
          {
            "name": "",
            "value": 62.4,
          },
        ],
        "unit": "percent"
      },
      sortable: false,
      searchable: false
    }
  ];
  const initSort = 1;
  const stateData = [
    "Pennsylvania",
    "$10.1M",
    "$16.1M",
    62.4,
    {
      "type": "bar",
      "values": [
        62.4
      ]
    }
  ];

  const tableContainer = document.getElementById("pretrial-spending-container");
  return new Table(PRETRIAL_SPENDING_DATA, columnConfigs, initSort, tableContainer, stateData);
};

const createMdjTable = () => {
  const columnConfigs = [
    {
      class: "caret-cell",
      header: "",
      sortable: false,
      searchable: false,
    },
    {
      class: "county-name-cell",
      header: "",
      sortable: false,
      searchable: true
    },
    {
      class: "total-bail-rate-cell number-cell",
      header: "Cash Bail Rate",
      sortable: true,
      searchable: false
    },
    {
      class: "bail-black-cell number-cell",
      header: "Black",
      sortable: false,
      searchable: false
    },
    {
      class: "bail-white-cell number-cell",
      header: "White",
      sortable: false,
      searchable: false
    },
    {
      class: "viz-cell bail-dist-cell",
      header: "Bail Types",
      sortable: false,
      searchable: false
    },
  ];
  const initSort = 2;
  const tableContainer = document.getElementById("mdj-container");
  return new Table(MDJ_DATA, columnConfigs, initSort, tableContainer);
};

/* RENDER PAGE */
const bailRateTable = createBailRateTable();
const rorRateTable = createRorRateTable();

const rateContainer = document.getElementById("rate-container");
new SwitchableTable(bailRateTable, rorRateTable, rateContainer);

const bailRaceRateTable = createBailRaceRateTable();
const bailRaceAmountTable = createBailRaceAmountTable();

const raceContainer = document.getElementById("race-container");
new SwitchableTable(bailRaceRateTable, bailRaceAmountTable, raceContainer);

createBailPostingTable();
createBailRetentionFeeTable();
createPretrialSpendingTable();
createMdjTable();
