
$.ajax({
		// 注意这里的lottery指的是前面server.js中第4行代码通过app.use指定的名字, 而lottery.do则是数据文件lottery.js中指定的数据接口的名称
		url: '/lottery/lottery.do',
		type: 'GET'
	})
	.done(function(result) {
		var data = result.data;
		document.write(data.dayLotteryTimesLimit);
		document.write(data.description);
	})
	.fail(function(xhr, textStatus) {
		console.log(xhr.status);
		console.log(textStatus);
	})
	.always(function() {
		console.log("complete");
		// alert('完成')
	});

$.ajax({
	url: './lottery/tk',
	type: 'GET',
	success: function(data){
		console.log(data);
	}
})