/*
 * To get the data in this format, export a CSV with the columns in the order
 * you want. In the case of BAIL_RACE_DATA, I had [county, black %, white %,
 * difference]. I pasted the contents of the CSV into this file (you can wrap
 * multi-line strings in ``) and created the following script to convert from
 * that string to the output array. JSON.stringify will output something with
 * no spacing, so i just pasted the result into a JSON formatter to get the
 * desired format (https://jsonformatter.org).
 *
 * const excelData = ``;
 * const data = [];
 * const lines = excelData.split("\n");
 * lines.forEach((line, i) => {
 *   const cells = line.split(",");
 *   const diff = parseFloat(cells[3]);
 *   const entry = {
 *     "data": [
 *       cells[0], // county
 *       {
 *         "type": "line", // visualization
 *         "values": [parseFloat(cells[1]), parseFloat(cells[2])]
 *       },
 *       parseFloat(cells[1]), // black cash bail rate
 *       parseFloat(cells[2]), // white cash bail rate
 *       `${diff > 0 ? "+" : ""}${diff.toFixed(1)}` // overall rate
 *     ],
 *     "outlier": false
 *   };
 *   data.push(entry);
 * });
 *
 * console.log(JSON.stringify(data));
 */

export const BAIL_RATE_DATA = [
  {
    "data": [
      "Adams",
      {
        "type": "bar",
        "values": [
          30.18867925
        ]
      },
      30.18867925,
      775,
      2537
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      {
        "type": "bar",
        "values": [
          43.50802205
        ]
      },
      43.50802205,
      13884,
      31723
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      {
        "type": "bar",
        "values": [
          41.05888709
        ]
      },
      41.05888709,
      742,
      1808
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      {
        "type": "bar",
        "values": [
          49.05179283
        ]
      },
      49.05179283,
      4959,
      5967
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      {
        "type": "bar",
        "values": [
          38.63636364
        ]
      },
      38.63636364,
      563,
      1460
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      {
        "type": "bar",
        "values": [
          50.92425977
        ]
      },
      50.92425977,
      6036,
      11688
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      {
        "type": "bar",
        "values": [
          34.04638145
        ]
      },
      34.04638145,
      1674,
      4826
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      {
        "type": "bar",
        "values": [
          45.49865229
        ]
      },
      45.49865229,
      824,
      1805
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      {
        "type": "bar",
        "values": [
          32.41325938
        ]
      },
      32.41325938,
      4959,
      15185
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      {
        "type": "bar",
        "values": [
          31.15234375
        ]
      },
      31.15234375,
      626,
      2017
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      {
        "type": "bar",
        "values": [
          44.29388101
        ]
      },
      44.29388101,
      2059,
      4613
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      {
        "type": "bar",
        "values": [
          21.67832168
        ]
      },
      21.67832168,
      30,
      112
    ],
    "outlier": false
  },
  {
    "data": [
      "Carbon",
      {
        "type": "bar",
        "values": [
          32.99299883
        ]
      },
      32.99299883,
      1098,
      3307
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      {
        "type": "bar",
        "values": [
          26.08333333
        ]
      },
      26.08333333,
      871,
      3370
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      {
        "type": "bar",
        "values": [
          38.0970325
        ]
      },
      38.0970325,
      3968,
      10351
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      {
        "type": "bar",
        "values": [
          40
        ]
      },
      40,
      487,
      1193
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      {
        "type": "bar",
        "values": [
          36.28318584
        ]
      },
      36.28318584,
      734,
      2002
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      {
        "type": "bar",
        "values": [
          36.92628651
        ]
      },
      36.92628651,
      527,
      1421
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      {
        "type": "bar",
        "values": [
          38.18897638
        ]
      },
      38.18897638,
      667,
      1722
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      {
        "type": "bar",
        "values": [
          28.8973384
        ]
      },
      28.8973384,
      225,
      768
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      {
        "type": "bar",
        "values": [
          38.5278224
        ]
      },
      38.5278224,
      2593,
      6732
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      {
        "type": "bar",
        "values": [
          42.44132779
        ]
      },
      42.44132779,
      5850,
      13585
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      {
        "type": "bar",
        "values": [
          55.68060922
        ]
      },
      55.68060922,
      9514,
      16808
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      {
        "type": "bar",
        "values": [
          28.62318841
        ]
      },
      28.62318841,
      229,
      799
    ],
    "outlier": false
  },
  {
    "data": [
      "Erie",
      {
        "type": "bar",
        "values": [
          43.95330739
        ]
      },
      43.95330739,
      2750,
      6198
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      {
        "type": "bar",
        "values": [
          44.27074081
        ]
      },
      44.27074081,
      2463,
      5546
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      {
        "type": "bar",
        "values": [
          34.75609756
        ]
      },
      34.75609756,
      50,
      123
    ],
    "outlier": false
  },
  {
    "data": [
      "Franklin",
      {
        "type": "bar",
        "values": [
          37.47902685
        ]
      },
      37.47902685,
      1772,
      4681
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      {
        "type": "bar",
        "values": [
          28.67298578
        ]
      },
      28.67298578,
      113,
      383
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      {
        "type": "bar",
        "values": [
          37.44343891
        ]
      },
      37.44343891,
      324,
      834
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      {
        "type": "bar",
        "values": [
          38.96907216
        ]
      },
      38.96907216,
      552,
      1353
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      {
        "type": "bar",
        "values": [
          35.01070664
        ]
      },
      35.01070664,
      322,
      922
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      {
        "type": "bar",
        "values": [
          38.55721393
        ]
      },
      38.55721393,
      460,
      1166
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      {
        "type": "bar",
        "values": [
          34.46215139
        ]
      },
      34.46215139,
      168,
      455
    ],
    "outlier": false
  },
  {
    "data": [
      "Lackawanna",
      {
        "type": "bar",
        "values": [
          52.63500325
        ]
      },
      52.63500325,
      3052,
      5783
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      {
        "type": "bar",
        "values": [
          44.93240475
        ]
      },
      44.93240475,
      5430,
      11977
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      {
        "type": "bar",
        "values": [
          48.92407633
        ]
      },
      48.92407633,
      1182,
      2398
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      {
        "type": "bar",
        "values": [
          38.70437956
        ]
      },
      38.70437956,
      2085,
      5329
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      {
        "type": "bar",
        "values": [
          54.88215488
        ]
      },
      54.88215488,
      6526,
      11845
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      {
        "type": "bar",
        "values": [
          38.28885249
        ]
      },
      38.28885249,
      3828,
      9950
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      {
        "type": "bar",
        "values": [
          34.68169761
        ]
      },
      34.68169761,
      1557,
      4475
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      {
        "type": "bar",
        "values": [
          42.38134888
        ]
      },
      42.38134888,
      488,
      1147
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      {
        "type": "bar",
        "values": [
          36.12542955
        ]
      },
      36.12542955,
      1653,
      4571
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      {
        "type": "bar",
        "values": [
          48.49498328
        ]
      },
      48.49498328,
      721,
      1477
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      {
        "type": "bar",
        "values": [
          32.79661017
        ]
      },
      32.79661017,
      1910,
      5757
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      {
        "type": "bar",
        "values": [
          33.63556165
        ]
      },
      33.63556165,
      6723,
      19702
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      {
        "type": "bar",
        "values": [
          35.19163763
        ]
      },
      35.19163763,
      100,
      275
    ],
    "outlier": false
  },
  {
    "data": [
      "Northampton",
      {
        "type": "bar",
        "values": [
          45.83529967
        ]
      },
      45.83529967,
      3804,
      8234
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      {
        "type": "bar",
        "values": [
          36
        ]
      },
      36,
      869,
      2414
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      {
        "type": "bar",
        "values": [
          28.98148148
        ]
      },
      28.98148148,
      305,
      1064
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      {
        "type": "bar",
        "values": [
          50.12216352
        ]
      },
      50.12216352,
      32072,
      63180
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      {
        "type": "bar",
        "values": [
          34.16738568
        ]
      },
      34.16738568,
      382,
      1109
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      {
        "type": "bar",
        "values": [
          23.36601307
        ]
      },
      23.36601307,
      142,
      593
    ],
    "outlier": false
  },
  {
    "data": [
      "Schuylkill",
      {
        "type": "bar",
        "values": [
          37.74187822
        ]
      },
      37.74187822,
      2100,
      5531
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      {
        "type": "bar",
        "values": [
          35.92870544
        ]
      },
      35.92870544,
      381,
      1060
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      {
        "type": "bar",
        "values": [
          25
        ]
      },
      25,
      498,
      1962
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      {
        "type": "bar",
        "values": [
          36.44859813
        ]
      },
      36.44859813,
      36,
      103
    ],
    "outlier": false
  },
  {
    "data": [
      "Susquehanna",
      {
        "type": "bar",
        "values": [
          40.32663317
        ]
      },
      40.32663317,
      317,
      783
    ],
    "outlier": false
  },
  {
    "data": [
      "Tioga",
      {
        "type": "bar",
        "values": [
          36.38603696
        ]
      },
      36.38603696,
      868,
      2385
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      {
        "type": "bar",
        "values": [
          25.36136662
        ]
      },
      25.36136662,
      186,
      743
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      {
        "type": "bar",
        "values": [
          37.84477229
        ]
      },
      37.84477229,
      586,
      1549
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      {
        "type": "bar",
        "values": [
          40.61393152
        ]
      },
      40.61393152,
      338,
      831
    ],
    "outlier": false
  },
  {
    "data": [
      "Washington",
      {
        "type": "bar",
        "values": [
          38.93688681
        ]
      },
      38.93688681,
      2596,
      6615
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      {
        "type": "bar",
        "values": [
          37.20349563
        ]
      },
      37.20349563,
      286,
      779
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      {
        "type": "bar",
        "values": [
          31.71662559
        ]
      },
      31.71662559,
      3840,
      11934
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      {
        "type": "bar",
        "values": [
          35.68118628
        ]
      },
      35.68118628,
      377,
      1056
    ],
    "outlier": false
  },
  {
    "data": [
      "York",
      {
        "type": "bar",
        "values": [
          44.27380952
        ]
      },
      44.27380952,
      7356,
      16539
    ],
    "outlier": false
  }
];
export const BAIL_RACE_DATA = [
  {
    "data": [
      "Adams",
      {
        "type": "line",
        "values": [
          43.56060606,
          29.03651562
        ]
      },
      43.56060606,
      29.03651562,
      "+14.5"
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      {
        "type": "line",
        "values": [
          57.06645057,
          35.29897333
        ]
      },
      57.06645057,
      35.29897333,
      "+21.8"
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      {
        "type": "line",
        "values": [
          62.71186441,
          39.52662722
        ]
      },
      62.71186441,
      39.52662722,
      "+23.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      {
        "type": "line",
        "values": [
          64.33048433,
          43.92212726
        ]
      },
      64.33048433,
      43.92212726,
      "+20.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      {
        "type": "line",
        "values": [
          52.57731959,
          37.56419663
        ]
      },
      52.57731959,
      37.56419663,
      "+15.0"
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      {
        "type": "line",
        "values": [
          58.42078961,
          50.24259317
        ]
      },
      58.42078961,
      50.24259317,
      "+8.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      {
        "type": "line",
        "values": [
          58.6998088,
          31.76853358
        ]
      },
      58.6998088,
      31.76853358,
      "+26.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      {
        "type": "line",
        "values": [
          62.26415094,
          45.14840183
        ]
      },
      62.26415094,
      45.14840183,
      "+17.1"
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      {
        "type": "line",
        "values": [
          41.06901218,
          30.62392673
        ]
      },
      41.06901218,
      30.62392673,
      "+10.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      {
        "type": "line",
        "values": [
          44.7761194,
          29.5154185
        ]
      },
      44.7761194,
      29.5154185,
      "+15.3"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      {
        "type": "line",
        "values": [
          65.52083333,
          39.14590747
        ]
      },
      65.52083333,
      39.14590747,
      "+26.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      {
        "type": "line",
        "values": [
          100,
          25.45454545
        ]
      },
      100,
      25.45454545,
      "+74.5"
    ],
    "outlier": true
  },
  {
    "data": [
      "Carbon",
      {
        "type": "line",
        "values": [
          43.7751004,
          32.34139961
        ]
      },
      43.7751004,
      32.34139961,
      "+11.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      {
        "type": "line",
        "values": [
          46.74115456,
          21.88492764
        ]
      },
      46.74115456,
      21.88492764,
      "+24.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      {
        "type": "line",
        "values": [
          48.47354138,
          34.29690666
        ]
      },
      48.47354138,
      34.29690666,
      "+14.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      {
        "type": "line",
        "values": [
          40.625,
          40.83259522
        ]
      },
      40.625,
      40.83259522,
      "-0.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      {
        "type": "line",
        "values": [
          59.30232558,
          35.64718163
        ]
      },
      59.30232558,
      35.64718163,
      "+23.7"
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      {
        "type": "line",
        "values": [
          47.14285714,
          35.98750976
        ]
      },
      47.14285714,
      35.98750976,
      "+11.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      {
        "type": "line",
        "values": [
          40.7960199,
          38.46153846
        ]
      },
      40.7960199,
      38.46153846,
      "+2.3"
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      {
        "type": "line",
        "values": [
          53.33333333,
          28.3197832
        ]
      },
      53.33333333,
      28.3197832,
      "+25.0"
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      {
        "type": "line",
        "values": [
          51.61744023,
          35.0094162
        ]
      },
      51.61744023,
      35.0094162,
      "+16.6"
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      {
        "type": "line",
        "values": [
          51.21710526,
          36.4556962
        ]
      },
      51.21710526,
      36.4556962,
      "+14.8"
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      {
        "type": "line",
        "values": [
          63.75237882,
          48.4952381
        ]
      },
      63.75237882,
      48.4952381,
      "+15.3"
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      {
        "type": "line",
        "values": [
          27.77777778,
          28.68117798
        ]
      },
      27.77777778,
      28.68117798,
      "-0.9"
    ],
    "outlier": true
  },
  {
    "data": [
      "Erie",
      {
        "type": "line",
        "values": [
          63.73239437,
          37.02714731
        ]
      },
      63.73239437,
      37.02714731,
      "+26.7"
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      {
        "type": "line",
        "values": [
          54,
          42.30092389
        ]
      },
      54,
      42.30092389,
      "+11.7"
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      {
        "type": "line",
        "values": [
          85,
          32.03883495
        ]
      },
      85,
      32.03883495,
      "+53.0"
    ],
    "outlier": true
  },
  {
    "data": [
      "Franklin",
      {
        "type": "line",
        "values": [
          49.26553672,
          35.19494204
        ]
      },
      49.26553672,
      35.19494204,
      "+14.1"
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      {
        "type": "line",
        "values": [
          31.57894737,
          29.27536232
        ]
      },
      31.57894737,
      29.27536232,
      "+2.3"
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      {
        "type": "line",
        "values": [
          58.97435897,
          37.86163522
        ]
      },
      58.97435897,
      37.86163522,
      "+21.1"
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      {
        "type": "line",
        "values": [
          64.05228758,
          37.83333333
        ]
      },
      64.05228758,
      37.83333333,
      "+26.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      {
        "type": "line",
        "values": [
          30.39215686,
          36.21169916
        ]
      },
      30.39215686,
      36.21169916,
      "-5.8"
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      {
        "type": "line",
        "values": [
          72.97297297,
          38.35252436
        ]
      },
      72.97297297,
      38.35252436,
      "+34.6"
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      {
        "type": "line",
        "values": [
          43.75,
          36.67425968
        ]
      },
      43.75,
      36.67425968,
      "+7.1"
    ],
    "outlier": true
  },
  {
    "data": [
      "Lackawanna",
      {
        "type": "line",
        "values": [
          67.1345995,
          48.9720035
        ]
      },
      67.1345995,
      48.9720035,
      "+18.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      {
        "type": "line",
        "values": [
          55.54532904,
          43.07425541
        ]
      },
      55.54532904,
      43.07425541,
      "+12.5"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      {
        "type": "line",
        "values": [
          66.28477905,
          43.4806939
        ]
      },
      66.28477905,
      43.4806939,
      "+22.8"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      {
        "type": "line",
        "values": [
          48.84547069,
          37.97733949
        ]
      },
      48.84547069,
      37.97733949,
      "+10.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      {
        "type": "line",
        "values": [
          61.81634031,
          52.85376562
        ]
      },
      61.81634031,
      52.85376562,
      "+9.0"
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      {
        "type": "line",
        "values": [
          53.5892323,
          34.6550856
        ]
      },
      53.5892323,
      34.6550856,
      "+18.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      {
        "type": "line",
        "values": [
          55.01355014,
          28.14726841
        ]
      },
      55.01355014,
      28.14726841,
      "+26.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      {
        "type": "line",
        "values": [
          61.33333333,
          41.23134328
        ]
      },
      61.33333333,
      41.23134328,
      "+20.1"
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      {
        "type": "line",
        "values": [
          45.40337711,
          33.35235378
        ]
      },
      45.40337711,
      33.35235378,
      "+12.1"
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      {
        "type": "line",
        "values": [
          70.11494253,
          47.48201439
        ]
      },
      70.11494253,
      47.48201439,
      "+22.6"
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      {
        "type": "line",
        "values": [
          35.13011152,
          32.41612358
        ]
      },
      35.13011152,
      32.41612358,
      "+2.7"
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      {
        "type": "line",
        "values": [
          43.27198364,
          28.69733969
        ]
      },
      43.27198364,
      28.69733969,
      "+14.6"
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      {
        "type": "line",
        "values": [
          46.15384615,
          35.34136546
        ]
      },
      46.15384615,
      35.34136546,
      "+10.8"
    ],
    "outlier": true
  },
  {
    "data": [
      "Northampton",
      {
        "type": "line",
        "values": [
          55.7063541,
          43.86813852
        ]
      },
      55.7063541,
      43.86813852,
      "+11.8"
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      {
        "type": "line",
        "values": [
          56.81818182,
          33.91066545
        ]
      },
      56.81818182,
      33.91066545,
      "+22.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      {
        "type": "line",
        "values": [
          40,
          27.68130746
        ]
      },
      40,
      27.68130746,
      "+12.3"
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      {
        "type": "line",
        "values": [
          56.02170568,
          43.3107617
        ]
      },
      56.02170568,
      43.3107617,
      "+12.7"
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      {
        "type": "line",
        "values": [
          37.41007194,
          34.02061856
        ]
      },
      37.41007194,
      34.02061856,
      "+3.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      {
        "type": "line",
        "values": [
          75,
          23.24786325
        ]
      },
      75,
      23.24786325,
      "+51.8"
    ],
    "outlier": true
  },
  {
    "data": [
      "Schuylkill",
      {
        "type": "line",
        "values": [
          46.5060241,
          37.27521501
        ]
      },
      46.5060241,
      37.27521501,
      "+9.2"
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      {
        "type": "line",
        "values": [
          52.5,
          34.59183673
        ]
      },
      52.5,
      34.59183673,
      "+17.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      {
        "type": "line",
        "values": [
          69.56521739,
          23.20855615
        ]
      },
      69.56521739,
      23.20855615,
      "+46.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      {
        "type": "line",
        "values": [
          62.5,
          32.63157895
        ]
      },
      62.5,
      32.63157895,
      "+29.9"
    ],
    "outlier": true
  },
  {
    "data": [
      "Susquehanna",
      {
        "type": "line",
        "values": [
          66.66666667,
          39.76377953
        ]
      },
      66.66666667,
      39.76377953,
      "+26.9"
    ],
    "outlier": true
  },
  {
    "data": [
      "Tioga",
      {
        "type": "line",
        "values": [
          57,
          34.50800915
        ]
      },
      57,
      34.50800915,
      "+22.5"
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      {
        "type": "line",
        "values": [
          38.20224719,
          23.24159021
        ]
      },
      38.20224719,
      23.24159021,
      "+15.0"
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      {
        "type": "line",
        "values": [
          60.13986014,
          35.56187767
        ]
      },
      60.13986014,
      35.56187767,
      "+24.6"
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      {
        "type": "line",
        "values": [
          70,
          39.95067818
        ]
      },
      70,
      39.95067818,
      "+30.0"
    ],
    "outlier": true
  },
  {
    "data": [
      "Washington",
      {
        "type": "line",
        "values": [
          55.77092511,
          35.82116788
        ]
      },
      55.77092511,
      35.82116788,
      "+19.9"
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      {
        "type": "line",
        "values": [
          64.86486486,
          35.30997305
        ]
      },
      64.86486486,
      35.30997305,
      "+29.6"
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      {
        "type": "line",
        "values": [
          50.05045409,
          28.61736334
        ]
      },
      50.05045409,
      28.61736334,
      "+21.4"
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      {
        "type": "line",
        "values": [
          40,
          35.59650824
        ]
      },
      40,
      35.59650824,
      "+4.4"
    ],
    "outlier": true
  },
  {
    "data": [
      "York",
      {
        "type": "line",
        "values": [
          54.11985019,
          41.11844787
        ]
      },
      54.11985019,
      41.11844787,
      "+13.0"
    ],
    "outlier": false
  }
];

export const BAIL_POSTING_DATA = [
  {
    "data": [
      "Adams",
      "$27,070",
      {
        "type": "line",
        "values": [
          43.62244898
        ]
      },
      43.62244898,
      342
    ],
    "outlier": false
  },
  {
    "data": [
      "Allegheny",
      "$18,665",
      {
        "type": "line",
        "values": [
          61.27998861
        ]
      },
      61.27998861,
      8608
    ],
    "outlier": false
  },
  {
    "data": [
      "Armstrong",
      "$13,996",
      {
        "type": "line",
        "values": [
          56.05263158
        ]
      },
      56.05263158,
      426
    ],
    "outlier": false
  },
  {
    "data": [
      "Beaver",
      "$17,681",
      {
        "type": "line",
        "values": [
          67.60883691
        ]
      },
      67.60883691,
      2081
    ],
    "outlier": false
  },
  {
    "data": [
      "Bedford",
      "$50,181",
      {
        "type": "line",
        "values": [
          72.3183391
        ]
      },
      72.3183391,
      418
    ],
    "outlier": false
  },
  {
    "data": [
      "Berks",
      "$28,302",
      {
        "type": "line",
        "values": [
          56.45679409
        ]
      },
      56.45679409,
      3515
    ],
    "outlier": false
  },
  {
    "data": [
      "Blair",
      "$33,185",
      {
        "type": "line",
        "values": [
          68.23253083
        ]
      },
      68.23253083,
      1162
    ],
    "outlier": false
  },
  {
    "data": [
      "Bradford",
      "$32,706",
      {
        "type": "line",
        "values": [
          89.21800948
        ]
      },
      89.21800948,
      753
    ],
    "outlier": false
  },
  {
    "data": [
      "Bucks",
      "$62,695",
      {
        "type": "line",
        "values": [
          48.80620772
        ]
      },
      48.80620772,
      2453
    ],
    "outlier": false
  },
  {
    "data": [
      "Butler",
      "$17,603",
      {
        "type": "line",
        "values": [
          66.14420063
        ]
      },
      66.14420063,
      422
    ],
    "outlier": false
  },
  {
    "data": [
      "Cambria",
      "$37,015",
      {
        "type": "line",
        "values": [
          41.87380497
        ]
      },
      41.87380497,
      876
    ],
    "outlier": false
  },
  {
    "data": [
      "Cameron",
      "$26,833",
      {
        "type": "line",
        "values": [
          51.61290323
        ]
      },
      51.61290323,
      16
    ],
    "outlier": false
  },
  {
    "data": [
      "Carbon",
      "$26,807",
      {
        "type": "line",
        "values": [
          49.51370469
        ]
      },
      49.51370469,
      560
    ],
    "outlier": false
  },
  {
    "data": [
      "Centre",
      "$44,339",
      {
        "type": "line",
        "values": [
          65.17571885
        ]
      },
      65.17571885,
      612
    ],
    "outlier": false
  },
  {
    "data": [
      "Chester",
      "$26,417",
      {
        "type": "line",
        "values": [
          51.38476756
        ]
      },
      51.38476756,
      2078
    ],
    "outlier": false
  },
  {
    "data": [
      "Clarion",
      "$20,081",
      {
        "type": "line",
        "values": [
          72.08835341
        ]
      },
      72.08835341,
      359
    ],
    "outlier": false
  },
  {
    "data": [
      "Clearfield",
      "$24,314",
      {
        "type": "line",
        "values": [
          82.5203252
        ]
      },
      82.5203252,
      609
    ],
    "outlier": false
  },
  {
    "data": [
      "Clinton",
      "$21,072",
      {
        "type": "line",
        "values": [
          74.19962335
        ]
      },
      74.19962335,
      394
    ],
    "outlier": false
  },
  {
    "data": [
      "Columbia",
      "$35,889",
      {
        "type": "line",
        "values": [
          27.68777614
        ]
      },
      27.68777614,
      188
    ],
    "outlier": false
  },
  {
    "data": [
      "Crawford",
      "$22,638",
      {
        "type": "line",
        "values": [
          55.26315789
        ]
      },
      55.26315789,
      126
    ],
    "outlier": false
  },
  {
    "data": [
      "Cumberland",
      "$25,090",
      {
        "type": "line",
        "values": [
          57.75502465
        ]
      },
      57.75502465,
      1523
    ],
    "outlier": false
  },
  {
    "data": [
      "Dauphin",
      "$36,627",
      {
        "type": "line",
        "values": [
          67.51909665
        ]
      },
      67.51909665,
      4066
    ],
    "outlier": false
  },
  {
    "data": [
      "Delaware",
      "$38,551",
      {
        "type": "line",
        "values": [
          61.44408689
        ]
      },
      61.44408689,
      6110
    ],
    "outlier": false
  },
  {
    "data": [
      "Elk",
      "$21,336",
      {
        "type": "line",
        "values": [
          79.74683544
        ]
      },
      79.74683544,
      189
    ],
    "outlier": false
  },
  {
    "data": [
      "Erie",
      "$27,835",
      {
        "type": "line",
        "values": [
          60.4815864
        ]
      },
      60.4815864,
      1708
    ],
    "outlier": false
  },
  {
    "data": [
      "Fayette",
      "$19,585",
      {
        "type": "line",
        "values": [
          39.92776886
        ]
      },
      39.92776886,
      995
    ],
    "outlier": false
  },
  {
    "data": [
      "Forest",
      "$22,745",
      {
        "type": "line",
        "values": [
          80.70175439
        ]
      },
      80.70175439,
      46
    ],
    "outlier": false
  },
  {
    "data": [
      "Franklin",
      "$53,507",
      {
        "type": "line",
        "values": [
          76.32904309
        ]
      },
      76.32904309,
      1364
    ],
    "outlier": false
  },
  {
    "data": [
      "Fulton",
      "$54,747",
      {
        "type": "line",
        "values": [
          78.51239669
        ]
      },
      78.51239669,
      95
    ],
    "outlier": false
  },
  {
    "data": [
      "Greene",
      "$15,600",
      {
        "type": "line",
        "values": [
          55.89123867
        ]
      },
      55.89123867,
      185
    ],
    "outlier": false
  },
  {
    "data": [
      "Huntingdon",
      "$18,370",
      {
        "type": "line",
        "values": [
          76.89594356
        ]
      },
      76.89594356,
      436
    ],
    "outlier": false
  },
  {
    "data": [
      "Indiana",
      "$16,626",
      {
        "type": "line",
        "values": [
          42.81345566
        ]
      },
      42.81345566,
      140
    ],
    "outlier": false
  },
  {
    "data": [
      "Jefferson",
      "$45,007",
      {
        "type": "line",
        "values": [
          85.16129032
        ]
      },
      85.16129032,
      396
    ],
    "outlier": false
  },
  {
    "data": [
      "Juniata",
      "$22,417",
      {
        "type": "line",
        "values": [
          73.98843931
        ]
      },
      73.98843931,
      128
    ],
    "outlier": false
  },
  {
    "data": [
      "Lackawanna",
      "$31,102",
      {
        "type": "line",
        "values": [
          72.46600742
        ]
      },
      72.46600742,
      2345
    ],
    "outlier": false
  },
  {
    "data": [
      "Lancaster",
      "$52,605",
      {
        "type": "line",
        "values": [
          64.47848286
        ]
      },
      64.47848286,
      3536
    ],
    "outlier": false
  },
  {
    "data": [
      "Lawrence",
      "$19,204",
      {
        "type": "line",
        "values": [
          43.81742739
        ]
      },
      43.81742739,
      528
    ],
    "outlier": false
  },
  {
    "data": [
      "Lebanon",
      "$24,515",
      {
        "type": "line",
        "values": [
          43.23432343
        ]
      },
      43.23432343,
      917
    ],
    "outlier": false
  },
  {
    "data": [
      "Lehigh",
      "$20,172",
      {
        "type": "line",
        "values": [
          57.91968767
        ]
      },
      57.91968767,
      4154
    ],
    "outlier": false
  },
  {
    "data": [
      "Luzerne",
      "$37,043",
      {
        "type": "line",
        "values": [
          66.80926019
        ]
      },
      66.80926019,
      2655
    ],
    "outlier": false
  },
  {
    "data": [
      "Lycoming",
      "$52,783",
      {
        "type": "line",
        "values": [
          71.89292543
        ]
      },
      71.89292543,
      1128
    ],
    "outlier": false
  },
  {
    "data": [
      "McKean",
      "$23,733",
      {
        "type": "line",
        "values": [
          70.13752456
        ]
      },
      70.13752456,
      357
    ],
    "outlier": false
  },
  {
    "data": [
      "Mercer",
      "$25,052",
      {
        "type": "line",
        "values": [
          49.10820452
        ]
      },
      49.10820452,
      826
    ],
    "outlier": false
  },
  {
    "data": [
      "Mifflin",
      "$39,841",
      {
        "type": "line",
        "values": [
          82.62068966
        ]
      },
      82.62068966,
      599
    ],
    "outlier": false
  },
  {
    "data": [
      "Monroe",
      "$27,444",
      {
        "type": "line",
        "values": [
          38.39793282
        ]
      },
      38.39793282,
      743
    ],
    "outlier": false
  },
  {
    "data": [
      "Montgomery",
      "$25,369",
      {
        "type": "line",
        "values": [
          64.50531837
        ]
      },
      64.50531837,
      4427
    ],
    "outlier": false
  },
  {
    "data": [
      "Montour",
      "$28,679",
      {
        "type": "line",
        "values": [
          65.34653465
        ]
      },
      65.34653465,
      66
    ],
    "outlier": false
  },
  {
    "data": [
      "Northampton",
      "$27,509",
      {
        "type": "line",
        "values": [
          54.74903475
        ]
      },
      54.74903475,
      2127
    ],
    "outlier": false
  },
  {
    "data": [
      "Northumberland",
      "$41,870",
      {
        "type": "line",
        "values": [
          57.73195876
        ]
      },
      57.73195876,
      504
    ],
    "outlier": false
  },
  {
    "data": [
      "Perry",
      "$25,670",
      {
        "type": "line",
        "values": [
          76.99680511
        ]
      },
      76.99680511,
      241
    ],
    "outlier": false
  },
  {
    "data": [
      "Philadelphia",
      "$54,046",
      {
        "type": "line",
        "values": [
          50.7113914
        ]
      },
      50.7113914,
      16645
    ],
    "outlier": false
  },
  {
    "data": [
      "Pike",
      "$22,282",
      {
        "type": "line",
        "values": [
          63.88888889
        ]
      },
      63.88888889,
      253
    ],
    "outlier": false
  },
  {
    "data": [
      "Potter",
      "$19,489",
      {
        "type": "line",
        "values": [
          67.83216783
        ]
      },
      67.83216783,
      97
    ],
    "outlier": false
  },
  {
    "data": [
      "Schuylkill",
      "$20,625",
      {
        "type": "line",
        "values": [
          59.0780809
        ]
      },
      59.0780809,
      1256
    ],
    "outlier": false
  },
  {
    "data": [
      "Snyder",
      "$28,025",
      {
        "type": "line",
        "values": [
          45.69190601
        ]
      },
      45.69190601,
      175
    ],
    "outlier": false
  },
  {
    "data": [
      "Somerset",
      "$37,980",
      {
        "type": "line",
        "values": [
          55.08982036
        ]
      },
      55.08982036,
      276
    ],
    "outlier": false
  },
  {
    "data": [
      "Sullivan",
      "$16,973",
      {
        "type": "line",
        "values": [
          69.23076923
        ]
      },
      69.23076923,
      27
    ],
    "outlier": false
  },
  {
    "data": [
      "Susquehanna",
      "$27,633",
      {
        "type": "line",
        "values": [
          75.07788162
        ]
      },
      75.07788162,
      241
    ],
    "outlier": false
  },
  {
    "data": [
      "Tioga",
      "$20,683",
      {
        "type": "line",
        "values": [
          60.72234763
        ]
      },
      60.72234763,
      538
    ],
    "outlier": false
  },
  {
    "data": [
      "Union",
      "$27,552",
      {
        "type": "line",
        "values": [
          74.61139896
        ]
      },
      74.61139896,
      144
    ],
    "outlier": false
  },
  {
    "data": [
      "Venango",
      "$37,520",
      {
        "type": "line",
        "values": [
          72.88135593
        ]
      },
      72.88135593,
      430
    ],
    "outlier": false
  },
  {
    "data": [
      "Warren",
      "$25,476",
      {
        "type": "line",
        "values": [
          75.87209302
        ]
      },
      75.87209302,
      261
    ],
    "outlier": false
  },
  {
    "data": [
      "Washington",
      "$25,195",
      {
        "type": "line",
        "values": [
          63.82098533
        ]
      },
      63.82098533,
      1697
    ],
    "outlier": false
  },
  {
    "data": [
      "Wayne",
      "$34,180",
      {
        "type": "line",
        "values": [
          46.6442953
        ]
      },
      46.6442953,
      139
    ],
    "outlier": false
  },
  {
    "data": [
      "Westmoreland",
      "$21,095",
      {
        "type": "line",
        "values": [
          71.47154675
        ]
      },
      71.47154675,
      2851
    ],
    "outlier": false
  },
  {
    "data": [
      "Wyoming",
      "$25,128",
      {
        "type": "line",
        "values": [
          67.53246753
        ]
      },
      67.53246753,
      260
    ],
    "outlier": false
  },
  {
    "data": [
      "York",
      "$20,852",
      {
        "type": "line",
        "values": [
          58.36246303
        ]
      },
      58.36246303,
      4341
    ],
    "outlier": false
  }
];