var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method


  if(path==='/'){      
      response.statusCode=200    //响应码
      response.setHeader('Content-Type','text/html;charset=utf-8')
      response.write('你好')
      response.end()
    }else if(path==='/index.html'){
        response.statusCode=200
        response.setHeader('Content-Type','text/html;charset=utf-8')
        let string=fs.readFileSync('public/index.html').toString()   //转化为字符串
        let page1=fs.readFileSync('db/page1.json').toString()   //直接将page1嵌在index里面了
        string=string.replace('{{page1}}',page1)
        response.write(string)
        response.end()
    }else if(path==='/main.js'){
        response.statusCode=200
        response.setHeader('Content-Type','text/javasscript;charset=utf-8')
        let string='public/main.js'
        response.write(fs.readFileSync(string))
        response.end()
    }else if(path==='/style.css'){
        response.statusCode=200
        response.setHeader('Content-Type','text/css;charset=utf-8')
        let string='public/style.css'
        response.write(fs.readFileSync(string))
        response.end()
    }else if(path==='/2.js'){
        response.statusCode=200
        response.setHeader('Content-Type','text/javascript;charset=utf-8')
        let string='public/2.js'
        response.write(fs.readFileSync(string))
        response.end()
    }else if(path==='/No2.html'){
        response.statusCode=200
        response.setHeader('Content-Type','text/html;charset=utf-8')
        let string='public/No2.html'
        response.write(fs.readFileSync(string))
        response.end()
    }else if(path==='/3.xml'){
        response.statusCode=200
        response.setHeader('Content-Type','text/xml;charset=utf-8')
        let string='public/3.xml'
        response.write(fs.readFileSync(string))
        response.end()
    }else if(path==='/4.json'){
        response.statusCode=200
        response.setHeader('Content-Type','application/json;charset=utf-8')
        let string='public/4.json'
        response.write(fs.readFileSync(string))
        response.end()
    }else if(path==='/page2.json'){
        response.statusCode=200
        response.setHeader('Content-Type','application/json;charset=utf-8')
        let string='db/page2.json'
        response.write(fs.readFileSync(string))
        response.end()
    }else{
        response.statusCode=404
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.write('请求路径错误')
        response.end()
    }


})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)