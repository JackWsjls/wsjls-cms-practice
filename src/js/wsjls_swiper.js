// 打印log

const log = (msg) => {
	const html = '<div>' + JSON.stringify(msg) + '</div>'
	$('#pageLog').append(html)
}

// -------------------轮播图--------------------

$.ajax({
	url: '/lottery/page.data',
	type: 'GET',
	async: true,
	success: function (data) {
		render(data);
	},
	error: function(){
		console.log('报错');
	}
})

const render = (data) => {
	log(data)
	let swiperHtml = '';
	// swiperHtml += '<ul>';
	data.data.images.forEach((key) => {
		swiperHtml += '<li><img src="' + key + '" /></li>';
	})
	// swiperHtml += '</ul>';
 	$('#list1').html(swiperHtml)
}

	var box=document.getElementById("box"),
		list1=document.getElementById("list1"),
		ali=list1.getElementsByTagName("li"),
		list2=document.getElementById("list2"),
		bli=list2.getElementsByTagName("li"),
		left=document.getElementById("left"),
		right=document.getElementById("right");
	
	var num=0;
	function change(){
		num++;
		if(num>ali.length-1){
			num=0
		}

		list1.style.left=-730*num+"px"
		
		for(var k=0;k<bli.length;k++){
			bli[k].className="";
		}
		bli[num].className="cur";
	}

	var time=setInterval(change,2000)

	left.onclick=function(){
		num--;
		if(num<0){
			num=ali.length-1
		}
		list1.style.left=-730*num+"px"
		for(var k=0;k<bli.length;k++){
			bli[k].className="";
		}
		bli[num].className="cur";
	}
	
	right.onclick=function(){
		change()
	}

	for(var j=0;j<bli.length;j++){
		bli[j].index=j;
		bli[j].onmouseover=function(){
			for(var k=0;k<bli.length;k++){
				bli[k].className="";
			}
			bli[this.index].className="cur";
			list1.style.left=-730*(this.index)+"px"
			num=this.index
		}
	}

	box.onmouseover=function(){
		clearInterval(time)
		left.style.display="block"
		right.style.display="block"
	}

	box.onmouseout=function(){
		time=setInterval(change,2000)
		left.style.display="none"
		right.style.display="none"
	}


// checkbox
$("#subButton").on('click', event => {
	event.preventDefault() 
	// console.log($("input[name='checkboxes']").is(':checked'))	// 是否被选中
	const bool = $("input[name='checkboxes']").is(':checked');
	log(bool)
	// if (!bool) {
	// 	$("#checkboxes").attr("value", "false")
	// }
	// $("#checkboxes").attr("value", "true")
	// console.log( $("input[name='checkboxes']:checked").val())	// 值
	bool ? $("#checkboxes").val(0) : $("#checkboxes").val(1)
	log($("#checkboxes").val());
	const formbox = $("#formbox").serialize();
	// console.log(formbox)	// 集合值

})

$('#clearLog').on('click', () => {
	event.preventDefault() 
	$('#pageLog').html('');
})

// node请求数据库，完成增删改查；
function released() {
	$.ajax({
		url: "/student",
		// url: "/student?id=1",
		type: "get",
		success: function(data) {
			// 拼接字符串
			var strs = "";
			let student = data.data;
			student.forEach(val => {
				strs += `<p><span>id:${val.id};</span><span>name:${val.name};</span><span>password:${val.password};</span></p>`
			})
			$("#student").html(strs);
		}
	})
}
released();

let addData = JSON.stringify([{id: 10, name: "繁华", password: 987},{id: 11, name: "茂盛", password: 1234}]);
// ！！！需要优化两次ajax嵌套！！！
$('#add').on('click', () => {
	$.ajax({
		url: "/add",
		type: "POST",
		contentType: "application/json;charset=utf-8",
		dataType: "json", 
		data: addData,
		success: function(data) {
			console.log(data)
			bootbox.alert(`${data.message}`);
			// 显示更新数据
			released();
		}
	})
})

$('#delete').on('click', () => {
	$.ajax({
		url: "/delete",
		type: "POST",
		contentType: "application/json;charset=utf-8",
		dataType: "json", 
		data: addData,
		success: function(data) {
			console.log(data)
			bootbox.alert(`${data.message}`);
			// 显示更新数据
			released();
		}
	})
})

$('#update').on('click', () => {
	$.ajax({
		url: `/update?id=${$('#passId').val()}&&password=${$('#password').val()}`,
		type: "GET",
		contentType: "application/json;charset=utf-8",
		dataType: "json", 
		success: function(data) {
			console.log(data)
			bootbox.alert(`${data.message}`);
			// 显示更新数据
			released();
		}
	})
})

$('#testForm').on('submit', function (e) {
    // e.preventDefault()
    // 数据验证
    console.log(1234)
})
