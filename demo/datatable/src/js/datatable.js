
oTable = null;
var oTable = $('#datatable').dataTable({
    "bSort": false,
    "bFilter": true,
    "bPaginate": true,
    "bInfo": true,
    "bLengthChange" : true,
    "fnInitComplete": function () {
        // console.log("初始化完成");
    },
    "fnDrawCallback": () => {
        // console.log("表格重绘完成");
    },
    // "bServerSide": true,    //把bServerSide配置去掉，否则你需要在服务器端分页返回指定页数的数据，datatable不会使用客户端分页
    "sAjaxSource": "./lottery/tk",
    "language": {
        // "url": "./fonts/Chinese.json"
        "sProcessing": "正在加载中...",
        "sLengthMenu": "每页显示 _MENU_ 条记录",
        "sZeroRecords": "对不起，查询不到任何相关数据",
        "sInfo": "当前显示 _START_ 到 _END_ 条，共 _TOTAL_ 条记录",
        "sInfoEmtpy": "找不到相关数据",
        // "sInfoEmpty": "显示 0 至 0 共 0 项",
        "sInfoFiltered": "数据表中共有 _MAX_ 条记录",  
        "sInfoPostFix": "",
        "sSearch": "搜索",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中。。。",
        "sInfoThousands": ",",
        "oPaginate": { 
            "sFirst": "第一页",
            "sPrevious": "上一页 ", 
            "sNext": "下一页 ", 
            "sLast": "末页 " 
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    },
    // "columnDefs": [ 
    //     {
    //         // The `data` parameter refers to the data for the cell (defined by the
    //         // `data` option, which defaults to the column being worked with, in
    //         // this case `data: 0`.
    //         "render": function ( data, type, row ) {
    //             return data +' ('+ row[3]+')';
    //         },
    //         "targets": 0
    //     },
    //     { "visible": false,  "targets": [ 6 ] }
    // ]
    "aLengthMenu": [[5, 10, 15, -1], [5, 10, 15, "显示所有"]],
    "columns": [
        { "data": "name" }, 
        { "data": "position" },
        { "data": "office" },
        { "data": "age" },
        { "data": "start_date" },
        { "data": "#", "visible": true,
            "render": (data, type, obj) => {
                var result = "<a href='http://localhost:9006/'>下载</a>"
                            + "&nbsp;&nbsp;&nbsp;"
                            + "<a href='http://localhost:9006/'>刷新</a>"
                            + "&nbsp;&nbsp;&nbsp;"
                            + "<a href='http://localhost:9006/'>删除</a>"
                return result;
            }

        }
    ]
});

function reload() {

    oTable.fnDraw();

}


$("#btn").on("click", () => {
    reload()
})


