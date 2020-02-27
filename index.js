
//创建简单的http请求-----------------------
/* var http = require('http')
let fs = require('fs')
http.createServer((req, res)=>{
  // 发送http头部
  // http状态值： 200
  // 内容类型： text/plain
   
  res.writeHead(200,{'Content-type':'text/html; charset=utf-8'});

  let data = fs.readFileSync('text.text')
  res.end('hello world'+data)
}).listen(8888) */



// 读取文件同步方式-----------------------
/*
let fs = require('fs')
let data = fs.readFileSync('text.text')

console.log(data.toString())
console.log("程序执行结束")
*/

// 读取文件异步方式-----------------------
/*
  let fs = require('fs')
  fs.readFile('text.text',(err, data)=>{
    console.log(err, data.toString());  
  })
  console.log("程序结束");
*/

//事件-----------------------
/*
  let events = require('events');
  var eventEmitter = new events.EventEmitter();
  eventEmitter.on('事件名'，'事件方法')
*/

// 写入流-----------------------
/* 
let fs = require('fs')
let data = "测试测试......"

// 创建一个写入流，可以写到中去
let writerStream = fs.createWriteStream('test.txt')
writerStream.write(data,'utf-8')

// 标记文件末尾
writerStream.end()

writerStream.on('finish',()=>{
  console.log('写入完成');
})

writerStream.on('error', (err)=>{
  console.log(err);
})
console.log("程序执行完毕"); 
*/

// 管道流 （将一个文件内容复制到另外一个文件）-----------------------
/* 
let fs = require('fs')
let readStream = fs.createReadStream('text.text')
let writeStream = fs.createWriteStream('test.txt')

readStream.pipe(writeStream) 
*/
