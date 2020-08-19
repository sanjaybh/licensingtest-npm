var FusionCharts = require('fusioncharts');

// Require charts from fusioncharts
var Charts = require('fusioncharts/fusioncharts.charts');

// Require theme from fusioncharts
var FusionTheme = require('fusioncharts/themes/fusioncharts.theme.fusion');

// Add charts and themes as dependency
Charts(FusionCharts);
FusionTheme(FusionCharts);

//STEP 2 - Chart Data
const chartData = [{
"label": "Venezuela",
"value": "290"
}, {
"label": "Saudi",
"value": "260"
}, {
"label": "Canada",
"value": "180"
}, {
"label": "Iran",
"value": "140"
}, {
"label": "Russia",
"value": "115"
}, {
"label": "UAE",
"value": "100"
}, {
"label": "US",
"value": "30"
}, {
"label": "China",
"value": "30"
}];

//STEP 3 - Chart Configurations
const chartConfig = {
type: 'column2d',
renderAt: 'chart-container',
width: '100%',
height: '400',
dataFormat: 'json',
dataSource: {
// Chart Configuration
"chart": {
"caption": "Countries With Most Oil Reserves [2017-18]",
"subCaption": "In MMbbl = One Million barrels",
"xAxisName": "Country",
"yAxisName": "Reserves (MMbbl)",
"numberSuffix": "K",
"theme": "fusion",
},
// Chart Data
"data": chartData
}
};

// STEP 4 - Create an Instance with chart options and render
var chartInstance = new FusionCharts(chartConfig);
chartInstance.render();