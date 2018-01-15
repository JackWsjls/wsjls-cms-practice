$(function(){

    // axios
	axios.get('/api/ajax/status?order=1&type=all_home&api=1').then(res=>{
	    const statu = res.data.data.statuses
	    let imgs = '';
	    for (const key in statu) {
	    	imgs += '<img src="http://img.51gsl.com/avatar/' + statu[key].user.avatar + '" alt="" />'
	    }
	    $("#imgs").html(imgs)
	})

    // 数据处理 jsonCallback({code:0,subcode:0,qqmusic:{curtime:1515737017,issmarter:0,systemtime:1515737017,iyellowbgm:0,xmusicnum:9,picurl:"",playlist:{song:[{xqusic_id:108962489,xctype:2,xexpire_time:1490420812,xsong_name:"幸福的终点",xsinger_id:182024,xsinger_name:"曾婕Joey.Z",xsong_url:'http://stream8.qqmusic.qq.com/120962489.wma',xsong_dissid:1656758,xsong_diskname:"如果蜗牛有爱情 电视剧原声带",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:252,xsong_size:2179806,xis_word:0,xcopy_right:0,fbit:1,hd:10121795,ks:4049000,hr:320,soso:0,ape:26970389,flac:27189848,ogg:5445300,sizetac:5919758,downstatus:0,xqusic_mid:"000Y0QL02UDV14",xsinger_mid:"001EDTqO31nL9z",xsong_dissmid:"001TSu3I1nUVn0"},{xqusic_id:301010,xctype:2,xexpire_time:1443107326,xsong_name:"There You&#39;ll Be",xsinger_id:1622,xsinger_name:"Faith Hill",xsong_url:'http://stream1.qqmusic.qq.com/12301010.wma',xsong_dissid:24968,xsong_diskname:"There you&#39;ll be",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:221,xsong_size:1795797,xis_word:0,xcopy_right:0,fbit:1,hd:8870378,ks:3548856,hr:320,soso:0,ape:25716087,flac:26167134,ogg:4911593,sizetac:5327957,downstatus:0,xqusic_mid:"003khP6W3hvWNR",xsinger_mid:"003vAq9a0EDCGp",xsong_dissmid:"003uVv4J2RT1zU"},{xqusic_id:1142404,xctype:2,xexpire_time:1406560145,xsong_name:"END THEME",xsinger_id:24765,xsinger_name:"天門",xsong_url:'http://stream9.qqmusic.qq.com/13142404.wma',xsong_dissid:97179,xsong_diskname:"秒速5センチメートル オリジナルサウンドトラック ／a chain of short stories about their distance",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:172,xsong_size:1404839,xis_word:0,xcopy_right:0,fbit:1,hd:6915241,ks:2767622,hr:320,soso:0,ape:0,flac:0,ogg:3475767,sizetac:3348524,downstatus:0,xqusic_mid:"001EJW503JOeDa",xsinger_mid:"000wG7Zt1SVDBX",xsong_dissmid:"002if7UF4RpVpM"},{xqusic_id:712988,xctype:12,xexpire_time:1394434391,xsong_name:"I AM",xsinger_id:4286,xsinger_name:"林俊杰",xsong_url:'http://stream3.qqmusic.qq.com/12712988.wma',xsong_dissid:60352,xsong_diskname:"I AM 世界巡回演唱会",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:293,xsong_size:2384145,xis_word:0,xcopy_right:0,fbit:1,hd:11762592,ks:4708771,hr:320,soso:0,ape:32216780,flac:32500463,ogg:6890147,sizetac:7055189,downstatus:0,xqusic_mid:"002FwU8W3tvuVL",xsinger_mid:"001BLpXF2DyJe2",xsong_dissmid:"000KzVUN1wEZge"},{xqusic_id:2835952,xctype:12,xexpire_time:1393827727,xsong_name:"Imagine Me Without You",xsinger_id:2392,xsinger_name:"Jaci Velasquez",xsong_url:'http://stream9.qqmusic.qq.com/14835952.wma',xsong_dissid:225499,xsong_diskname:"On My Knees - The Best Of Jaci Velasquez",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:251,xsong_size:2170304,xis_word:0,xcopy_right:0,fbit:1,hd:10067920,ks:4027364,hr:320,soso:0,ape:29312388,flac:29435840,ogg:5818713,sizetac:6057685,downstatus:0,xqusic_mid:"004a2h6y2cVdgF",xsinger_mid:"002KlIfi26Y9IO",xsong_dissmid:"001hvngG47jNdm"},{xqusic_id:97784,xctype:2,xexpire_time:1381800846,xsong_name:"轨迹",xsinger_id:4558,xsinger_name:"周杰伦",xsong_url:'http://stream1.qqmusic.qq.com/12097784.wma',xsong_dissid:8221,xsong_diskname:"寻找周杰伦",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:326,xsong_size:2648933,xis_word:0,xcopy_right:0,fbit:1,hd:13077414,ks:5232396,hr:320,soso:0,ape:36433927,flac:38013540,ogg:7355985,sizetac:7795526,downstatus:0,xqusic_mid:"0036g6g628i2gI",xsinger_mid:"0025NhlN2yWrP4",xsong_dissmid:"001BGzMs369FzU"},{xqusic_id:96581,xctype:2,xexpire_time:1349905318,xsong_name:"奇洛李维斯回信",xsinger_id:123,xsinger_name:"薛凯琪",xsong_url:'http://stream4.qqmusic.qq.com/12096581.wma',xsong_dissid:8139,xsong_diskname:"十年选",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:246,xsong_size:1997065,xis_word:0,xcopy_right:0,fbit:1,hd:9785671,ks:3947589,hr:320,soso:0,ape:26717172,flac:27020896,ogg:5611371,sizetac:5693780,downstatus:0,xqusic_mid:"000vrJud3ZZxWR",xsinger_mid:"002H2FME3sl3Ne",xsong_dissmid:"004TUbyL4639Em"},{xqusic_id:1129908,xctype:2,xexpire_time:1349282341,xsong_name:"Nothing&#39;s Gonna Change My Love For You",xsinger_id:16,xsinger_name:"杜德伟",xsong_url:'http://stream8.qqmusic.qq.com/13129908.wma',xsong_dissid:96348,xsong_diskname:"第八号当铺",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:272,xsong_size:2206907,xis_word:0,xcopy_right:0,fbit:1,hd:10883763,ks:4355031,hr:320,soso:0,ape:30406210,flac:31539937,ogg:6430817,sizetac:6578800,downstatus:0,xqusic_mid:"003Pf3jL4U8HUQ",xsinger_mid:"002tafxY1wVzqX",xsong_dissmid:"0039IzMf3thnoZ"},{xqusic_id:463359,xctype:2,xexpire_time:1343390293,xsong_name:"明明深爱着你",xsinger_id:235,xsinger_name:"李克勤",xsong_url:'http://stream10.qqmusic.qq.com/12463359.wma',xsong_dissid:37639,xsong_diskname:"2009年一月热搜歌三",xdesc:"",xquote:0,xkey:"",xclass:0,xsong_playtime:245,xsong_size:2002635,xis_word:0,xcopy_right:0,fbit:1,hd:0,ks:3936801,hr:320,soso:0,ape:0,flac:0,ogg:0,sizetac:0,downstatus:0,xqusic_mid:"0023mNRI49N4qQ",xsinger_mid:"003nS2v740Lxcw",xsong_dissmid:"004MKsoU1G0ksX"}]}}})
    // var jsonCallback = function (json) {
    //     return json;
    // };
    // var jsonObj = eval(obj.data);
    // 快递部分
    axios.get('/qzone/fcg-bin/cgi_playlist_xml.fcg?uin=418383219&json=1&g_tk=1916754934').then(res=>{
        var jsonCallback = function (json) {
            return json;
        };
        var data = eval(res.data).qqmusic;

        let newCurtime = new Date((data.curtime) * 1000);
        let newSystemtime = new Date((data.systemtime) * 1000);
        data.curtime = context.formatDate(newCurtime, 'yyyy-MM-dd hh:mm:ss.q');
        data.systemtime = context.formatDate(newSystemtime, 'yyyy-MM-dd hh:mm:ss.q');
        $('#curTime').html(data.curtime);
        let song = data.playlist.song;
        let qqmusicData = '';
        song.forEach((val, i) => {
            let newXexpireTime = new Date((val.xexpire_time) * 1000);
            val.xexpire_time = context.formatDate(newXexpireTime, 'yyyy-MM-dd hh:mm:ss');
            let qqData = `<tr><td>${i}</td><td>${val.xsong_name}</td><td>${val.xsong_diskname}</td><td>${val.xexpire_time}</td></td><td>${val.xsinger_name}</td><td>${val.xsong_url}</td></tr>`
            qqmusicData += qqData;
        })
        $('#qqTbody').html(qqmusicData);
    })
    // 处理快递数据
    let index = localStorage.getItem('index') || 0;
    const newArr = [];
    index++;

    $('#kd-btn').on('click', () => {
        const kdValue = $('#kd-value').val();
        const kdType = $('#kd-type').val();
        let isExist = true;
        for(let val in localStorage) {
            if (localStorage[val] == kdValue) {
                isExist = false;
            }
        }
        if (/^[0-9]*$/.test(kdValue) && !!kdType && isExist) {
            localStorage.setItem('kdId' + index,kdValue);
            localStorage.setItem('kdType' + index,$('#kd-type').find("option:selected").text());
            // const kdUrl = '/kd/query?type=zhongtong&postid=473675760228'  
            // 公司：中通；快递单号：473675760228
            // 公司：韵达；快递单号：3831153628155
            // 公司：百世汇通；快递单号：70059302554338
            // 公司：中通；快递单号：473369675693
            // 圆通 887829590720296139
            const kdUrl = `/kd/query?type=${kdType}&postid=${kdValue}`;
            axios.get(kdUrl).then(res=>{
                if (res.status == 200 && res.data.status == 200) {
                    const data = res.data.data;
                    let kdData = '';
                    data.forEach(val => {
                        kdData += `<li><i class="node-icon"></i><span class="time">${val.ftime}</span><span class="time">${val.location}</span><p style="margin-bottom: 0;"><span class="txt">${val.context}</span></p></li>`;
                    })
                    $('.track-list ul').html(kdData);
                    $('.track-list ul li').eq(0).addClass('first');
                    localStorage.setItem('index',index);
                    localStorage.setItem('data' + index,kdData);
                } else {
                    bootbox.alert('选择正确的快递公司')
                    localStorage.removeItem('kdId' + index);
                    localStorage.removeItem('kdType' + index);
                }
            })
        } else {
            bootbox.alert({
                message: '请输入正确的快递信息或者快递单号重复',
                size: 'small',
                callback: function () {
                    console.log('This was logged in the callback!');
                }
            })
        }
    })

    for (let val in localStorage) {
        const newVal = {};
        let valIndex = '';
        if (typeof val != 'undefined' && val.indexOf('kdId') == 0 && val.length > 0) {
            valIndex = val.substr(4);
            newVal.valIndex = valIndex;
            newVal.kdId = localStorage['kdId' + valIndex];
            newVal.kdType = localStorage['kdType' + valIndex];
            newVal.kdData = localStorage['data' + valIndex];
            newArr.unshift(newVal);
        }
    }

    let data = '';
    const showArr = [];
    newArr.forEach( val => {
        data += `<p><span>公司：</span><span>${val.kdType}；</span><span>快递单号：</span><a href="#" style="cursor:pointer;text-decoration:underline;background-color: none;color: #000000;"><span class="showData${val.valIndex}">${val.kdId}</span></a></p>`;
    })

    $('.kd_history').html(data);
    newArr.forEach( val => {
        $('.kd_history').find(".showData" + val.valIndex).on('click', () => {
            BootstrapDialog.show({
                size: 'BootstrapDialog.SIZE_WIDE',
                title: '物流追踪',
                message: val.kdData,
                buttons: [{
                    label: '保存',
                    cssClass: 'btn-success',
                    hotkey: 13, // Enter.
                    cssClass: 'login-dialog',
                    action: function() {
                        alert('You pressed Enter.');
                    }
                },{
                    label: '返回',
                    hotkey: 8, // Enter.
                    action: function(dialogRef){
                        dialogRef.close();
                    }
                }]
            })
        })
        showArr.push({'kdId': val.kdId, 'kdType': val.kdType});
    })
    newArr.length != 0 && $('.kd_data').html(JSON.stringify(showArr));
    console.log(localStorage)
    // 快递结束

    // -----------------------------------------------------------------
});

