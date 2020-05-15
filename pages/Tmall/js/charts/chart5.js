//散点图
(function () {
    //实例化
    var myChart = echarts.init(document.querySelector(".scatter .chart"))
    //配置项
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            },
            formatter: "{b} <br/>{c} 亿元"
        },
        grid: {
            left: "6%",
            top: "20%",
            right: "0%",
            bottom: "0%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: ['广东', '江苏', '浙江', '山东', '北京', '四川', '河南', '湖北', '福建', '湖南', '安徽', '河北', '辽宁', '江西', '重庆', '陕西', '广西', '山西', '云南'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: "12",
                    interval: 0,
                    // X轴文字竖着显示
                    formatter: function (value) {
                        var str = value.split("");
                        return str.join("\n");
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    color: "rgba(255,255,255,.6) ",
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "成交额",
                type: "scatter",
                barWidth: "35%",
                data: [319.00, 242.00, 241.00, 173.00, 141.00, 138.00, 120.00, 110.00, 99.60, 99.30, 89.70, 87.40, 78.60, 76.30, 63.70, 57.90, 56.80, 51.50, 50.10, 47.50]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




