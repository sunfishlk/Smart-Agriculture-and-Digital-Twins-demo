

var app = {};

var chartDom = document.getElementById('right3');
var myChart = echarts.init(chartDom);
var option;

const categories = (function () {
  let now = new Date();
  let res = [];
  let len = 10;
  while (len--) {
    res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
    now = new Date(+now - 2000);
  }
  return res;
})();
const categories2 = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(10 - len - 1);
  }
  return res;
})();
const data = (function () {
  let res = [];
  let len = 10;
  while (len--) {
    res.push(Math.round(Math.random() * 1000));
  }
  return res;
})();
const data2 = (function () {
  let res = [];
  let len = 0;
  while (len < 10) {
    res.push(+(Math.random() * 10 + 5).toFixed(1));
    len++;
  }
  return res;
})();
// --------------------------------------------------------------

option = {

  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#0098c9',
        borderRadius: 5,
        textStyle: {
          color: '#fff' // 设置字体颜色为白色
        }
      }
    }
  },
  grid: {
    left:'10%',
    right:'13%',
    bottom:'12%',
    top:'22%'
  },
  legend: {
    textStyle: {
      color: 'white' // 设置图例文本颜色为白色
    }
  },
  toolbox: {
    show: true,
    // feature: {
    //   dataView: { readOnly: false },
    //   restore: {},
    //   saveAsImage: {}
    // }
  },
  dataZoom: {
    show: false,
    start: 0,
    end: 100
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: true,
      data: categories,
      axisLabel: {
        textStyle: {
          color: '#fff' // 设置字体颜色为白色
        }
      }
    },
    {
      type: 'category',
      boundaryGap: true,
      data: categories2,
      axisLabel: {
        textStyle: {
          color: '#fff' // 设置字体颜色为白色
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      scale: true,
      name: '',
      max: 30,
      min: 0,
      boundaryGap: [0.2, 0.2],
      axisLabel: {
        textStyle: {
          color: '#fff' // 设置字体颜色为白色
        }
      }
    },
    {
      type: 'value',
      scale: true,
      name: '',
      max: 1200,
      min: 0,
      boundaryGap: [0.2, 0.2],
      axisLabel: {
        textStyle: {
          color: '#fff' // 设置字体颜色为白色
        }
      }
    }
  ],
  series: [
    {
      name: 'Dynamic Bar',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      data: data
    },
    {
      name: 'Dynamic Line',
      type: 'line',
      data: data2
    }
  ]
};
app.count = 11;
setInterval(function () {
  let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
  data.shift();
  data.push(Math.round(Math.random() * 1000));
  data2.shift();
  data2.push(+(Math.random() * 10 + 5).toFixed(1));
  categories.shift();
  categories.push(axisData);
  categories2.shift();
  categories2.push(app.count++);
  myChart.setOption({
    xAxis: [
      {
        data: categories
      },
      {
        data: categories2
      }
    ],
    series: [
      {
        data: data
      },
      {
        data: data2
      }
    ]
  });
}, 2100);

option && myChart.setOption(option);
myChart.resize({
  width: 350,
  height: 200
})