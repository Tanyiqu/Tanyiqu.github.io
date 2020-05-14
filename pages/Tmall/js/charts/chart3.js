//饼图
(function () {
    //实例化
    var myChart = echarts.init(document.querySelector(".pie .chart"))
    //配置项
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: ({c}%)'
        },
        legend: {
            orient: 'vertical',
            left: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: '销售占比',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 65.50, name: '天猫' },
                    { value: 17, name: '京东' },
                    { value: 6.10, name: '拼多多' },
                    { value: 4.90, name: '苏宁易购' },
                    { value: 2.60, name: '唯品会' },
                    { value: 3.70, name: '其他' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




