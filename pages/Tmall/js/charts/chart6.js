//饼图2
(function () {
    //实例化
    var myChart = echarts.init(document.querySelector(".pie2 .chart"))
    //配置项
    var option = {
        color: [
            "#006cff",
            "#60cda0",
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
            "#1d9dff"
        ],
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} 亿元 ({d}%)"
        },
        legend: {
            left: "7%",
            top: "90%",
            // bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: "品牌销量排行",
                type: "pie",
                radius: ["10%", "70%"],
                center: ['50%', '55%'],
                roseType: "radius",
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                data: [
                    { value: 74, name: "美的" },
                    { value: 61, name: "小米" },
                    { value: 42, name: "联想" },
                    { value: 40, name: "格力" },
                    { value: 18.3, name: "安踏" },
                    { value: 15, name: "南极人" },
                    { value: 13.8, name: "森马" },
                    { value: 12.46, name: "绫致时装" }
                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();




