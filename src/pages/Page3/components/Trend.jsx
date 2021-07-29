import React, { Component } from 'react';

// 引入 ECharts 主模块
import * as echarts from 'echarts';
import { GridComponent } from 'echarts/components';
echarts.use([GridComponent])
// import { LineChart } from 'echarts/charts';
// echarts.use([LineChart]);
// import { TitleComponent } from 'echarts/components';
// echarts.use([TitleComponent]);
// import { TooltipComponent } from 'echarts/components';
// echarts.use([TooltipComponent]);    

// 引入柱状图
// import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

class Trend extends Component {
    componentDidMount() {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '本产品涨跌幅:+4.06%',
                left: 'right',
                textStyle:{
                    color:'red', //颜色
                    
                    fontStyle:'normal', //风格
                    
                    fontWeight:'normal', //粗细
                    
                    fontFamily:'Microsoft yahei', //字体
                    
                    fontSize:14, //大小
                    
                    align:'center' //水平对齐
                    
                    },
            },
            
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2021-07-15', '', '', '', '', '', '2021-07-21']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} .00%'
                },
            },
            series: [{
                data: [1.00, 1.50, 2.00, 2.50, 3.00, 3.50, 4.00],
                type: 'line',
                areaStyle: {}
            }]
        };

        option && myChart.setOption(option);
    }
    render() {
        return (
            <div id="main" style={{ width: 460, height: 400}}></div>
        );
    }
}

export default Trend;
