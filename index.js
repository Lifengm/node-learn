
//创建简单的http请求
var http = require('http')
let fs = require('fs')
http.createServer((req, res)=>{
  // 发送http头部
  // http状态值： 200
  // 内容类型： text/plain
   
  res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});

  let data = fs.readFileSync('text.text')
  res.end('hello world'+data)
}).listen(8888)



// 读取文件同步方式
/*
let fs = require('fs')
let data = fs.readFileSync('text.text')

console.log(data.toString())
console.log("程序执行结束")
*/

// 读取文件异步方式
/*
  let fs = require('fs')
  fs.readFile('text.text',(err, data)=>{
    console.log(err, data.toString());  
  })
  console.log("程序结束");
*/

//事件
let events = require('events');
var eventEmitter = new events.EventEmitter();




