var express = require("express");
var ejs = require("ejs");
var app = express();

app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.engine("html",ejs.renderFile);

app.use(express.static("public"));//html파일내에서 파일사용할때 public 폴더안에서 찾겠다.

var controller = require('./router/controller')(app);
console.log(require);
var server = app.listen(2003,function(){
	console.log("서버가 가동되었습니다.");
});

