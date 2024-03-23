var myChart = echarts.init(document.getElementById('right1'));

var option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical', // 设置图例垂直显示
    right: '6%', // 调整图例位置到右侧
    top: 'center', // 垂直居中
    textStyle: {
      color: 'white' // 设置图例文本颜色为白色
    }
  },

  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '80%'],
      center: ['40%', '47%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white' // 设置强调标签的颜色为白色
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '小麦' },
        { value: 735, name: '大豆' },
        { value: 580, name: '水稻' },
        { value: 484, name: '苹果' },
        { value: 300, name: '杂草' }
      ]
    }
  ],
  textStyle: {
    color: 'white' // 设置所有文本的颜色为白色
  }
};

option && myChart.setOption(option);
myChart.resize({
  width: 350,
  height: 200
})