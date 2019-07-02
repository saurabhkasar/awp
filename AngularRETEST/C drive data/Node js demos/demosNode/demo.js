var m1=require("./functions");

var arr=new Array(1,1,1,1,5);
var arr1=[2,2,2,2,5]

console.log("Length of arr1: "+arr.length);
console.log("Length of arr2: "+arr1.length);

var sum=m1.add(arr);
var sum1=m1.add(arr1);

//var flag=false;
console.log("Sum :"+sum);
console.log("Sum of array2:"+sum1);

var pos=m1.search(arr,5);
console.log("value found at :"+pos+" position");

var no=5;
var fact=m1.factorial(no);
console.log("Fact : "+fact);

