//柱状图2
(function () {
    //实例化
    var myChart = echarts.init(document.querySelector(".bar2 .chart"))
    //配置项
    var option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            formatter: "{b}<br/>人均 {c} 元"
        },
        color: "#8b78f6",
        grid: {
            left: "14%",
            top: "15%",
            right: "0%",
            bottom: "0%"
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            data: ['上海', '北京', '浙江', '江苏', '广东', '天津', '福建', '重庆', '辽宁', '湖北'].reverse(),
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "rgba(255,255,255,.5)"
            }

        },
        series: [
            {
                name: "人均",
                type: 'bar',
                data: [713.76, 635.74, 420.08, 301.40, 281.16, 253.27, 251.97, 189.93, 175.03, 168.33].reverse(),
                itemStyle: {
                    barBorderRadius: 20
                },
                barWidth: 10,
                barCategoryGap: 50,
                label: {
                    normal: {
                        show: true,
                        position: "inside",
                        formatter: "{c}",
                        color: "rgba(255,255,255,.8)"
                    }
                }
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




