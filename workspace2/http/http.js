/**
 * 
 */
var http = require("http");
var url = require("url");


var server = http.createServer(function(req,res){
	//res.write("Hello World");
	
	var q = url.parse(req.url,true);
	
	res.writeHead(200,{"content-type":"text/html"});//200은 정상적으로 동작했다는의미
	//res.writeHead(200,{"content-type":"audio/mp3"});
	console.log(req.url);
	switch(q.pathname){
	case  "/":
		res.write("<h1>root 입니다</h1>");
		res.write("<a href ='test1?data1=111'>test1</a><br/>");
		res.write("<a href = 'test2?data2=222'>test2</a><br/>");
		break;
	case "/test1" :
		res.write("<h1>test1 입니다</h1>");
		res.write("<h1>data1 : "+ q.query.data1 + "<br/>");
		
		break;
	case "/test2" :
		res.write("<h1>test2 입니다</h1>");
		res.write("<h1>data2 : "+ q.query.data2 + "<br/>");
		break;
	}
	
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset = 'utf-8'/>");
	res.write("</head>");
	res.write("<body>");
	res.write("<h1>Node.js 웹 어플리케이션 예제 입니다.</h1>");
	res.write("</body>");
	res.write("</html>");
	res.end();
	
	
});//request는 요청 response는 응답 
// 서버는 request를 분석해 필요한 작업후 response를 다시보냄 

server.listen(1234);//port번호는 아무거나 넣어도됨.
console.log("서버가동");

//종료후에 다시 실행해야됨 아니면 포트가 먹혀있어서 오류남.


