//To read data from any type of file….

var fs=require('fs');
fs.readFile("test.txt",function(err,data){
  if(err)
  {
      console.log(err);
  }else
  {
      console.log(data.toString());
  }

});
console.log("2nd Last Line");
console.log("Last Line");
