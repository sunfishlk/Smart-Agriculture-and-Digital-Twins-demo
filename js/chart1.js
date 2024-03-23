
// 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.querySelector('.middleB'));
var myChart = echarts.init(document.getElementById('left1'));
// 指定图表的配置项和数据
var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#0098c9',//坐标抽上面图形颜色
        borderRadius: 5
      }
    }
  },
  grid: {
    left: '10%',
    bottom: '10%',
    top: '8%'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      color: 'white' // 设置x轴文本颜色为白色
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: 'white' // 设置x轴文本颜色为白色
    }
  },
  series: [
    {
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110, 130],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgb(76,240,249,0.9)' },   // 0% 处的颜色
          { offset: 1, color: 'rgb(0,151,200,0.9)' }    // 100% 处的颜色，这里改为使用第一个渐变色
        ])
      }
    }
  ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart.resize({
  width: 350,
  height: 200
})