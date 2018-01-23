#### 一、node模块 http-server
###### 1.下载http-server
```
	npm install http-server -g
```
###### 2.执行 （http-server 项目路径) 或者 在项目路径下 执行 (http-server)
```
	http://127.0.0.1:8080 
```
备注：另一个命令也可以；有-o时打开html页面；没有需要手动打开；
```
	hs -p 端口号 -o
```

#### 纯前端打造一个简易实时预览的markdown编辑器https://www.jianshu.com/p/d0eed194db65
先下载JQuery、https://github.com/chjj/marked、https://github.com/ajaxorg/ace-builds/
1.项目下创建js文件夹
2.解从下载好的压缩包解marked/lib下的marked.js到js文件夹
3.解从下载好的压缩包解ace-builds/src到js文件夹重命名为ace
4.引入js文件