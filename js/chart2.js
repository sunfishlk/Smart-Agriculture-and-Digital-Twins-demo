// var myChart = echarts.init(document.querySelector('.middleB'));
var myChart = echarts.init(document.getElementById('left2'));
// 指定图表的配置项和数据
var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#0098c9',
        borderRadius: 5
      }
    }
  },
  grid: {
    left: '10%',
    bottom: '10%',
    top: '8%'
  },
  yAxis: { // 将原先的xAxis改成yAxis
    type: 'category', // 将原先的type改成category
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLabel: {
      color: 'white'
    }
  },
  xAxis: { // 将原先的yAxis改成xAxis
    type: 'value', // 将原先的type改成value
    axisLabel: {
      color: 'white'
    }
  },
  series: [
    {
      type: 'bar', // 将原先的type改成bar
      data: [120, 200, 150, 80, 70, 110, 130],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgb(25,111,254,0.9)' },   // 0% 处的颜色
          { offset: 1, color: 'rgb(14,28,88,0.9)' }    // 100% 处的颜色，这里改为使用第一个渐变色
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