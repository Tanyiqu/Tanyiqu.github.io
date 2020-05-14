var myChart = echarts.init(document.getElementById('mapp'));
// 指定图表的配置项和数据
option = {
    title: {
        text: '中国天猫各省份购买金额排名',
        left: 'center',
        top: "20",
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "30"
        }
    },
    color: "#558877",
    tooltip: {
        trigger: 'item'
    },
    legend: {
        color: "ff0000",
        orient: 'vertical',
        left: 'left',
        data: ['中国疫情图']
    },
    visualMap: {
        type: 'piecewise',
        pieces: [
            { min: 1, max: 3, label: '1-3', color: '#60f3ac80' },
            { min: 4, max: 10, label: '4-10', color: '#00ccbb80' },
            { min: 11, max: 15, label: '11-15', color: '#009ac080' },
            { min: 16, max: 20, label: '16-20', color: '#006faf80' },
            { min: 21, max: 35, label: '其余', color: '#02428980' }
        ],
        color: "ff0000",
        // color: ['#E0022B', '#E09107', '#A3E00B']
        textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center'
    },
    roamController: {
        show: true,
        left: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series: [
        {
            name: '排名',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                show: true,
                color: 'rgba(0, 0, 249,0.5)'
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#ffffffc0'
                },
                emphasis: {//鼠标移入高亮显颜色
                    areaColor: '#2b91b7c0'
                }
            },
            data: [{
                name: '广东',
                value: 1
            }, {
                name: '浙江',
                value: 2
            }, {
                name: '江苏',
                value: 3
            }, {
                name: '上海',
                value: 4
            }, {
                name: '山东',
                value: 5
            }, {
                name: '北京',
                value: 6
            }, {
                name: '四川',
                value: 7
            }, {
                name: '河南',
                value: 8
            }, {
                name: '福建',
                value: 9
            }, {
                name: '湖北',
                value: 10
            }, {
                name: '湖南',
                value: 11
            }, {
                name: '安徽',
                value: 12
            }, {
                name: '辽宁',
                value: 13
            }, {
                name: '河北',
                value: 14
            }, {
                name: '江西',
                value: 15
            }, {
                name: '重庆',
                value: 16
            }, {
                name: '陕西',
                value: 17
            }, {
                name: '广西',
                value: 18
            }, {
                name: '云南',
                value: 19
            }, {
                name: '山西',
                value: 20
            }, {
                name: '黑龙江',
                value: 21
            }, {
                name: '天津',
                value: 22
            }, {
                name: '贵州',
                value: 23
            }, {
                name: '吉林',
                value: 24
            }, {
                name: '内蒙古',
                value: 25
            }, {
                name: '新疆',
                value: 26
            }, {
                name: '甘肃',
                value: 27
            }, {
                name: '海南',
                value: 28
            }, {
                name: '宁夏',
                value: 29
            }, {
                name: '青海',
                value: 30
            }, {
                name: '西藏',
                value: 31
            }, {
                name: '台湾',
                value: 32
            }, {
                name: '香港',
                value: 33
            }, {
                name: '澳门',
                value: 34
            }, {
                name: '南海诸岛',
                value: 35
            }]
        }
    ]
};

//使用指定的配置项和数据显示图表
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});