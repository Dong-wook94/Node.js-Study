
module.exports = function(app){
	app.get("/",function(req,res){
		//res.send("ROOT");
		res.render("index.html");
	});
	
	app.get("/test",function(req,res){
		//res.send("TEST");
		res.render("test.html");
	});
};