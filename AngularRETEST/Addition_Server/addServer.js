
var http=require("http");
var fs=require("fs");
var url=require("url");
var query=require("querystring");
var m1=require("./addPermodule");
function process_request(req,resp)
{
   var u=url.parse(req.url);
   
   resp.writeHead(200,{'Content-Type':'text/html'});
   switch(u.pathname){
    case '/':
	fs.readFile("form.html",function(err,data){
	   if(err){
		   resp.write('some error');
		   console.log(err);
		   
	   }else{
     resp.write(data);
	   resp.end();}
    });
	break;
	case '/calc':
	   var str="";
	   req.on('data',function(d)
	   {
	   str+=d;});
	   req.on('end',function()
	   {
	      console.log(str);
		  var ob=query.parse(str);
		  var sum=m1.add(ob.m1,ob.m2);
		  resp.end("<h1>Addition : "+sum+"</h1>");
	   
	   });
	   case '/per':
	   var str="";
	   req.on('data',function(d)
	   {
	   str=str+d;
	   });
	   req.on('end',function()
	   {
	      console.log(str);
		  var ob=query.parse(str);
		  var p=m1.percentage(ob.m1,ob.m2,ob.m3);
		  resp.end("<h1>Percentage : "+p+"</h1>");
	   
	   });
	   
      }
}
var server=http.createServer(process_request);
server.listen(3000);
console.log("server is running at port 3000");
