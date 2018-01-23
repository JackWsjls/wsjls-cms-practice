/* =======================================================================
 *
 *  lottery.js
 *
 * =====================================================================*/ 

let express = require('express');   // 引入express文件
let router = express.Router();      // 创建router实例
let Mock = require('mockjs');       // 引入mockjs模块创建假数据

/*
 *  测试接口
 *  test
 */ 

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

router.use('/wsjls.home', (req, res) => {
    let data = {
        data: [
                // {id:1, pId:0, name:"表格展示", open:true, iconOpen:"../../../common/zTreeStyle/img/diy/1_open.png", iconClose:"../../../common/zTreeStyle/img/diy/1_close.png"},
                {id:1, pId:0, name:"表格展示", open:true},
                {id:10, pId:1, name:"测试文档", open:true, icon:"../../../common/zTreeStyle/img/diy/2.png"},
                {id:100, pId:10, name:"datatable", file:"views/wsjls_home_zTree/datatable", icon:"../../../common/zTreeStyle/img/diy/3.png"},
                {id:101, pId:10, name:"异步加载节点数据", file:"views/wsjls_home_zTree/asynctree", icon:"../../../common/zTreeStyle/img/diy/5.png"},
                {id:102, pId:10, name:"更新 节点数据", file:"views/wsjls_home_zTree/updatedtree", icon:"../../../common/zTreeStyle/img/diy/5.png"},
                {id:103, pId:10, name:"单击节点控制", file:"views/wsjls_home_zTree/click", icon:"../../../common/zTreeStyle/img/diy/5.png"},
                {id:104, pId:10, name:"隐藏普通节点", file:"views/wsjls_home_zTree/common", icon:"../../../common/zTreeStyle/img/diy/5.png"},
                {id:11, pId:1, name:"文件夹一", file:"views/wsjls_home_zTree/demo", icon:"../../../common/zTreeStyle/img/diy/4.png"},
                {id:110, pId:11, name:"文件夹一", file:"views/wsjls_home_zTree/demo", icon:"../../../common/zTreeStyle/img/diy/6.png"},
                // url 跳转到外部
                // {id:102, pId:1, name:"最简单的树 --  简单 JSON 数据", "url":"http://www.baidu.com"},
                {id:12, pId:1, name:"测试颜色", font:{'background-color':'black', 'color':'white'}},
                {id:13, pId:1, name:"<span style='color:blue;margin-right:0px;'>view</span>.<span style='color:red;margin-right:0px;'>nameIsHTML</span>"},
                {id:14, pId:1, name:"测试url",  url:"http://ztreeapi.iteye.com/", target:"_blank"},
                {id:14, pId:1, name:"测试不跳转", url:"", target:"_blank", click:"alert('我是不会跳转的...');"},
                // {id:2, pId:0, name:"测试颜色", font:{'background-color':'black', 'color':'white'}},
                // {id:2, pId:0, name:"测试颜色", font:{'background-color':'black', 'color':'white'}},

            ],
        errorCode: 0,
        msg: ""
    }
    res.json(data);  // 用于将数据转换为json格式
});

router.use('/datatable', (req, res) => {
    let data = {
        data: [
            {
                "name": "测试",
                "account_name": "C:/Users/任文涛/Desktop/datatable",
                "price_date": "https://editor.datatables.net/"
            },
            {
                "name": "名字",
                "account_name": "进取型投资连结账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "优选成长型投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "积极成长型投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "货币避险型投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "开泰稳利投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "稳健收益型投资账户", 
                "price_date": "2017-12-08"
            },
            {
                "name": "名字",
                "account_name": "进取型投资连结账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "优选成长型投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "积极成长型投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "货币避险型投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "开泰稳利投资账户", 
                "price_date": "2017-12-08"
            }, 
            {
                "name": "名字",
                "account_name": "稳健收益型投资账户", 
                "price_date": "2017-12-08"
            }
        ],
        sEcho: 1
    }
    data.iTotalDisplayRecords = data.data.length;
    data.iTotalRecords = data.data.length;
    res.json(data);  // 用于将数据转换为json格式
});

router.use('/page.data', (req, res) => {
    let data = {
        data: {
            images: [
                'images/1.jpg',
                'images/2.jpg',
                'images/3.jpg',
                'images/4.jpg',
                'images/5.jpg',
                'images/6.jpg'
            ]
        },
        errorCode: 0,
        msg: ""
    }
    res.json(data);  // 用于将数据转换为json格式
});

router.post('/upload', (req, res) => {
    // console.log(req);
    // console.log(res);
    // let data = {
    //     data: {
    //         images: [
    //             'images/1.jpg',
    //             'images/2.jpg',
    //             'images/3.jpg',
    //             'images/4.jpg',
    //             'images/5.jpg',
    //             'images/6.jpg'
    //         ]
    //     },
    //     errorCode: 0,
    //     msg: ""
    // }
    // res.json(data);  // 用于将数据转换为json格式
});



// --------------------测试-------------------------
router.use('/test', (req, res) => {
    let data = {
        data: {
            '1234': '数据1234',
            '123': '我是123',
            '12': '我是12',
            '1': '我是1',
            '33': '我是33',
            '34': '我是34',
            '312': '数据312',
            '432': '我是432',
            '24': '我是24',
            '10': '我是10',
            '330': '我是330',
            '29': '我是29',
            'c':'ccc',
            'b':'bbb',
            'a':'aaa'
            // 'x_1234': '数据1234',
            // 'x_123': '我是123',
            // 'x_12': '我是12',
            // 'x_1': '我是1',
            // 'x_33': '我是33',
            // 'x_34': '我是34',
            // 'x_312': '数据312',
            // 'x_432': '我是432',
            // 'x_24': '我是24',
            // 'x_10': '我是10',
            // 'x_330': '我是330',
            // 'x_29': '我是29'
        },
        errorCode: 0,
        msg: ""
    }
    res.json(data);  // 用于将数据转换为json格式
});
// --------------------测试-------------------------

module.exports = router;