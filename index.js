require('babel-register');

let path = require('path');         // nodejs自带模块
let express = require('express');   // 引入express
let app = express();				// 创建express实例
const proxy = require('http-proxy-middleware');
const axios = require('axios');
const opn = require('opn');
const ejs = require('ejs')
var bodyParser = require('body-parser');
const mysql = require('./src/config/db.js');

// const utils = require(path.join(__dirname, 'src/common/utils.js'));
const utils = require('./src/common/utils.js');

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM('<!DOCTYPE html>');
// const $ = require('jQuery')(window);

app.use('/lottery', require('./lottery'));  
// app.use(express.static('src'));     // 指定静态资源所在的目录
app.use(express.static(path.join(__dirname, 'src')));

// see https://github.com/expressjs/body-parser
// 添加 body-parser 中间件,为了拿到post数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// view engine setup  
app.set('views', path.join(__dirname, 'src', 'views'));  
app.set('view engine', 'ejs');  

// 设置路由配置
// app.get('/', function(req, res) {       
// 	// $('.wrap').html('<div>1234</div>')
//     res.sendFile(path.join(__dirname, './src/index'));  // 指向根目录下
// });

app.get("/",function(req,res){
    res.redirect("/login");
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/wsjls_echarts",function(req,res){
	const renderData = {
		viewName: "wsjls_echarts",
		title: "wsjls_echarts"
	}
    res.render("index", renderData);
});

app.get("/home",function(req,res){
	const renderData = {
		viewName: "wsjls_home",
		title: "你好北京"
	}
    res.render("index", renderData);
});

app.get("/free_marker",function(req,res){
	const renderData = {
		viewName: "free_marker",
		title: "你好北京"
	}
    res.render("index", renderData);
});

app.get("/wsjls_swiper",function(req,res){
	const renderData = {
		viewName: "wsjls_swiper",
		title: "你好北京"
	}

    res.render("index", renderData);
});

app.get("/wsjls_fileinput",function(req,res){
	const renderData = {
		viewName: "wsjls_fileinput",
		title: "你好北京"
	}
    res.render("index", renderData);
});

app.get("/wsjls_jsonp",function(req,res){
	const renderData = {
		viewName: "wsjls_jsonp",
		title: "你好北京"
	}
    res.render("index", renderData);
});

app.get("/wsjls_ueditor",function(req,res){
	const renderData = {
		viewName: "wsjls_ueditor",
		title: "你好北京"
	}
    res.render("index", renderData);
});

app.get("/wsjls_vue",function(req,res){
	const renderData = {
		viewName: "wsjls_vue",
		title: "你好北京"
	}
    res.render("index", renderData);
});

app.get("/wsjls_js",function(req,res){
	const renderData = {
		viewName: "wsjls_js",
		title: "JS基础加面试"
	}
    res.render("index", renderData);
});

// 接口

// http://m.51gsl.com/ajax/status?order=1&type=all_home&api=1&debug=1
// http://m.51gsl.com/ajax/user?type=4&api=1&debug=1
app.use('/api', proxy({
	target: 'http://m.51gsl.com', 
	changeOrigin: true,
	pathRewrite: {'^/api' : '/'}, // 重写路径
}));

// http://qzone-music.qq.com/fcg-bin/cgi_playlist_xml.fcg?uin=418383219&json=1&g_tk=1916754934
app.use('/qzone', proxy({
	target: 'http://qzone-music.qq.com', 
	changeOrigin: true,
	pathRewrite: {'^/qzone' : '/'}, // 重写路径
}));

// http://www.kuaidi100.com/query?type=快递公司代号&postid=快递单号
app.use('/kd', proxy({
	target: 'http://www.kuaidi100.com', 
	changeOrigin: true,
	pathRewrite: {'^/kd' : '/'}, // 重写路径
}));

// node请求数据库，完成增删改查；
// 连接数据库接口
// 测试连接数据库接口
app.get("/student", (req, res) => {
    let query = req.query;
	let datas = {};
	let newData = [];
	mysql.query("select * from student", "", (data) => {
		if (typeof(data) == "undefined" || data.length == 0) {
			datas = {
				status: 0,
				message: "请求失败"
			}
		} else {
			datas = {
				status: 1,
				message: "请求成功"
			}
		}
		if (query.id) {
			newData.push(data.find(val => {
				return val.id == query.id;
			}))
			data = newData;
		}
		datas.data = data;
		res.json(datas)
	})
})

app.post("/add", (req, res) => {
	let datas = {};
	let insertData = [];
	// console.log(req.body)
	req.body.forEach((val, index) => {
		insertData[0] = val.id;
		insertData[1] = val.name;
		insertData[2] = val.password;
		mysql.query("insert into student (id,name,password) values(?,?,?)", insertData, (data) => {
			console.log()
			if (!data.affectedRows) {
				datas = {
					status: 0,
					message: `数据插入失败`
				}
			} else {
				datas = {
					status: 1,
					message: `数据插入成功`
				}
			}
			index == req.body.length - 1 && res.json(datas);
		})
	})
})

app.post('/test', function(req, res) {
    // console.log(req.query.id);
	mysql.query("select * from student", "", (data) => {
		let test = data.some(val => {
			return val.name == req.body.name && req.body.password == val.password;
		})
		test ? res.redirect('/wsjls_swiper') : res.send('<h1>登陆失败</h1>');
	})
});

app.post("/delete", (req, res) => {
	let datas = {};
	// console.log(req.body)
	req.body.forEach((val, index) => {
		mysql.query(`delete from student where id = ${val.id}`, "", (data) => {
			if (!data.affectedRows) {
				datas = {
					status: 0,
					message: `删除数据失败或没有找到需删除数据`
				}
			} else {
				datas = {
					status: 1,
					message: `删除数据成功`
				}
			}
			index == req.body.length - 1 && res.json(datas);
		})
	})
})

app.get("/update", (req, res) => {
	let query = req.query;
	let datas = {};
	// console.log(req.body)
	mysql.query(`update student set password = ${query.password} where id = ${query.id}`, "", (data) => {
		if (!data.affectedRows) {
			datas = {
				status: 0,
				message: `更新数据失败`
			}
		} else {
			datas = {
				status: 1,
				message: `更新数据成功`
			}
		}
		res.json(datas);
	})
})

// 存储端口(怎么存)

// 监听端口, 创建服务器
let server = app.listen(3000, function() {    
	let serNow = utils.formatDate(new Date(), "yyyy-MM-dd hh:mm")
    console.log('app listening at http://localhost:3000');
    console.log("server time " + serNow);
    var urls = 'http://localhost:' + 3000
    // opn(urls)
})
