// Include the core fusioncharts file from core  -
import FusionCharts from 'fusioncharts/core';

// Include the chart from viz folder
// E.g. - import ChartType from fusioncharts/viz/[ChartType]
import Column2D from 'fusioncharts/viz/column2d';

// Include the fusion theme
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// Add the chart and theme as dependency
// E.g. FusionCharts.addDep(ChartType)
FusionCharts.addDep(Column2D);
FusionCharts.addDep(FusionTheme);

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

// STEP 4 - Create an Instance with chart options and render the chart
var chartInstance = new FusionCharts(chartConfig);
chartInstance.render();

FusionCharts.options.license({
key: 'wkB3gzpI2J3A4B5B5B4B4C3D3E1G2C11snnB4F1D4fH3C10D7A-13E-11iD3E2D2wqd1E3E2B2H-9moB1B11B1E5B3D3F3C2A33A18B14c1jjB4A2QD3jnA-21A5A1E3tgH2HC3A4B-16C-13nG2F4H1J3A6B4C4C4E3G3H4H2J2B8t==',
creditLabel: false
})