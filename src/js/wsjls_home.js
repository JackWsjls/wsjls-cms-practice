	let zNodes;
	var zTree;
	var demoIframe;

	function filter(treeId, parentNode, childNodes) {
		if (!childNodes) return null;
		for (var i=0, l=childNodes.length; i<l; i++) {
			childNodes[i].name = childNodes[i].name.replace(/\.n/g, '.');
		}
		return childNodes.data;
	}
// ----------------------------------------------------------------------------------

		var log, className = "dark";
		function beforeDrag(treeId, treeNodes) {
			return false;
		}
		function beforeEditName(treeId, treeNode) {
			className = (className === "dark" ? "":"dark");
			showLog("[ "+getTime()+" beforeEditName ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
			var zTree = $.fn.zTree.getZTreeObj("tree");
			zTree.selectNode(treeNode);
			setTimeout(function() {
				if (confirm("进入节点 -- " + treeNode.name + " 的编辑状态吗？")) {
					setTimeout(function() {
						zTree.editName(treeNode);
					}, 0);
				}
			}, 0);
			return false;
		}
		function beforeRemove(treeId, treeNode) {
			className = (className === "dark" ? "":"dark");
			showLog("[ "+getTime()+" beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
			var zTree = $.fn.zTree.getZTreeObj("tree");
			zTree.selectNode(treeNode);
			return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
		}
		function onRemove(e, treeId, treeNode) {
			showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
		}
		function beforeRename(treeId, treeNode, newName, isCancel) {
			className = (className === "dark" ? "":"dark");
			showLog((isCancel ? "<span style='color:red'>":"") + "[ "+getTime()+" beforeRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name + (isCancel ? "</span>":""));
			if (newName.length == 0) {
				setTimeout(function() {
					var zTree = $.fn.zTree.getZTreeObj("tree");
					zTree.cancelEditName();
					alert("节点名称不能为空.");
				}, 0);
				return false;
			}
			return true;
		}
		function onRename(e, treeId, treeNode, isCancel) {
			showLog((isCancel ? "<span style='color:red'>":"") + "[ "+getTime()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name + (isCancel ? "</span>":""));
		}
		function showRemoveBtn(treeId, treeNode) {
			return !treeNode.isFirstNode;
		}
		function showRenameBtn(treeId, treeNode) {
			return !treeNode.isLastNode;
		}
		function showLog(str) {
			if (!log) log = $("#log");
			log.append("<li class='"+className+"'>"+str+"</li>");
			if(log.children("li").length > 8) {
				log.get(0).removeChild(log.children("li")[0]);
			}
		}
		function getTime() {
			var now= new Date(),
			h=now.getHours(),
			m=now.getMinutes(),
			s=now.getSeconds(),
			ms=now.getMilliseconds();
			return (h+":"+m+":"+s+ " " +ms);
		}

		var newCount = 1;
		function addHoverDom(treeId, treeNode) {
			var sObj = $("#" + treeNode.tId + "_span");
			if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
			var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
				+ "' title='add node' onfocus='this.blur();'></span>";
			sObj.after(addStr);
			var btn = $("#addBtn_"+treeNode.tId);
			if (btn) btn.bind("click", function(){
				var zTree = $.fn.zTree.getZTreeObj("tree");
				zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
				return false;
			});
		};
		function removeHoverDom(treeId, treeNode) {
			$("#addBtn_"+treeNode.tId).unbind().remove();
		};

// -----------------------------------------------------------------------------------

// ------以下是右键列表---------

        var zTree;
        var rMenu = $("#rMenu");
		function OnRightClick(event, treeId, treeNode) {
			if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
				zTree.cancelSelectedNode();
				showRMenu("root", event.clientX, event.clientY);
			} else if (treeNode && !treeNode.noR) {
				zTree = $.fn.zTree.getZTreeObj("tree");
				zTree.selectNode(treeNode);
				showRMenu("node", event.clientX, event.clientY);
			}
		}

		function showRMenu(type, x, y) {
			$("#rMenu ul").show();
			if (type=="root") {
				$("#m_del").hide();
				$("#m_check").hide();
				$("#m_unCheck").hide();
			} else {
				$("#m_del").show();
				$("#m_check").show();
				$("#m_unCheck").show();
			}

            y += document.body.scrollTop;
            x += document.body.scrollLeft;
            rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"});

			$("body").bind("mousedown", onBodyMouseDown);
		}
		function hideRMenu() {
			if (rMenu) rMenu.css({"visibility": "hidden"});
			$("body").unbind("mousedown", onBodyMouseDown);
		}
		function onBodyMouseDown(event){
			if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
				rMenu.css({"visibility" : "hidden"});
			}
		}
		var addCount = 1;
		function addTreeNode() {
			hideRMenu();
			var newNode = { name:"增加" + (addCount++)};
			if (zTree.getSelectedNodes()[0]) {
				newNode.checked = zTree.getSelectedNodes()[0].checked;
				zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
			} else {
				zTree.addNodes(null, newNode);
			}
		}
		function removeTreeNode() {
			hideRMenu();
			var nodes = zTree.getSelectedNodes();
			if (nodes && nodes.length>0) {
				if (nodes[0].children && nodes[0].children.length > 0) {
					var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
					if (confirm(msg)==true){
						zTree.removeNode(nodes[0]);
					}
				} else {
					zTree.removeNode(nodes[0]);
				}
			}
		}
		function checkTreeNode(checked) {
			var nodes = zTree.getSelectedNodes();
			if (nodes && nodes.length>0) {
				zTree.checkNode(nodes[0], checked, true);
			}
			hideRMenu();
		}

		function resetTree() {
			hideRMenu();
			$.fn.zTree.init($("#tree"), setting);
		}
// -------以上是------

// -------隐藏节点-----

		function showNodes() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = zTree.getNodesByParam("isHidden", true);
			zTree.showNodes(nodes);
			setTitle();
			count();
		}
		function hideNodes() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = zTree.getSelectedNodes();
			if (nodes.length == 0) {
				alert("请至少选择一个节点");
				return;
			}
			zTree.hideNodes(nodes);
			setTitle();
			count();
		}

// --------以上是---------

		function focusKey(e) {
			if (key.hasClass("empty")) {
				key.removeClass("empty");
			}
		}
		function blurKey(e) {
			if (key.get(0).value === "") {
				key.addClass("empty");
			}
		}
		var lastValue = "", nodeList = [], fontCss = {};
		// function clickRadio(e) {
		// 	lastValue = "";
		// 	searchNode(e);
		// }
		function searchNode(e) {
			var zTree = $.fn.zTree.getZTreeObj("tree");
			// if (!$("#getNodesByFilter").attr("checked")) {
				var value = $.trim(key.get(0).value);
				// var keyType = "";
				// if ($("#name").attr("checked")) {
					keyType = "name";
				// } else if ($("#level").attr("checked")) {
				// 	keyType = "level";
				// 	value = parseInt(value);
				// } else if ($("#id").attr("checked")) {
				// 	keyType = "id";
				// 	value = parseInt(value);
				// }
				if (key.hasClass("empty")) {
					value = "";
				}
				if (lastValue === value) return;
				lastValue = value;
				if (value === "") return;
				updateNodes(false);

				// if ($("#getNodeByParam").attr("checked")) {
					// var node = zTree.getNodeByParam(keyType, value);
				// 	if (node === null) {
				// 		nodeList = [];
				// 	} else {
				// 		nodeList = [node];
				// 	}
				// } else if ($("#getNodesByParam").attr("checked")) {
				// 	nodeList = zTree.getNodesByParam(keyType, value);
				// } else if ($("#getNodesByParamFuzzy").attr("checked")) {
					nodeList = zTree.getNodesByParamFuzzy(keyType, value);
				// }
			// } else {
			// 	updateNodes(false);
			// 	nodeList = zTree.getNodesByFilter(filter);
			// }
			updateNodes(true);

		}
		function updateNodes(highlight) {
			var zTree = $.fn.zTree.getZTreeObj("tree");
			for( var i=0, l=nodeList.length; i<l; i++) {
				nodeList[i].highlight = highlight;
				zTree.updateNode(nodeList[i]);
			}
		}
		function getFontCss(treeId, treeNode) {
			return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
		}
		// function filter(node) {
		// 	return !node.isParent && node.isFirstNode;
		// }

	var setting = {
		async: {
			enable: true,
			url:"/lottery/wsjls.home",
			// autoParam:["id", "name=n", "level=lv"],
			// otherParam:{"otherParam":"zTreeAsyncTest"},
			dataFilter: filter
		},
		view: {
			dblClickExpand: function(treeId, treeNode){
				return treeNode.level > 0;
			},
			showLine: true,  // 是否显示连接线树
			// showIcon: function (treeId, treeNode) {
				// return !treeNode.isParent;
			// }, // 是否显示节点图标的树 showIconForTree
			fontCss: function (treeId, treeNode) {
				return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
			},
			// function (treeId, node) {
			// 	return node.font ? node.font : {};
			// }, // 设置字体样式
			nameIsHTML: true, // 允许节点名称支持 HTML 内容
			selectedMulti: false,
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom
		},
		edit: {
			enable: true,
			editNameSelectAll: true,
			showRemoveBtn: showRemoveBtn,
			showRenameBtn: showRenameBtn
		},
		data: {
			simpleData: {
				enable:true,
				idKey: "id",
				pIdKey: "pId",
				rootPId: ""
			}
		},
		check: {
			enable: true
		},
		callback: {
			beforeClick: function(treeId, treeNode) {
				var zTree = $.fn.zTree.getZTreeObj("tree");  //  ?
				if (treeNode.isParent) {  // ?
					zTree.expandNode(treeNode);  // ?
					return false;
				} else {
					demoIframe.attr("src",treeNode.file + ".html");  
					return true;
				}
			},
			beforeDrag: beforeDrag,
			beforeEditName: beforeEditName,
			beforeRemove: beforeRemove,
			beforeRename: beforeRename,
			onRemove: onRemove,
			onRename: onRename,
			onRightClick: OnRightClick
		}
	};

	// var zNodes =[
	// 	{id:1, pId:0, name:"表格展示", open:true},
	// 	{id:10, pId:1, name:"测试文档"},
	// 	{id:100, pId:10, name:"datatable", file:"views/wsjls_home_zTree/datatable"},
	// 	{id:101, pId:10, name:"文件夹一", file:"views/wsjls_home_zTree/demo"},
	// 	{id:11, pId:1, name:"文件夹一", file:"views/wsjls_home_zTree/demo"},
	// 	{id:110, pId:11, name:"文件夹一", file:"views/wsjls_home_zTree/demo"},
	// 	// url 跳转到外部
	// 	// {id:102, pId:1, name:"最简单的树 --  简单 JSON 数据", "url":"http://www.baidu.com"},
	// ];

	$(document).ready(function(){

		// $.ajax({
		// 	'url': '/lottery/wsjls.home',
		// 	success: data => {
		// 		// console.log(data.data)
		// 		zNodes = data.data;

		// 		// 数据中有 自定义图标

				var t = $("#tree");
				// t = $.fn.zTree.init(t, setting, zNodes);
				t = $.fn.zTree.init(t, setting);
				demoIframe = $("#testIframe");
				demoIframe.bind("load", loadReady);
				var zTree = $.fn.zTree.getZTreeObj("tree");
				zTree.selectNode(zTree.getNodeByParam("id", 100));

				key = $("#key");
				key.bind("focus", focusKey)
				.bind("blur", blurKey)
				// .bind("propertychange", searchNode)
				.bind("input", searchNode);

			$("#hideNodesBtn").bind("click", {type:"rename"}, hideNodes);
			$("#showNodesBtn").bind("click", {type:"icon"}, showNodes);
		// 	}
		// })
	});

	function loadReady() {
		var bodyH = demoIframe.contents().find("body").get(0).scrollHeight,
		htmlH = demoIframe.contents().find("html").get(0).scrollHeight,
		maxH = Math.max(bodyH, htmlH), minH = Math.min(bodyH, htmlH),
		h = demoIframe.height() >= maxH ? minH:maxH ;
		if (h < 530) h = 530;
		demoIframe.height(h);
	}
