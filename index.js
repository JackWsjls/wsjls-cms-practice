require('babel-register');

let path = require('path');         // nodejs自带模块
let express = require('express');   // 引入express
let app = express();				// 创建express实例
const proxy = require('http-proxy-middleware');
const axios = require('axios');
const opn = require('opn');
const ejs = require('ejs')

// const utils = require(path.join(__dirname, 'src/common/utils.js'));
const utils = require('./src/common/utils.js');

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const { window } = new JSDOM('<!DOCTYPE html>');
// const $ = require('jQuery')(window);

app.use('/lottery', require('./lottery'));  
// app.use(express.static('src'));     // 指定静态资源所在的目录
app.use(express.static(path.join(__dirname, 'src')));

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

// 存储端口(怎么存)

// 监听端口, 创建服务器
let server = app.listen(3000, function() {    
	let serNow = utils.formatDate(new Date(), "yyyy-MM-dd hh:mm")
    console.log('app listening at http://localhost:3000');
    console.log("server time " + serNow);
    var urls = 'http://localhost:' + 3000
    // opn(urls)
})
