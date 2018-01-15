let express = require('express');   // 引入express文件
let router = express.Router();      // 创建router实例
let Mock = require('mockjs');       // 引入mockjs模块创建假数据

// 将接口名称命名为lottery.do, 因此在HTML文件中如果需要使用该接口, 那么发送请求的时候就要声明是lottery.do
router.all('/lottery.do', (req, res) => {
    let data = {
        data: {
            dayLotteryTimesLimit: 10,
            description: "抽奖活动",
            endDate: 1518848777000,
            id: 5,
            name: "3月抽奖",
            prizeList: [
              {id: 4, lotteryId: 5, type: 4, name: "50元红包", value: 200},
              {id: 5, lotteryId: 5, type: 3, name: "爱奇艺会员1个月", value: 500},
              {id: 6, lotteryId: 5, type: 3, name: "夏凉坐垫", value: 10},
              {id: 8, lotteryId: 5, type: 1, name: "幸福西饼代金券", value: 200},
              {id: 0, name: "谢谢参与"},
              {id: 9, lotteryId: 5, type: 3, name: "美的遥控落地扇", value: 100}
            ],
            startDate: 1492241168000
        },
        errorCode: 0,
        msg: ""
    }
    res.json(data);  // 用于将数据转换为json格式
});

router.use('/demo', (req, res) => {
    let data = {
        data: {
            description: "抽奖活动"
        },
        errorCode: 0,
        msg: ""
    }
    res.json(data);  // 用于将数据转换为json格式
});

router.use('/tk', (req, res) => {
    let data = {
        data: [
            {
                name: "陳奇1",
                position: "12345",
                office: "C:/Users/任文涛/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍2",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍3",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍4",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍5",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍6",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍7",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍8",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍9",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍10",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            },
            {
                name: "任鑫龍11",
                position: "12345",
                office: "C:/Users/Desktop/datatable",
                age: "https://editor.datatables.net/",
                start_date: "54321",
                salary: "2017年12月8日09:31:26"
            }
        ],
        sEcho: 1
    }
    data.iTotalDisplayRecords = data.data.length;
    data.iTotalRecords = data.data.length;
    res.json(data);  // 用于将数据转换为json格式
});

router.use('/account', (req, res) => {
    let data = {
        "num": 62524, 
        "list": [
            {
                "priceunit": "34.9665", 
                "account_name": "进取型投资连结账户", 
                "price_date": "2017-12-08", 
                "pow": "27.08%", 
                "upDown": "0.61%"
            }, 
            {
                "priceunit": "2.3174", 
                "account_name": "优选成长型投资账户", 
                "price_date": "2017-12-08", 
                "pow": "12.92%", 
                "upDown": "-0.17%"
            }, 
            {
                "priceunit": "3.7983", 
                "account_name": "积极成长型投资账户", 
                "price_date": "2017-12-08", 
                "pow": "13.67%", 
                "upDown": "1.65%"
            }, 
            {
                "priceunit": "1.439", 
                "account_name": "货币避险型投资账户", 
                "price_date": "2017-12-08", 
                "pow": "4.70%", 
                "upDown": "0.01%"
            }, 
            {
                "priceunit": "1.697", 
                "account_name": "开泰稳利投资账户", 
                "price_date": "2017-12-08", 
                "pow": "8.26%", 
                "upDown": "0.17%"
            }, 
            {
                "priceunit": "2.2393", 
                "account_name": "稳健收益型投资账户", 
                "price_date": "2017-12-08", 
                "pow": "8.05%", 
                "upDown": "0.16%"
            }
        ]
    }
    res.json(data);  // 用于将数据转换为json格式
});

module.exports = router;