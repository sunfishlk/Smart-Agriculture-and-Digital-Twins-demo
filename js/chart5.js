var myChart = echarts.init(document.getElementById('right2'));
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
  legend: {
    top:'5%',
    data: ['水稻', '小麦', '水果', '蔬菜', '其他'],
    textStyle: {
      color: 'white' // 设置图例文本颜色为白色
    }
  },
  // toolbox: {
  //   feature: {
  //     saveAsImage: {}
  //   }
  // },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        color: 'white' // 设置x轴文本颜色为白色
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min:0,
      max:2500,
      axisLabel: {
        color: 'white' // 设置y轴文本颜色为白色
      }
    }
  ],
  series: [
    {
      name: '水稻',
      type: 'line',
      stack: 'Total',
      label: {
        show: false // 设置系列文本不显示
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '小麦',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '水果',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '蔬菜',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '其他',
      type: 'line',
      stack: 'Total',
      label: {
        // show: true,
        position: 'top',
        color: 'white' // 设置系列文本颜色为白色
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 800, 738]
    }
  ]
};


option && myChart.setOption(option);
myChart.resize({
  width: 350,
  height: 200
})