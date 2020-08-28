// pages/device/index.js
import * as echarts from '../components/ec-canvas/echarts';

Page({
  data: {
    ec: {},
    list: [{
      'sbh': 1
    }]
  }, 
  onLoad: function () {
  },
  loadData: function(){
  },
  initCharts: function(options){
    var canvas = options.detail.canvas;
    var width = options.detail.width;
    var height = options.detail.height;
    var dpr = options.detail.dpr;
    console.log(">>>echart init>>>")
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr
    });
    canvas.setChart(chart);
    chart.setOption(getOption());
    return chart;
  }
})

//图表配置项
function getOption() {
  var option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }]
  };
  return option
}