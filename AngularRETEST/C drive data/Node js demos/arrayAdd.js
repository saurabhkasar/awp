
var A=new Array(10,2,1,30,40,100,22,3);
var sum=0;
function addArrayElements(A)
{
	console.log("\n"+A+"\n");
	
	var length=A.length;
	
	console.log("Array contains "+length+" elements");
	
	for(var i=0;i<length;i++)
	{
		sum=sum+A[i];
	}
	
	console.log("\nSum of elements : "+sum);
}
addArrayElements(A);

/*------------------------------------------------------

C:\wamp\www\PHP48_50\Node js demos>node arrayAdd.js

10,2,1,30,40,100,22,3

Array contains 8 elements

Sum of elements : 208

C:\wamp\www\PHP48_50\Node js demos>

*/