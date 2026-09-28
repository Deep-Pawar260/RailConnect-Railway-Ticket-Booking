export const stations=[
 {code:"PUNE",name:"Pune Junction",city:"Pune",platforms:6,zone:"Central Railway"},
 {code:"CSMT",name:"Mumbai CSMT",city:"Mumbai",platforms:18,zone:"Central Railway"},
 {code:"NDLS",name:"New Delhi",city:"New Delhi",platforms:16,zone:"Northern Railway"},
 {code:"BPL",name:"Bhopal Junction",city:"Bhopal",platforms:6,zone:"West Central Railway"},
 {code:"NGP",name:"Nagpur Junction",city:"Nagpur",platforms:8,zone:"Central Railway"},
 {code:"ADI",name:"Ahmedabad Junction",city:"Ahmedabad",platforms:12,zone:"Western Railway"},
 {code:"JP",name:"Jaipur Junction",city:"Jaipur",platforms:7,zone:"North Western Railway"},
 {code:"LKO",name:"Lucknow NR",city:"Lucknow",platforms:9,zone:"Northern Railway"},
 {code:"HYB",name:"Hyderabad Deccan",city:"Hyderabad",platforms:6,zone:"South Central Railway"},
 {code:"MAS",name:"Chennai Central",city:"Chennai",platforms:12,zone:"Southern Railway"},
 {code:"MMCT",name:"Mumbai Central",city:"Mumbai",platforms:9,zone:"Western Railway"},
 {code:"NDLS2",name:"Anand Vihar Terminal",city:"Delhi",platforms:7,zone:"Northern Railway"}
];

export const trains=[
 {id:101,name:"Deccan Express",number:"11007",from:"PUNE",to:"CSMT",dep:"07:15",arr:"10:55",duration:"3h 40m",minutes:220,classes:["CC","2S"],fare:{CC:520,"2S":180},days:"Daily",platform:"3",type:"Express",status:"On Time",occupancy:78},
 {id:102,name:"Intercity Express",number:"12127",from:"PUNE",to:"CSMT",dep:"06:35",arr:"10:10",duration:"3h 35m",minutes:215,classes:["CC","2S"],fare:{CC:610,"2S":190},days:"Daily",platform:"2",type:"Intercity",status:"On Time",occupancy:69},
 {id:103,name:"Pune Duronto",number:"12219",from:"PUNE",to:"NDLS",dep:"11:10",arr:"08:35",duration:"21h 25m",minutes:1285,classes:["1A","2A","3A"],fare:{"1A":3550,"2A":2140,"3A":1490},days:"Mon,Wed,Fri",platform:"5",type:"Duronto",status:"Running 6 min late",occupancy:91},
 {id:104,name:"Maharashtra Express",number:"11040",from:"CSMT",to:"NGP",dep:"21:10",arr:"11:35",duration:"14h 25m",minutes:865,classes:["SL","3A","2A"],fare:{SL:520,"3A":1390,"2A":1980},days:"Daily",platform:"8",type:"Express",status:"On Time",occupancy:83},
 {id:105,name:"A Intercity",number:"22944",from:"ADI",to:"JP",dep:"06:00",arr:"13:20",duration:"7h 20m",minutes:440,classes:["CC","2S"],fare:{CC:860,"2S":320},days:"Daily",platform:"1",type:"Intercity",status:"On Time",occupancy:64},
 {id:106,name:"Deccan Queen",number:"12124",from:"PUNE",to:"CSMT",dep:"07:10",arr:"10:25",duration:"3h 15m",minutes:195,classes:["CC","2S"],fare:{CC:560,"2S":170},days:"Daily",platform:"6",type:"Superfast",status:"Boarding Soon",occupancy:88},
 {id:107,name:"Nizamuddin Express",number:"12494",from:"NDLS",to:"BPL",dep:"20:45",arr:"06:25",duration:"9h 40m",minutes:580,classes:["SL","3A","2A","1A"],fare:{SL:590,"3A":1490,"2A":2120,"1A":3600},days:"Daily",platform:"4",type:"Express",status:"On Time",occupancy:74},
 {id:108,name:"Hyderabad Express",number:"12701",from:"CSMT",to:"HYB",dep:"22:10",arr:"13:05",duration:"14h 55m",minutes:895,classes:["SL","3A","2A"],fare:{SL:650,"3A":1580,"2A":2210},days:"Tue,Thu,Sat",platform:"9",type:"Express",status:"On Time",occupancy:72},
 {id:109,name:"Dakshin Express",number:"12721",from:"HYB",to:"NDLS",dep:"11:00",arr:"18:40",duration:"31h 40m",minutes:1900,classes:["SL","3A","2A"],fare:{SL:780,"3A":1880,"2A":2650},days:"Daily",platform:"2",type:"Superfast",status:"Running 12 min late",occupancy:86},
 {id:110,name:"Gondwana Express",number:"12406",from:"NGP",to:"NDLS",dep:"17:10",arr:"11:50",duration:"18h 40m",minutes:1120,classes:["SL","3A","2A"],fare:{SL:670,"3A":1640,"2A":2320},days:"Daily",platform:"7",type:"Superfast",status:"On Time",occupancy:81},
 {id:111,name:"Chennai Mail",number:"11041",from:"CSMT",to:"MAS",dep:"21:30",arr:"09:45",duration:"12h 15m",minutes:735,classes:["SL","3A","2A"],fare:{SL:690,"3A":1560,"2A":2240},days:"Daily",platform:"4",type:"Mail/Express",status:"On Time",occupancy:77},
 {id:112,name:"Jaipur Superfast",number:"12955",from:"MMCT",to:"JP",dep:"18:50",arr:"06:25",duration:"11h 35m",minutes:695,classes:["1A","2A","3A"],fare:{"1A":3150,"2A":1890,"3A":1310},days:"Daily",platform:"5",type:"Superfast",status:"On Time",occupancy:80}
];

export const foodItems=[
 {id:1,name:"Veg Executive Meal",category:"Meals",price:180,tag:"Popular",desc:"Rice, dal, two vegetables, roti and dessert",icon:"🍱"},
 {id:2,name:"Paneer Thali",category:"Meals",price:220,tag:"Veg",desc:"Paneer curry, dal, rice, roti, salad and sweet",icon:"🥘"},
 {id:3,name:"Masala Dosa",category:"Breakfast",price:110,tag:"South Indian",desc:"Crispy dosa with sambar and chutney",icon:"🥞"},
 {id:4,name:"Veg Sandwich",category:"Snacks",price:90,tag:"Quick Bite",desc:"Grilled vegetable sandwich",icon:"🥪"},
 {id:5,name:"Tea & Samosa",category:"Snacks",price:70,tag:"Combo",desc:"Masala tea with two samosas",icon:"☕"},
 {id:6,name:"Bottled Water",category:"Beverages",price:25,tag:"Essential",desc:"Packaged drinking water",icon:"💧"},
 {id:7,name:"Fresh Fruit Bowl",category:"Healthy",price:95,tag:"Healthy",desc:"Seasonal fresh fruit selection",icon:"🍎"},
 {id:8,name:"Veg Biryani",category:"Meals",price:160,tag:"Chef Special",desc:"Aromatic rice with vegetables and raita",icon:"🍚"}
];

export const alerts=[
 {id:1,type:"Travel Alert",title:"Platform information",text:"Platform numbers can change. Check the station display before boarding.",time:"2 min ago",level:"info"},
 {id:2,type:"Train Update",title:"Pune Duronto 12219",text:"Demo tracker shows a 6-minute delay near Bhopal.",time:"8 min ago",level:"warning"},
 {id:3,type:"Service",title:"Food ordering available",text:"Pre-order meals from supported stations for your journey.",time:"Today",level:"success"},
 {id:4,type:"Reminder",title:"Carry a valid ID",text:"Keep your ticket and an accepted identity document ready.",time:"Today",level:"info"}
];

export const initialBookings=[
 {pnr:"4837291056",train:"Deccan Express",number:"11007",from:"Pune Junction",to:"Mumbai CSMT",date:"2026-09-28",cls:"CC",passengers:[{name:"Demo Passenger",age:22,gender:"Male",seat:"C1-24"}],total:520,status:"Confirmed",created:"2026-09-27"}
];
