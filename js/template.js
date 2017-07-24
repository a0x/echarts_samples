// Initialize echart object, based on the prepared DOM.
var myChart = echarts.init(document.getElementById('main'));
// var myChart = echarts.init($('#main').get(0));

// Costumize the options and data of the chart.
var option = {};

// Render the chart on page, using the former data and options.
myChart.setOption(option);