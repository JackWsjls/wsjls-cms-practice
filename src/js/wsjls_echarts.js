console.log(1)

// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('main1'));
// 指定图表的配置项和数据
var option1 = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('main2'));
myChart2.setOption({
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
})

var option3 = {
    backgroundColor: '#2c343c',
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            itemStyle: {
                // normal: {
                //     color: '#c23531',
                //     shadowBlur: 200,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                // }
			    // 阴影的大小
			    shadowBlur: 200,
			    // 阴影水平方向上的偏移
			    shadowOffsetX: 0,
			    // 阴影垂直方向上的偏移
			    shadowOffsetY: 0,
			    // 阴影颜色
			    shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    ]
};

var myChart3 = echarts.init(document.getElementById('main3'));
myChart3.setOption(option3)

// =====================================================
var dom = document.getElementById("main4");
var myChart = echarts.init(dom);
var app = {};
option4 = null;
app.title = '热力图与百度地图扩展';
myChart.showLoading();
$.get('./common/data.json', function (data) {
	myChart.hideLoading();
    var points = [].concat.apply([], data.map(function (track) {
        return track.map(function (seg) {
            return seg.coord.concat([1]);
        });
    }));
    console.log('points',points);
    myChart.setOption(option4 = {
        animation: false,
        bmap: {
            center: [120.13066322374, 30.240018034923],
            zoom: 14,
            roam: true
        },
        visualMap: {
            show: false,
            top: 'top',
            min: 0,
            max: 5,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: points,
            pointSize: 5,
            blurSize: 6
        }]
    });
    if (!app.inNode) {
        // 添加百度地图插件
        var bmap = myChart.getModel().getComponent('bmap').getBMap();
        bmap.addControl(new BMap.MapTypeControl());
    }
});
;
if (option4 && typeof option4 === "object") {
    myChart.setOption(option4, true);
}

// -----------------------------------------------------

var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 150];
var now = new Date(base);
function addData(shift) {
    now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);
    data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

    if (shift) {
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 100; i++) {
    addData();
}

option5 = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
    },
    series: [
        {
            name:'成交',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: data
        }
    ]
};
var myChart5 = echarts.init(document.getElementById('main5'));
setInterval(function () {
    addData(true);
console.log(option5)
    // myChart5.setOption({
    //     xAxis: {
    //         data: date
    //     },
    //     series: [{
    //         name:'成交',
    //         data: data
    //     }]
    // });
    myChart5.setOption(option5);
}, 500);


// k线图
var myChart6 = echarts.init(document.getElementById('main6'));
option6 = {
    title : {
        text: '2013年上半年上证指数'
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params) {
            var res = params[0].seriesName + ' ' + params[0].name;
            res += '<br/>  开盘 : ' + params[0].value[0] + '  最高 : ' + params[0].value[3];
            res += '<br/>  收盘 : ' + params[0].value[1] + '  最低 : ' + params[0].value[2];
            return res;
        }
    },
    legend: {
        data:['上证指数']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        show : true,
        realtime: true,
        start : 50,
        end : 100
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            axisTick: {onGap:false},
            splitLine: {show:false},
            data : [
                "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
                "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
                "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
                "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
                "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
                "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
                "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
                "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
                "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
                "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
                "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
                "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
                "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
                "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
                "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
                "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
                "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
                "2013/6/6", "2013/6/7", "2013/6/13"
            ]
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            boundaryGap: [0.01, 0.01]
        }
    ],
    series : [
        {
            name:'上证指数',
            type:'k',
            data:[ // 开盘，收盘，最低，最高
                [2320.26,2302.6,2287.3,2362.94],
                [2300,2291.3,2288.26,2308.38],
                [2295.35,2346.5,2295.35,2346.92],
                [2347.22,2358.98,2337.35,2363.8],
                [2360.75,2382.48,2347.89,2383.76],
                [2383.43,2385.42,2371.23,2391.82],
                [2377.41,2419.02,2369.57,2421.15],
                [2425.92,2428.15,2417.58,2440.38],
                [2411,2433.13,2403.3,2437.42],
                [2432.68,2434.48,2427.7,2441.73],
                [2430.69,2418.53,2394.22,2433.89],
                [2416.62,2432.4,2414.4,2443.03],
                [2441.91,2421.56,2415.43,2444.8],
                [2420.26,2382.91,2373.53,2427.07],
                [2383.49,2397.18,2370.61,2397.94],
                [2378.82,2325.95,2309.17,2378.82],
                [2322.94,2314.16,2308.76,2330.88],
                [2320.62,2325.82,2315.01,2338.78],
                [2313.74,2293.34,2289.89,2340.71],
                [2297.77,2313.22,2292.03,2324.63],
                [2322.32,2365.59,2308.92,2366.16],
                [2364.54,2359.51,2330.86,2369.65],
                [2332.08,2273.4,2259.25,2333.54],
                [2274.81,2326.31,2270.1,2328.14],
                [2333.61,2347.18,2321.6,2351.44],
                [2340.44,2324.29,2304.27,2352.02],
                [2326.42,2318.61,2314.59,2333.67],
                [2314.68,2310.59,2296.58,2320.96],
                [2309.16,2286.6,2264.83,2333.29],
                [2282.17,2263.97,2253.25,2286.33],
                [2255.77,2270.28,2253.31,2276.22],
                [2269.31,2278.4,2250,2312.08],
                [2267.29,2240.02,2239.21,2276.05],
                [2244.26,2257.43,2232.02,2261.31],
                [2257.74,2317.37,2257.42,2317.86],
                [2318.21,2324.24,2311.6,2330.81],
                [2321.4,2328.28,2314.97,2332],
                [2334.74,2326.72,2319.91,2344.89],
                [2318.58,2297.67,2281.12,2319.99],
                [2299.38,2301.26,2289,2323.48],
                [2273.55,2236.3,2232.91,2273.55],
                [2238.49,2236.62,2228.81,2246.87],
                [2229.46,2234.4,2227.31,2243.95],
                [2234.9,2227.74,2220.44,2253.42],
                [2232.69,2225.29,2217.25,2241.34],
                [2196.24,2211.59,2180.67,2212.59],
                [2215.47,2225.77,2215.47,2234.73],
                [2224.93,2226.13,2212.56,2233.04],
                [2236.98,2219.55,2217.26,2242.48],
                [2218.09,2206.78,2204.44,2226.26],
                [2199.91,2181.94,2177.39,2204.99],
                [2169.63,2194.85,2165.78,2196.43],
                [2195.03,2193.8,2178.47,2197.51],
                [2181.82,2197.6,2175.44,2206.03],
                [2201.12,2244.64,2200.58,2250.11],
                [2236.4,2242.17,2232.26,2245.12],
                [2242.62,2184.54,2182.81,2242.62],
                [2187.35,2218.32,2184.11,2226.12],
                [2213.19,2199.31,2191.85,2224.63],
                [2203.89,2177.91,2173.86,2210.58],
                [2170.78,2174.12,2161.14,2179.65],
                [2179.05,2205.5,2179.05,2222.81],
                [2212.5,2231.17,2212.5,2236.07],
                [2227.86,2235.57,2219.44,2240.26],
                [2242.39,2246.3,2235.42,2255.21],
                [2246.96,2232.97,2221.38,2247.86],
                [2228.82,2246.83,2225.81,2247.67],
                [2247.68,2241.92,2231.36,2250.85],
                [2238.9,2217.01,2205.87,2239.93],
                [2217.09,2224.8,2213.58,2225.19],
                [2221.34,2251.81,2210.77,2252.87],
                [2249.81,2282.87,2248.41,2288.09],
                [2286.33,2299.99,2281.9,2309.39],
                [2297.11,2305.11,2290.12,2305.3],
                [2303.75,2302.4,2292.43,2314.18],
                [2293.81,2275.67,2274.1,2304.95],
                [2281.45,2288.53,2270.25,2292.59],
                [2286.66,2293.08,2283.94,2301.7],
                [2293.4,2321.32,2281.47,2322.1],
                [2323.54,2324.02,2321.17,2334.33],
                [2316.25,2317.75,2310.49,2325.72],
                [2320.74,2300.59,2299.37,2325.53],
                [2300.21,2299.25,2294.11,2313.43],
                [2297.1,2272.42,2264.76,2297.1],
                [2270.71,2270.93,2260.87,2276.86],
                [2264.43,2242.11,2240.07,2266.69],
                [2242.26,2210.9,2205.07,2250.63],
                [2190.1,2148.35,2126.22,2190.1]
            ]
        }
    ]
};
                    
myChart6.setOption(option6);

// 矩形树形图
var myChart7 = echarts.init(document.getElementById('main7'));
option7 = {
    title : {
        text: '冰桶挑战'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'树图',
            type:'tree',
            orient: 'horizontal',  // vertical horizontal
            rootLocation: {x: 100,y: 230}, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 8,
            layerPadding: 200,
            hoverable: false,
            roam: true,
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#4883b4',
                    label: {
                        show: true,
                        position: 'right',
                        formatter: "{b}",
                        textStyle: {
                            color: '#000',
                            fontSize: 5
                        }
                    },
                    lineStyle: {
                        color: '#ccc',
                        type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                    }
                },
                emphasis: {
                    color: '#4883b4',
                    label: {
                        show: false
                    },
                    borderWidth: 0
                }
            },
            
            data: [
                // {"name":"冰桶挑战","children":[{"name":"刘作虎","children":[{"name":"周鸿祎","children":[{"name":"马化腾"},{"name":"徐小平","children":[{"name":"牛文文","children":[{"name":"姚劲波","children":[{"name":"蔡文胜"},{"name":"蔡明"},{"name":"汪小菲"}]},{"name":"杨守彬","children":[{"name":"所有的创业者"},{"name":"所有的投资人"},{"name":"所有的创业服务机构"}]},{"name":"蒲易"}]},{"name":"罗振宇","children":[{"name":"罗辑思维25000名会员"}]},{"name":"黄西"}]},{"name":"黄章"}]},{"name":"罗永浩"},{"name":"刘江峰","children":[{"name":"何刚","children":[{"name":"谢清江"},{"name":"王翔"},{"name":"艾伟"}]},{"name":"王煜磊"}]}]},{"name":"雷军","children":[{"name":"刘德华","children":[{"name":"朗朗"},{"name":"苏桦伟"},{"name":"周杰伦","children":[{"name":"方文山","children":[{"name":"九把刀"},{"name":"柯有伦"}]},{"name":"五月天","children":[{"name":"谢金燕","children":[{"name":"赵慧仙"},{"name":"张菲","children":[{"name":"小S"}]},{"name":"郭富城"}]},{"name":"张震"},{"name":"金城武"}]}]}]},{"name":"李彦宏","children":[{"name":"俞敏洪"},{"name":"潘石屹","children":[{"name":"任志强"}]},{"name":"田亮","children":[{"name":"王岳伦"},{"name":"小沈阳"},{"name":"李小鹏"}]}]},{"name":"郭台铭","children":[{"name":"孙正义","children":[{"name":"宫坂学"}]},{"name":"谢晓亮"},{"name":"林志玲"}]}]},{"name":"古永锵","children":[{"name":"马云"},{"name":"王长田","children":[{"name":"邓超","children":[{"name":"俞白眉","children":[{"name":"姚晨","children":[{"name":"吴秀波"},{"name":"吴彦祖"},{"name":"孙红雷"}]},{"name":"朱芳雨","children":[{"name":"王仕鹏","children":[{"name":"易建联"}]}]},{"name":"梁超"}]}]},{"name":"刘亦菲"},{"name":"刘同"}]}]},{"name":"朱挺","children":[{"name":"张耀坤","children":[{"name":"姜宁"},{"name":"唐淼"}]},{"name":"周海滨","children":[{"name":"汪嵩","children":[{"name":"蔡贇"},{"name":"李易峰"},{"name":"王弢 "}]},{"name":"邵佳一"},{"name":"高迪","children":[{"name":"莫雷诺"},{"name":"恩里克"},{"name":"保罗"}]}]},{"name":"阎小闯"}]},{"name":"郑璐","children":[{"name":"于嘉","children":[{"name":"董成鹏","children":[{"name":"伊一","children":[{"name":"许嵩"},{"name":"付辛博"},{"name":"洪辰"}]},{"name":"王祖蓝","children":[{"name":"王菀之"},{"name":"李亚男","children":[{"name":"宋熙年"},{"name":"钟嘉欣"},{"name":"陈美诗"}]},{"name":"贾玲"}]},{"name":"白客","children":[{"name":"盛宇","children":[{"name":"邪童 "},{"name":"杜海涛"},{"name":"汪涵"}]},{"name":"派克特"},{"name":"谢帝","children":[{"name":"C-BLOCK小胖"},{"name":"范元成"},{"name":"隋凯","children":[{"name":"高以翔"},{"name":"马楚成"}]}]}]}]},{"name":"易建联、李艾、江映蓉"}]},{"name":"Kevin Han"}]},{"name":"舒德伟","children":[{"name":"姚明"},{"name":"NBA中国全体员工"}]},{"name":"叶丙成","children":[{"name":"翟本乔"},{"name":"嵇晓华","children":[{"name":"王思聪","children":[{"name":"易振兴","children":[{"name":"徐磊"},{"name":"佟大为","children":[{"name":"孟非","children":[{"name":"郭德纲","children":[{"name":"于谦"}]},{"name":"黄健翔","children":[{"name":"张琳芃","children":[{"name":"黄博文"},{"name":"李帅"}]},{"name":"郜林","children":[{"name":"刘建宏"},{"name":"李玮峰"}]}]}]},{"name":"陈坤"},{"name":"AKB48"}]},{"name":"吴欣鸿","children":[{"name":"贾乃亮"},{"name":"李小璐"},{"name":"angelababy"}]}]},{"name":"林更新","children":[{"name":"赵又廷"},{"name":"佟丽娅"},{"name":"AngelaBaby"}]},{"name":"刘军"}]},{"name":"魏坤琳","children":[{"name":"迟毓凯"},{"name":"李淼"},{"name":"姜振宇"}]},{"name":"刘成城","children":[{"name":"张颖"},{"name":"王自如","children":[{"name":"刘翔"},{"name":"吴海"},{"name":"傅盛"}]},{"name":"汪峰"}]}]}]},{"name":"萧上农","children":[{"name":"林之晨","children":[{"name":"柯文哲","children":[{"name":"赵少康"},{"name":"魏德圣"},{"name":"郭子乾"}]},{"name":"连胜文","children":[{"name":"郝龙斌","children":[{"name":"卢贝松"},{"name":"胡志强"},{"name":"邱文达"}]},{"name":"朱立伦"},{"name":"吴思华"}]},{"name":"管中闵","children":[{"name":"杜紫军"},{"name":"陈保基"},{"name":"杨泮池"}]}]},{"name":"陈素兰","children":[{"name":"颜漏有","children":[{"name":"詹宏志","children":[{"name":"钮承泽"},{"name":"李宗盛"},{"name":"何飞鹏"}]},{"name":"陈清祥","children":[{"name":"黄日灿"},{"name":"黄胜华"},{"name":"吴升奇"}]}]}]},{"name":"蔡牧民"}]},{"name":"林书豪","children":[{"name":"兰德里-菲尔兹"},{"name":"帕森斯"}]},{"name":"王猛","children":[{"name":"杨毅"},{"name":"柯凡"},{"name":"StephonMarbury"}]},{"name":"叶璇","children":[{"name":"李晨"},{"name":"苏芒","children":[{"name":"黄晓明","children":[{"name":"范冰冰"},{"name":"李冰冰","children":[{"name":"王中军"},{"name":"新浪娱乐"}]}]}]},{"name":"陈欧"}]},{"name":"章子怡","children":[{"name":"TFBoys","children":[{"name":"尚格云顿"}]},{"name":"韩庚","children":[{"name":"迈克尔·贝"},{"name":"何炅"},{"name":"那英"}]},{"name":"苏菲玛索"}]},{"name":"张靓颖","children":[{"name":"张杰","children":[{"name":"快乐家族"},{"name":"李宇春"},{"name":"萧敬腾"}]},{"name":"王铮亮","children":[{"name":"天天兄弟"},{"name":"武艺","children":[{"name":"卓文萱","children":[{"name":"廖俊杰","children":[{"name":"连晨翔","children":[{"name":"马振桓"},{"name":"萧煌奇"},{"name":"诗安"}]}]}]},{"name":"阿纬"},{"name":"洪卓立"}]},{"name":"DJ小强"}]},{"name":"Timbaland"}]},{"name":"邓紫棋","children":[{"name":"李蕴","children":[{"name":"何超莲","children":[{"name":"吴克群","children":[{"name":" 何猷啟"},{"name":"陈泽杉"}]},{"name":"卡提娜"},{"name":"jw_amusic "}]},{"name":"诗雅"},{"name":"陈静"}]},{"name":"蔡卓妍","children":[{"name":"钟欣桐","children":[{"name":"乔振宇","children":[{"name":"马天宇"},{"name":"陈伟霆","children":[{"name":"霍汶希"}]},{"name":"高伟光"}]},{"name":" 周汤豪"},{"name":"黃鴻升"}]},{"name":"谢娜"},{"name":"詹瑞文"}]},{"name":"茜拉","children":[{"name":"EXO-M"},{"name":"巫启贤"}]}]},{"name":"卫诗雅","children":[{"name":"吴君如"},{"name":"邹凯光"},{"name":"钟舒漫"}]},{"name":"容祖儿","children":[{"name":"梁家辉"},{"name":"黄伟文"}]},{"name":"蔡一智","children":[{"name":"陈奕迅","children":[{"name":"谢霆锋","children":[{"name":"桂纶镁","children":[{"name":"舒淇"},{"name":"张惠妹"},{"name":"孙燕姿"}]},{"name":"林丹"},{"name":"李云迪"}]},{"name":"范晓萱"},{"name":"张一白","children":[{"name":"彭于晏","children":[{"name":"林超贤"}]},{"name":"魏晨","children":[{"name":"秦凯","children":[{"name":"孙杨","children":[{"name":"张学友"},{"name":"华少"}]},{"name":"吴敏霞"},{"name":"陈一冰"}]}]},{"name":"张嘉佳"}]}]},{"name":"葛民辉"},{"name":"郑伊健","children":[{"name":"陈小春"},{"name":"谢天华"}]}]},{"name":"林俊杰","children":[{"name":"王力宏"},{"name":"蔡依林"}]},{"name":"徐峥","children":[{"name":"李连杰"},{"name":"韩寒"},{"name":"赵薇"}]},{"name":"刘循子墨","children":[{"name":"薛之谦"},{"name":"杨姗姗"}]},{"name":"王自健","children":[{"name":"郑凯"},{"name":"刘江"},{"name":"刘涛"}]},{"name":"罗震环","children":[{"name":"邹凯","children":[{"name":"许嵩 "},{"name":"张成龙"},{"name":"邹市明 "}]},{"name":"林琪雪","children":[{"name":"禹景曦","children":[{"name":"张翔玲","children":[{"name":"PLU小米"},{"name":"高地平"}]},{"name":"戴士","children":[{"name":"杨丰智"},{"name":"李鑫"},{"name":"卢本伟","children":[{"name":"孙亚龙"},{"name":"瞿申图"},{"name":"朱永权"}]}]},{"name":"裴乐","children":[{"name":"沈伟荣","children":[{"name":"金亦波"},{"name":"卞正伟"}]},{"name":"李君"}]}]},{"name":"孔连顺","children":[{"name":"老湿","children":[{"name":"至尊玉"},{"name":"马俊"},{"name":"颜土豆avi"}]},{"name":"小爱"},{"name":"马诗歌","children":[{"name":"张本煜"}]}]},{"name":"孙博文","children":[{"name":"陈剑书"},{"name":"陈琦栋"},{"name":"滕林季"}]}]},{"name":"沈建宏","children":[{"name":"陈奕","children":[{"name":"炎亚纶"},{"name":"张榕容"},{"name":"刘希平"}]},{"name":"何润东","children":[{"name":"俞永福","children":[{"name":"曹国伟"},{"name":"余承东"},{"name":"金池","children":[{"name":"曹格"},{"name":"魏雪漫"},{"name":"曾一鸣 "}]}]},{"name":"郭品超"},{"name":"霍建华 "}]},{"name":"张根硕"}]}]},{"name":"涂松岩","children":[{"name":"海清"},{"name":"张韵艺"},{"name":"王媛可"}]},{"name":"陈嘉上","children":[{"name":"包贝尔","children":[{"name":"陈赫"},{"name":"杨子姗"}]}]},{"name":"留几手","children":[{"name":"夏河"},{"name":"陆琪","children":[{"name":"贝志诚"},{"name":"孙杰"}]},{"name":"张辛苑","children":[{"name":"黄轩"},{"name":"古川雄辉"},{"name":"蒋劲夫"}]}]},{"name":"郑希怡","children":[{"name":"古巨基","children":[{"name":"崔始源","children":[{"name":"朴正洙"},{"name":"金希澈"}]},{"name":"黄子华"}]}]},{"name":"宁浩","children":[{"name":"徐铮"},{"name":"黄渤"},{"name":"雷佳音"}]},{"name":"鈕承澤","children":[{"name":"陈意涵","children":[{"name":"张钧甯"},{"name":"陈柏霖","children":[{"name":"冯绍峰"},{"name":"高华阳","children":[{"name":"王志鹏"},{"name":"李东霖"},{"name":"夏青"}]}]},{"name":"池珍熙"}]},{"name":"阮经天"}]},{"name":"周显扬","children":[{"name":"王珞丹"},{"name":"井柏然"},{"name":"张晋"}]},{"name":"徐熙娣","children":[{"name":"蔡康永"}]},{"name":"刘俊纬","children":[{"name":"杨奇煜","children":[{"name":"曾志伟"},{"name":"张艾亚","children":[{"name":"房思瑜"}]}]},{"name":"林峰"}]},{"name":"周汤豪","children":[{"name":"庄濠全","children":[{"name":"罗志祥"},{"name":"簡愷樂"}]},{"name":"林暐恒"},{"name":"王雪娥","children":[{"name":"洪炜宁"}]}]},{"name":"杨颖","children":[{"name":"倪妮"}]},{"name":"董子健","children":[{"name":"郭京飞","children":[{"name":"袁咏仪"},{"name":"钱芳"}]},{"name":"陆毅"},{"name":"关锦鹏"}]}]}
				{"name": "第一层级","children":[{"name": "第二层级","children":[{"name": "第三层级"}]},{"name": "第二层级","children":[{"name": "第三层级"}]},{"name": "第二层级","children":[{"name": "第三层级"}]},{"name": "第二层级","children":[{"name": "第三层级"}]},{"name": "第二层级","children":[{"name": "第三层级"}]},{"name": "第二层级","children":[{"name": "第三层级"}]}]}            
            ]
        }
    ]
};
myChart7.setOption(option7)
                    