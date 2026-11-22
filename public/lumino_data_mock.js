// TrackFlow — Pre-processed data from mock infrastructure project
// Source: Mock Data — NovaBuild Infra, Jaipur project, Mar 2023 – Oct 2026
// 16 items, 6 depots, 2600 receipts, 231076 contractor moves, 1446 transfers

window.LUMINO = {};

LUMINO.items = [
  { code: "STP010022", name: "PRECAST CONCRETE COLUMN 9 MTR",        unit: "PCS", lead: 150, role: "Independent" },
  { code: "CAB030011", name: "HT ARMOURED XLPE CABLE 3X120",         unit: "KM",  lead: 60,  role: "Independent" },
  { code: "CLM090003", name: "STRAIN CLAMP",                          unit: "NOS", lead: 90,  role: "Independent" },
  { code: "CON010009", name: "COMPRESSION CONNECTORS / SLEEVE",       unit: "NOS", lead: 90,  role: "Independent" },
  { code: "EHK050081", name: "ANCHOR CLAMP",                          unit: "NOS", lead: 120, role: "Independent" },
  { code: "CBL070018", name: "1x35 mm2 HT Cable for junction boxes",  unit: "MTR", lead: 60,  role: "Independent" },
  { code: "CBL070044", name: "Insulated Crimping Connector",           unit: "NOS", lead: 120, role: "Independent" },
  { code: "CBL070055", name: "COLUMN BRACKET ASSEMBLY",               unit: "SET", lead: 90,  role: "Parent" },
  { code: "CBL070068", name: "Single Phase Junction Box",              unit: "NOS", lead: 120, role: "Parent" },
  { code: "CBL070071", name: "Three Phase Junction Box",               unit: "NOS", lead: 120, role: "Parent" },
  { code: "EHK050063", name: "SPRING HOOK",                           unit: "NOS", lead: 90,  role: "Child" },
  { code: "LUG020014", name: "35 SQMM COPPER LUGS RING TYPE",         unit: "NOS", lead: 30,  role: "Child" },
  { code: "LUG020019", name: "35 SQMM COPPER LUGS",                   unit: "NOS", lead: 30,  role: "Child" },
  { code: "BLT010003", name: "STAINLESS STEEL HEX BOLTS & NUTS",      unit: "KG",  lead: 90,  role: "Child" },
  { code: "BLT010112", name: "STAINLESS STEEL BOLTS AND NUTS",         unit: "KG",  lead: 90,  role: "Child" },
  { code: "BLT010168", name: "M.S. NUTS & BOLTS (M18X70 MM)",          unit: "MT",  lead: 90,  role: "Child" },
];

LUMINO.godowns = [
  "JAIPUR CENTRAL", "JAIPUR EAST", "JAIPUR WEST",
  "JAIPUR NORTH", "JAIPUR SOUTH", "JAIPUR RURAL"
];

LUMINO.sets = [
  { parent: "CBL070055", child: "EHK050063", ratio: 1.0 },
  { parent: "CBL070055", child: "BLT010003", ratio: 1.0 },
  { parent: "CBL070055", child: "BLT010112", ratio: 1.0 },
  { parent: "CBL070055", child: "BLT010168", ratio: 1.0 },
  { parent: "CBL070068", child: "BLT010168", ratio: 0.75 },
  { parent: "CBL070068", child: "LUG020019", ratio: 0.25 },
  { parent: "CBL070071", child: "BLT010168", ratio: 0.75 },
  { parent: "CBL070071", child: "LUG020014", ratio: 0.25 },
];

// Monthly receipts: { month, item_code, godown, qty_received }
// Aggregated from receipts.csv (2,600 rows)
LUMINO.receipts = [
  // --- STP010022 (PRECAST CONCRETE COLUMN) ---
  {m:"2023-03",c:"STP010022",g:"JAIPUR CENTRAL",  r:410},
  {m:"2023-03",c:"STP010022",g:"JAIPUR EAST",     r:412},
  {m:"2023-04",c:"STP010022",g:"JAIPUR SOUTH",    r:228},
  {m:"2023-04",c:"STP010022",g:"JAIPUR WEST",     r:160},
  {m:"2023-05",c:"STP010022",g:"JAIPUR CENTRAL",  r:328},
  {m:"2023-05",c:"STP010022",g:"JAIPUR EAST",     r:260},
  {m:"2023-05",c:"STP010022",g:"JAIPUR WEST",     r:220},
  {m:"2023-06",c:"STP010022",g:"JAIPUR CENTRAL",  r:410},
  {m:"2023-06",c:"STP010022",g:"JAIPUR EAST",     r:400},
  {m:"2023-06",c:"STP010022",g:"JAIPUR SOUTH",    r:300},
  {m:"2023-06",c:"STP010022",g:"JAIPUR NORTH",    r:280},
  {m:"2023-07",c:"STP010022",g:"JAIPUR CENTRAL",  r:320},
  {m:"2023-07",c:"STP010022",g:"JAIPUR EAST",     r:280},
  {m:"2023-07",c:"STP010022",g:"JAIPUR WEST",     r:240},
  {m:"2023-08",c:"STP010022",g:"JAIPUR CENTRAL",  r:410},
  {m:"2023-08",c:"STP010022",g:"JAIPUR EAST",     r:380},
  {m:"2023-08",c:"STP010022",g:"JAIPUR SOUTH",    r:300},
  {m:"2023-09",c:"STP010022",g:"JAIPUR WEST",     r:280},
  {m:"2023-09",c:"STP010022",g:"JAIPUR NORTH",    r:260},
  {m:"2023-10",c:"STP010022",g:"JAIPUR CENTRAL",  r:328},
  {m:"2023-10",c:"STP010022",g:"JAIPUR EAST",     r:300},
  {m:"2023-11",c:"STP010022",g:"JAIPUR WEST",     r:240},
  {m:"2023-11",c:"STP010022",g:"JAIPUR RURAL",    r:200},
  {m:"2023-12",c:"STP010022",g:"JAIPUR CENTRAL",  r:280},
  {m:"2023-12",c:"STP010022",g:"JAIPUR SOUTH",    r:260},
  {m:"2024-01",c:"STP010022",g:"JAIPUR EAST",     r:320},
  {m:"2024-02",c:"STP010022",g:"JAIPUR WEST",     r:260},
  {m:"2024-03",c:"STP010022",g:"JAIPUR CENTRAL",  r:300},
  {m:"2024-04",c:"STP010022",g:"JAIPUR EAST",     r:260},
  {m:"2024-05",c:"STP010022",g:"JAIPUR NORTH",    r:220},
  {m:"2024-06",c:"STP010022",g:"JAIPUR RURAL",    r:180},
  {m:"2024-07",c:"STP010022",g:"JAIPUR CENTRAL",  r:280},
  {m:"2024-08",c:"STP010022",g:"JAIPUR WEST",     r:260},
  {m:"2024-09",c:"STP010022",g:"JAIPUR EAST",     r:240},
  {m:"2024-10",c:"STP010022",g:"JAIPUR SOUTH",    r:200},
  {m:"2024-11",c:"STP010022",g:"JAIPUR NORTH",    r:180},
  {m:"2025-01",c:"STP010022",g:"JAIPUR CENTRAL",  r:260},
  {m:"2025-03",c:"STP010022",g:"JAIPUR EAST",     r:220},
  {m:"2025-06",c:"STP010022",g:"JAIPUR WEST",     r:180},
  // --- CAB030011 (HT ARMOURED CABLE) ---
  {m:"2023-03",c:"CAB030011",g:"JAIPUR EAST",     r:49.5},
  {m:"2023-04",c:"CAB030011",g:"JAIPUR EAST",     r:38},
  {m:"2023-05",c:"CAB030011",g:"JAIPUR CENTRAL",  r:40},
  {m:"2023-05",c:"CAB030011",g:"JAIPUR WEST",     r:30},
  {m:"2023-06",c:"CAB030011",g:"JAIPUR EAST",     r:50},
  {m:"2023-07",c:"CAB030011",g:"JAIPUR NORTH",    r:35},
  {m:"2023-08",c:"CAB030011",g:"JAIPUR CENTRAL",  r:45},
  {m:"2023-09",c:"CAB030011",g:"JAIPUR WEST",     r:30},
  {m:"2023-10",c:"CAB030011",g:"JAIPUR SOUTH",    r:28},
  {m:"2023-11",c:"CAB030011",g:"JAIPUR EAST",     r:35},
  {m:"2024-01",c:"CAB030011",g:"JAIPUR CENTRAL",  r:40},
  {m:"2024-03",c:"CAB030011",g:"JAIPUR WEST",     r:30},
  {m:"2024-06",c:"CAB030011",g:"JAIPUR NORTH",    r:25},
  // --- CBL070055 (COLUMN BRACKET ASSEMBLY) ---
  {m:"2023-07",c:"CBL070055",g:"JAIPUR CENTRAL",  r:1000},
  {m:"2023-07",c:"CBL070055",g:"JAIPUR EAST",     r:800},
  {m:"2023-07",c:"CBL070055",g:"JAIPUR NORTH",    r:600},
  {m:"2023-08",c:"CBL070055",g:"JAIPUR WEST",     r:500},
  {m:"2023-09",c:"CBL070055",g:"JAIPUR SOUTH",    r:400},
  {m:"2023-10",c:"CBL070055",g:"JAIPUR RURAL",    r:300},
  {m:"2024-01",c:"CBL070055",g:"JAIPUR CENTRAL",  r:600},
  {m:"2024-04",c:"CBL070055",g:"JAIPUR EAST",     r:400},
  // --- CBL070068 (1-phase junction box) ---
  {m:"2023-08",c:"CBL070068",g:"JAIPUR CENTRAL",  r:400},
  {m:"2023-09",c:"CBL070068",g:"JAIPUR EAST",     r:350},
  {m:"2023-10",c:"CBL070068",g:"JAIPUR WEST",     r:280},
  {m:"2024-02",c:"CBL070068",g:"JAIPUR SOUTH",    r:300},
  {m:"2024-05",c:"CBL070068",g:"JAIPUR NORTH",    r:200},
  // --- CBL070071 (3-phase junction box) ---
  {m:"2023-08",c:"CBL070071",g:"JAIPUR CENTRAL",  r:200},
  {m:"2023-09",c:"CBL070071",g:"JAIPUR EAST",     r:180},
  {m:"2023-10",c:"CBL070071",g:"JAIPUR WEST",     r:150},
  {m:"2024-03",c:"CBL070071",g:"JAIPUR SOUTH",    r:160},
  // --- EHK050063 (SPRING HOOK) ---
  {m:"2023-07",c:"EHK050063",g:"JAIPUR CENTRAL",  r:1000},
  {m:"2023-07",c:"EHK050063",g:"JAIPUR EAST",     r:800},
  {m:"2023-08",c:"EHK050063",g:"JAIPUR WEST",     r:500},
  {m:"2024-02",c:"EHK050063",g:"JAIPUR NORTH",    r:400},
  // --- BLT010168 (MS Nuts & Bolts MT) ---
  {m:"2023-07",c:"BLT010168",g:"JAIPUR CENTRAL",  r:2.5},
  {m:"2023-07",c:"BLT010168",g:"JAIPUR EAST",     r:2.0},
  {m:"2023-08",c:"BLT010168",g:"JAIPUR WEST",     r:1.5},
  {m:"2023-09",c:"BLT010168",g:"JAIPUR SOUTH",    r:1.2},
  {m:"2024-01",c:"BLT010168",g:"JAIPUR NORTH",    r:1.5},
  {m:"2024-04",c:"BLT010168",g:"JAIPUR EAST",     r:1.0},
  // --- CON010009 (COMPRESSION CONNECTORS) ---
  {m:"2023-07",c:"CON010009",g:"JAIPUR WEST",     r:800},
  {m:"2023-08",c:"CON010009",g:"JAIPUR CENTRAL",  r:600},
  {m:"2023-09",c:"CON010009",g:"JAIPUR EAST",     r:500},
  {m:"2024-02",c:"CON010009",g:"JAIPUR SOUTH",    r:400},
  // --- EHK050081 (ANCHOR CLAMP) ---
  {m:"2023-07",c:"EHK050081",g:"JAIPUR WEST",     r:350},
  {m:"2023-08",c:"EHK050081",g:"JAIPUR CENTRAL",  r:300},
  {m:"2023-09",c:"EHK050081",g:"JAIPUR EAST",     r:250},
  {m:"2024-03",c:"EHK050081",g:"JAIPUR NORTH",    r:200},
  // --- CLM090003 (STRAIN CLAMP) ---
  {m:"2023-07",c:"CLM090003",g:"JAIPUR CENTRAL",  r:600},
  {m:"2023-08",c:"CLM090003",g:"JAIPUR EAST",     r:500},
  {m:"2023-09",c:"CLM090003",g:"JAIPUR WEST",     r:400},
  {m:"2024-01",c:"CLM090003",g:"JAIPUR SOUTH",    r:350},
  // --- LUG020019 (35sqmm Copper Lugs) ---
  {m:"2023-08",c:"LUG020019",g:"JAIPUR CENTRAL",  r:1200},
  {m:"2023-09",c:"LUG020019",g:"JAIPUR EAST",     r:1000},
  {m:"2024-02",c:"LUG020019",g:"JAIPUR WEST",     r:800},
  // --- LUG020014 (Ring Lugs) ---
  {m:"2023-09",c:"LUG020014",g:"JAIPUR CENTRAL",  r:600},
  {m:"2024-01",c:"LUG020014",g:"JAIPUR EAST",     r:500},
];

// Monthly contractor moves: { month, item_code, godown, issue, ret, consumption }
// Aggregated from contractor_moves.csv (231,076 rows)
LUMINO.moves = [
  // STP010022 - COLUMNS (the main story: ordered 1000/mo, used 400/600/300)
  {m:"2023-04",c:"STP010022",g:"JAIPUR WEST",     issue:120, ret:0,  cons:0},
  {m:"2023-04",c:"STP010022",g:"JAIPUR EAST",     issue:30,  ret:0,  cons:0},
  {m:"2023-05",c:"STP010022",g:"JAIPUR WEST",     issue:180, ret:20, cons:0},
  {m:"2023-05",c:"STP010022",g:"JAIPUR CENTRAL",  issue:100, ret:0,  cons:0},
  {m:"2023-06",c:"STP010022",g:"JAIPUR EAST",     issue:150, ret:30, cons:0},
  {m:"2023-06",c:"STP010022",g:"JAIPUR SOUTH",    issue:120, ret:0,  cons:0},
  // CONSUMPTION rows have no godown in source data
  {m:"2023-04",c:"STP010022",g:"",    issue:0,   ret:0,  cons:400},
  {m:"2023-05",c:"STP010022",g:"",    issue:0,   ret:0,  cons:600},
  {m:"2023-06",c:"STP010022",g:"",    issue:0,   ret:0,  cons:300},
  {m:"2023-07",c:"STP010022",g:"JAIPUR CENTRAL",  issue:200, ret:0,  cons:0},
  {m:"2023-07",c:"STP010022",g:"JAIPUR EAST",     issue:160, ret:20, cons:0},
  {m:"2023-07",c:"STP010022",g:"",    issue:0,   ret:0,  cons:450},
  {m:"2023-08",c:"STP010022",g:"JAIPUR CENTRAL",  issue:220, ret:30, cons:0},
  {m:"2023-08",c:"STP010022",g:"JAIPUR WEST",     issue:180, ret:10, cons:0},
  {m:"2023-08",c:"STP010022",g:"",    issue:0,   ret:0,  cons:520},
  {m:"2023-09",c:"STP010022",g:"JAIPUR EAST",     issue:160, ret:20, cons:0},
  {m:"2023-09",c:"STP010022",g:"JAIPUR NORTH",    issue:140, ret:0,  cons:0},
  {m:"2023-09",c:"STP010022",g:"",    issue:0,   ret:0,  cons:480},
  {m:"2023-10",c:"STP010022",g:"JAIPUR CENTRAL",  issue:180, ret:30, cons:0},
  {m:"2023-10",c:"STP010022",g:"JAIPUR EAST",     issue:140, ret:20, cons:0},
  {m:"2023-10",c:"STP010022",g:"",    issue:0,   ret:0,  cons:420},
  {m:"2023-11",c:"STP010022",g:"JAIPUR WEST",     issue:120, ret:10, cons:0},
  {m:"2023-11",c:"STP010022",g:"JAIPUR RURAL",    issue:100, ret:0,  cons:0},
  {m:"2023-11",c:"STP010022",g:"",    issue:0,   ret:0,  cons:360},
  {m:"2023-12",c:"STP010022",g:"JAIPUR CENTRAL",  issue:140, ret:20, cons:0},
  {m:"2023-12",c:"STP010022",g:"JAIPUR SOUTH",    issue:120, ret:10, cons:0},
  {m:"2023-12",c:"STP010022",g:"",    issue:0,   ret:0,  cons:380},
  {m:"2024-01",c:"STP010022",g:"JAIPUR EAST",     issue:160, ret:20, cons:0},
  {m:"2024-01",c:"STP010022",g:"",    issue:0,   ret:0,  cons:400},
  {m:"2024-02",c:"STP010022",g:"JAIPUR WEST",     issue:140, ret:10, cons:0},
  {m:"2024-02",c:"STP010022",g:"",    issue:0,   ret:0,  cons:360},
  {m:"2024-03",c:"STP010022",g:"JAIPUR CENTRAL",  issue:160, ret:20, cons:0},
  {m:"2024-03",c:"STP010022",g:"",    issue:0,   ret:0,  cons:420},
  {m:"2024-04",c:"STP010022",g:"JAIPUR EAST",     issue:120, ret:10, cons:0},
  {m:"2024-04",c:"STP010022",g:"",    issue:0,   ret:0,  cons:340},
  {m:"2024-05",c:"STP010022",g:"JAIPUR NORTH",    issue:100, ret:0,  cons:0},
  {m:"2024-05",c:"STP010022",g:"",    issue:0,   ret:0,  cons:300},
  {m:"2024-06",c:"STP010022",g:"JAIPUR RURAL",    issue:80,  ret:0,  cons:0},
  {m:"2024-06",c:"STP010022",g:"",    issue:0,   ret:0,  cons:260},
  {m:"2024-07",c:"STP010022",g:"JAIPUR CENTRAL",  issue:100, ret:10, cons:0},
  {m:"2024-07",c:"STP010022",g:"",    issue:0,   ret:0,  cons:280},
  {m:"2024-08",c:"STP010022",g:"JAIPUR WEST",     issue:120, ret:10, cons:0},
  {m:"2024-08",c:"STP010022",g:"",    issue:0,   ret:0,  cons:300},
  {m:"2024-09",c:"STP010022",g:"JAIPUR EAST",     issue:100, ret:10, cons:0},
  {m:"2024-09",c:"STP010022",g:"",    issue:0,   ret:0,  cons:260},
  {m:"2024-10",c:"STP010022",g:"JAIPUR SOUTH",    issue:80,  ret:0,  cons:0},
  {m:"2024-10",c:"STP010022",g:"",    issue:0,   ret:0,  cons:220},
  {m:"2024-11",c:"STP010022",g:"JAIPUR NORTH",    issue:60,  ret:0,  cons:0},
  {m:"2024-11",c:"STP010022",g:"",    issue:0,   ret:0,  cons:180},
  {m:"2025-01",c:"STP010022",g:"JAIPUR CENTRAL",  issue:80,  ret:0,  cons:0},
  {m:"2025-01",c:"STP010022",g:"",    issue:0,   ret:0,  cons:200},
  {m:"2025-03",c:"STP010022",g:"JAIPUR EAST",     issue:60,  ret:0,  cons:0},
  {m:"2025-03",c:"STP010022",g:"",    issue:0,   ret:0,  cons:160},
  {m:"2025-06",c:"STP010022",g:"JAIPUR WEST",     issue:40,  ret:0,  cons:0},
  {m:"2025-06",c:"STP010022",g:"",    issue:0,   ret:0,  cons:120},
  // CAB030011 cable
  {m:"2023-04",c:"CAB030011",g:"JAIPUR EAST",     issue:20,  ret:0,  cons:0},
  {m:"2023-04",c:"CAB030011",g:"",    issue:0,   ret:0,  cons:18},
  {m:"2023-05",c:"CAB030011",g:"JAIPUR EAST",     issue:30,  ret:2,  cons:0},
  {m:"2023-05",c:"CAB030011",g:"",    issue:0,   ret:0,  cons:25},
  {m:"2023-06",c:"CAB030011",g:"JAIPUR WEST",     issue:25,  ret:3,  cons:0},
  {m:"2023-06",c:"CAB030011",g:"",    issue:0,   ret:0,  cons:30},
  {m:"2023-07",c:"CAB030011",g:"JAIPUR CENTRAL",  issue:30,  ret:2,  cons:0},
  {m:"2023-07",c:"CAB030011",g:"",    issue:0,   ret:0,  cons:35},
  {m:"2023-08",c:"CAB030011",g:"JAIPUR NORTH",    issue:25,  ret:0,  cons:0},
  {m:"2023-08",c:"CAB030011",g:"",    issue:0,   ret:0,  cons:28},
  {m:"2023-09",c:"CAB030011",g:"JAIPUR WEST",     issue:20,  ret:2,  cons:0},
  {m:"2023-09",c:"CAB030011",g:"",    issue:0,   ret:0,  cons:22},
  // CBL070055 (COLUMN BRACKET ASSEMBLY - parent set)
  {m:"2023-08",c:"CBL070055",g:"JAIPUR CENTRAL",  issue:300, ret:20, cons:0},
  {m:"2023-08",c:"CBL070055",g:"",    issue:0,   ret:0,  cons:400},
  {m:"2023-09",c:"CBL070055",g:"JAIPUR EAST",     issue:250, ret:30, cons:0},
  {m:"2023-09",c:"CBL070055",g:"",    issue:0,   ret:0,  cons:350},
  {m:"2023-10",c:"CBL070055",g:"JAIPUR WEST",     issue:200, ret:20, cons:0},
  {m:"2023-10",c:"CBL070055",g:"",    issue:0,   ret:0,  cons:280},
  {m:"2023-11",c:"CBL070055",g:"JAIPUR NORTH",    issue:180, ret:10, cons:0},
  {m:"2023-11",c:"CBL070055",g:"",    issue:0,   ret:0,  cons:240},
  {m:"2024-01",c:"CBL070055",g:"JAIPUR CENTRAL",  issue:300, ret:20, cons:0},
  {m:"2024-01",c:"CBL070055",g:"",    issue:0,   ret:0,  cons:380},
  {m:"2024-04",c:"CBL070055",g:"JAIPUR EAST",     issue:200, ret:10, cons:0},
  {m:"2024-04",c:"CBL070055",g:"",    issue:0,   ret:0,  cons:260},
  // EHK050063 (SPRING HOOK - child of COLUMN BRACKET)
  {m:"2023-08",c:"EHK050063",g:"JAIPUR CENTRAL",  issue:300, ret:20, cons:0},
  {m:"2023-08",c:"EHK050063",g:"",    issue:0,   ret:0,  cons:380},
  {m:"2023-09",c:"EHK050063",g:"JAIPUR EAST",     issue:240, ret:30, cons:0},
  {m:"2023-09",c:"EHK050063",g:"",    issue:0,   ret:0,  cons:340},
  {m:"2023-10",c:"EHK050063",g:"JAIPUR WEST",     issue:180, ret:20, cons:0},
  {m:"2023-10",c:"EHK050063",g:"",    issue:0,   ret:0,  cons:260},
  {m:"2024-01",c:"EHK050063",g:"JAIPUR CENTRAL",  issue:280, ret:20, cons:0},
  {m:"2024-01",c:"EHK050063",g:"",    issue:0,   ret:0,  cons:360},
  // BLT010168 (MS Nuts bolts - shared child)
  {m:"2023-08",c:"BLT010168",g:"JAIPUR CENTRAL",  issue:0.8, ret:0.05, cons:0},
  {m:"2023-08",c:"BLT010168",g:"",    issue:0,   ret:0,  cons:1.0},
  {m:"2023-09",c:"BLT010168",g:"JAIPUR EAST",     issue:0.6, ret:0.05, cons:0},
  {m:"2023-09",c:"BLT010168",g:"",    issue:0,   ret:0,  cons:0.8},
  {m:"2023-10",c:"BLT010168",g:"JAIPUR WEST",     issue:0.5, ret:0.05, cons:0},
  {m:"2023-10",c:"BLT010168",g:"",    issue:0,   ret:0,  cons:0.65},
  {m:"2024-01",c:"BLT010168",g:"JAIPUR CENTRAL",  issue:0.7, ret:0.05, cons:0},
  {m:"2024-01",c:"BLT010168",g:"",    issue:0,   ret:0,  cons:0.9},
  // CBL070068 single phase
  {m:"2023-09",c:"CBL070068",g:"JAIPUR CENTRAL",  issue:150, ret:10, cons:0},
  {m:"2023-09",c:"CBL070068",g:"",    issue:0,   ret:0,  cons:180},
  {m:"2023-10",c:"CBL070068",g:"JAIPUR EAST",     issue:120, ret:5,  cons:0},
  {m:"2023-10",c:"CBL070068",g:"",    issue:0,   ret:0,  cons:150},
  {m:"2024-02",c:"CBL070068",g:"JAIPUR SOUTH",    issue:100, ret:5,  cons:0},
  {m:"2024-02",c:"CBL070068",g:"",    issue:0,   ret:0,  cons:120},
  // CBL070071 three phase
  {m:"2023-09",c:"CBL070071",g:"JAIPUR CENTRAL",  issue:80,  ret:5,  cons:0},
  {m:"2023-09",c:"CBL070071",g:"",    issue:0,   ret:0,  cons:90},
  {m:"2023-10",c:"CBL070071",g:"JAIPUR EAST",     issue:60,  ret:5,  cons:0},
  {m:"2023-10",c:"CBL070071",g:"",    issue:0,   ret:0,  cons:75},
  // CON010009 compression connectors
  {m:"2023-08",c:"CON010009",g:"JAIPUR WEST",     issue:300, ret:20, cons:0},
  {m:"2023-08",c:"CON010009",g:"",    issue:0,   ret:0,  cons:350},
  {m:"2023-09",c:"CON010009",g:"JAIPUR CENTRAL",  issue:250, ret:10, cons:0},
  {m:"2023-09",c:"CON010009",g:"",    issue:0,   ret:0,  cons:280},
  {m:"2024-02",c:"CON010009",g:"JAIPUR SOUTH",    issue:180, ret:10, cons:0},
  {m:"2024-02",c:"CON010009",g:"",    issue:0,   ret:0,  cons:200},
  // EHK050081 anchor clamp
  {m:"2023-08",c:"EHK050081",g:"JAIPUR WEST",     issue:120, ret:10, cons:0},
  {m:"2023-08",c:"EHK050081",g:"",    issue:0,   ret:0,  cons:140},
  {m:"2023-09",c:"EHK050081",g:"JAIPUR CENTRAL",  issue:100, ret:5,  cons:0},
  {m:"2023-09",c:"EHK050081",g:"",    issue:0,   ret:0,  cons:120},
];

// Monthly transfers: { month, item_code, godown, direction, qty }
LUMINO.transfers = [
  {m:"2023-05",c:"BLT010168",g:"JAIPUR NORTH",    dir:"OUT", qty:0.2},
  {m:"2023-05",c:"BLT010168",g:"JAIPUR SOUTH",    dir:"IN",  qty:0.2},
  {m:"2023-07",c:"CON010009",g:"JAIPUR NORTH",    dir:"OUT", qty:800},
  {m:"2023-07",c:"CON010009",g:"JAIPUR WEST",     dir:"IN",  qty:800},
  {m:"2023-07",c:"EHK050081",g:"JAIPUR NORTH",    dir:"OUT", qty:350},
  {m:"2023-07",c:"EHK050081",g:"JAIPUR WEST",     dir:"IN",  qty:350},
  {m:"2023-07",c:"CBL070055",g:"JAIPUR CENTRAL",  dir:"OUT", qty:500},
  {m:"2023-07",c:"CBL070055",g:"JAIPUR EAST",     dir:"OUT", qty:500},
  {m:"2023-07",c:"CBL070055",g:"JAIPUR NORTH",    dir:"IN",  qty:500},
  {m:"2023-07",c:"CBL070055",g:"JAIPUR NORTH",    dir:"OUT", qty:500},
];

// Computed monthly idle stock (godown stock - with contractors)
// Formula: cumulative receipts + transfers_IN - transfers_OUT - issues + returns
// This is the KEY number that shows the problem
LUMINO.idleByMonth = (function() {
  const months = [];
  // Generate month list Mar 2023 to Oct 2026
  let d = new Date(2023, 2, 1);
  const end = new Date(2026, 9, 1);
  while (d <= end) {
    months.push(d.toISOString().slice(0,7));
    d = new Date(d.getFullYear(), d.getMonth()+1, 1);
  }

  const result = {};
  for (const item of LUMINO.items) {
    result[item.code] = {};
    for (const godown of LUMINO.godowns) {
      result[item.code][godown] = {};
      let cumStock = 0;
      for (const m of months) {
        // Receipts this month
        const rec = LUMINO.receipts
          .filter(r => r.m === m && r.c === item.code && r.g === godown)
          .reduce((s, r) => s + r.r, 0);
        // Transfers IN
        const tIn = LUMINO.transfers
          .filter(t => t.m === m && t.c === item.code && t.g === godown && t.dir === "IN")
          .reduce((s, t) => s + t.qty, 0);
        // Transfers OUT
        const tOut = LUMINO.transfers
          .filter(t => t.m === m && t.c === item.code && t.g === godown && t.dir === "OUT")
          .reduce((s, t) => s + t.qty, 0);
        // Issues from this godown
        const issues = LUMINO.moves
          .filter(mv => mv.m === m && mv.c === item.code && mv.g === godown)
          .reduce((s, mv) => s + mv.issue, 0);
        // Returns to this godown
        const returns = LUMINO.moves
          .filter(mv => mv.m === m && mv.c === item.code && mv.g === godown)
          .reduce((s, mv) => s + mv.ret, 0);

        cumStock += rec + tIn - tOut - issues + returns;
        if (cumStock < 0) cumStock = 0; // per README: treat small negatives as 0
        result[item.code][godown][m] = {
          received: rec,
          tIn, tOut,
          issued: issues,
          returned: returns,
          godownStock: Math.round(cumStock * 1000) / 1000
        };
      }
    }
    // Project-wide consumption (no godown)
    result[item.code]["PROJECT"] = {};
    let cumCons = 0;
    let cumWithContractor = 0;
    for (const m of months) {
      const cons = LUMINO.moves
        .filter(mv => mv.m === m && mv.c === item.code && mv.g === "")
        .reduce((s, mv) => s + mv.cons, 0);
      // All godown issues this month
      const totalIssue = LUMINO.moves
        .filter(mv => mv.m === m && mv.c === item.code && mv.g !== "")
        .reduce((s, mv) => s + mv.issue, 0);
      const totalReturn = LUMINO.moves
        .filter(mv => mv.m === m && mv.c === item.code && mv.g !== "")
        .reduce((s, mv) => s + mv.ret, 0);
      cumCons += cons;
      cumWithContractor += totalIssue - totalReturn - cons;
      if (cumWithContractor < 0) cumWithContractor = 0;
      result[item.code]["PROJECT"][m] = {
        consumption: cons,
        cumConsumption: Math.round(cumCons * 1000) / 1000,
        withContractor: Math.round(cumWithContractor * 1000) / 1000
      };
    }
  }
  return result;
})();

LUMINO.months = (function() {
  const months = [];
  let d = new Date(2023, 2, 1);
  const end = new Date(2026, 9, 1);
  while (d <= end) {
    months.push(d.toISOString().slice(0,7));
    d = new Date(d.getFullYear(), d.getMonth()+1, 1);
  }
  return months;
})();
