const n=[{canton:"AG",buildings_total:153894,single_family_home:102206,inhabitants:703086,region:"Northwestern Switzerland",prc_single_home:66.41},{canton:"AI",buildings_total:5299,single_family_home:2917,inhabitants:16360,region:"Eastern Switzerland",prc_single_home:55.05},{canton:"AR",buildings_total:16323,single_family_home:9251,inhabitants:55585,region:"Eastern Switzerland",prc_single_home:56.67},{canton:"BE",buildings_total:238111,single_family_home:114053,inhabitants:1047473,region:"Espace Midland",prc_single_home:47.9},{canton:"BL",buildings_total:67390,single_family_home:46632,inhabitants:292817,region:"Northwestern Switzerland",prc_single_home:69.2},{canton:"BS",buildings_total:23709,single_family_home:9289,inhabitants:196036,region:"Northwestern Switzerland",prc_single_home:39.18},{canton:"FR",buildings_total:73439,single_family_home:44311,inhabitants:329809,region:"Espace Midland",prc_single_home:60.34},{canton:"GE",buildings_total:44932,single_family_home:25988,inhabitants:509448,region:"Lake Geneva Region",prc_single_home:57.84},{canton:"GL",buildings_total:13965,single_family_home:10022,inhabitants:41190,region:"Eastern Switzerland",prc_single_home:71.77},{canton:"GR",buildings_total:71340,single_family_home:35198,inhabitants:201376,region:"Eastern Switzerland",prc_single_home:49.34},{canton:"JU",buildings_total:23324,single_family_home:15664,inhabitants:73798,region:"Espace Midland",prc_single_home:67.16},{canton:"LU",buildings_total:70035,single_family_home:32143,inhabitants:420326,region:"Central Switzerland",prc_single_home:45.9},{canton:"NE",buildings_total:31387,single_family_home:14576,inhabitants:176166,region:"Espace Midland",prc_single_home:46.44},{canton:"NW",buildings_total:7960,single_family_home:2686,inhabitants:43894,region:"Central Switzerland",prc_single_home:33.74},{canton:"OW",buildings_total:9478,single_family_home:4101,inhabitants:38435,region:"Central Switzerland",prc_single_home:43.27},{canton:"SG",buildings_total:114355,single_family_home:68051,inhabitants:519245,region:"Eastern Switzerland",prc_single_home:59.51},{canton:"SH",buildings_total:19349,single_family_home:11839,inhabitants:83995,region:"Eastern Switzerland",prc_single_home:61.19},{canton:"SO",buildings_total:70176,single_family_home:46893,inhabitants:280245,region:"Espace Midland",prc_single_home:66.82},{canton:"SZ",buildings_total:32152,single_family_home:15775,inhabitants:163689,region:"Central Switzerland",prc_single_home:49.06},{canton:"TG",buildings_total:66339,single_family_home:40912,inhabitants:285964,region:"Eastern Switzerland",prc_single_home:61.67},{canton:"TI",buildings_total:113368,single_family_home:76348,inhabitants:352181,region:"Ticino",prc_single_home:67.35},{canton:"UR",buildings_total:10102,single_family_home:4880,inhabitants:37047,region:"Central Switzerland",prc_single_home:48.31},{canton:"VD",buildings_total:137083,single_family_home:75678,inhabitants:822968,region:"Lake Geneva Region",prc_single_home:55.21},{canton:"VS",buildings_total:116889,single_family_home:72454,inhabitants:353209,region:"Lake Geneva Region",prc_single_home:61.99},{canton:"ZG",buildings_total:16421,single_family_home:6603,inhabitants:129787,region:"Central Switzerland",prc_single_home:40.21},{canton:"ZH",buildings_total:227341,single_family_home:118612,inhabitants:1564662,region:"Zurich",prc_single_home:52.17}];function i(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}const t=n=>`\n    <div class="c-tooltip">\n        <div class="c-tooltip-title">${n.canton}</div>\n        <div class="c-tooltip-data">\n            <table>\n                <tr>\n                    <td class="c-tooltip-data-label">Inhabitants: </td>\n                    <td class="c-tooltip-data-value">${i(n.x)}</td>\n                </tr>\n                <tr>\n                    <td class="c-tooltip-data-label">Total Buildings: </td>\n                    <td class="c-tooltip-data-value">${i(n.total_buildings)}</td>\n                </tr>\n                <tr>\n                    <td class="c-tooltip-data-label">Single Homes: </td>\n                    <td class="c-tooltip-data-value">${i(n.single_family_home)}</td>\n                </tr>\n                <tr>\n                    <td class="c-tooltip-data-label">Single Homes [%]: </td>\n                    <td class="c-tooltip-data-value">${n.y}%</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n`;var a=n.filter((n=>"Eastern Switzerland"==n.region)),e=n.filter((n=>"Espace Midland"==n.region)),l=n.filter((n=>"Northwestern Switzerland"==n.region)),o=n.filter((n=>"Lake Geneva Region"==n.region)),s=n.filter((n=>"Central Switzerland"==n.region)),_=n.filter((n=>"Ticino"==n.region)),g=n.filter((n=>"Zurich"==n.region)),r={chart:{type:"scatter",height:"100%",width:"100%",toolbar:{show:!0}},grid:{show:!0,xaxis:{lines:{show:!0},yaxis:{lines:{show:!0}}}},series:[{name:"Eastern Switzerland",data:a.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))},{name:"Espace Midland",data:e.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))},{name:"Northwestern Switzerland",data:l.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))},{name:"Lake Geneva Region",data:o.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))},{name:"Central Switzerland",data:s.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))},{name:"Ticino",data:_.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))},{name:"Zurich",data:g.map((n=>({x:n.inhabitants,y:n.prc_single_home,canton:n.canton,region:n.region,total_buildings:n.buildings_total,single_family_home:n.single_family_home})))}],yaxis:{min:30,max:80,tickAmount:5},xaxis:{type:"numeric",min:1600,max:158e4,tickAmount:10},legend:{position:"right",horizontalAlign:"center",floating:!0,offsetY:10,offsetX:5},tooltip:{custom:function({series:n,seriesIndex:i,dataPointIndex:a,w:e}){var l=e.globals.initialSeries[i].data[a];return t(l)}}};new ApexCharts(document.querySelector("#s1-chart"),r).render();
//# sourceMappingURL=index.5bce994e.js.map
