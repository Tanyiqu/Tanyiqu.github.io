//折线图
(function () {
    //实例化
    var myChart = echarts.init(document.querySelector(".line .chart"))
    //配置项
    var option = {
        color: ["#00d887", "#0184d5"],
        tooltip: {
            trigger: "axis"
        },
        // legend: {

        //     data: [

        //         { name: "2018" },
        //         { name: "2019" }
        //     ],
        //     textStyle: {
        //         color: "rgba(255,255,255,.5)",
        //         fontSize: "12"
        //     }
        // },
        grid: {
            left: "6%",
            top: "20%",
            right: "3%",
            bottom: "0%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['100', '191', '350', '500', '520', '571', '600', '700', '912', '1000', '1207', '1682', '1800', '2000', '2135', '2500', '2600', '2684']
                , axisLabel: {
                    color: "rgba(255,255,255,.5)"

                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: f2,
                    color: "rgba(255,255,255,.5)"
                }
            }
        ],
        series: [
            {
                name: '2018',
                type: 'line',
                areaStyle: {},
                data: [125, 260, 734, 1562, 1721, 2117, 2431, 3691, 4597,
                    6446, 29332, 56979, 66912, 80917, 86400],
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    color: "#00d887"
                },
                areaStyle: {
                    color: "#084556"
                }
            },
            {
                name: '2019',
                type: 'line',
                areaStyle: {},
                data: [96, 197, 404, 769, 829, 1026, 1159, 1791, 3692,
                    3839, 5167, 36289, 41027, 51688, 59473, 80881, 84453, 86400],
                smooth: true,
                symbol: 'none',
                lineStyle: {
                    color: "#0184d5"
                },
                areaStyle: {
                    color: "#0d316c"
                }
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

function f2(value) {
    var h = 0;
    var m = 0;
    var s = parseInt(value);
    if (s >= 60) {
        m = parseInt(s / 60);
        s = s % 60;
        if (m > 60) {
            h = parseInt(m / 60);
            m = m % 60;
        }
    }
    //转换为字符串
    h = "" + h;
    m = "" + m;
    s = "" + s;
    if (h.length < 2)
        h = "0" + h;
    if (m.length < 2)
        m = "0" + m;
    if (s.length < 2)
        s = "0" + s;
    return h + ":" + m + ":" + s;
}

function f3(value) {
    var a = value[0];
    var b = "";
    if (value.length == 2) {
        b = value[1]
    }
    var s = a[0]

    return s;
}