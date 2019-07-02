var A=new Array(10,2,1,30,40,100,22,3);
var flag=0;
function search(A,num)
{
	console.log("\n"+A+"\n");
	
	var length=A.length;
	
	console.log("Array contains "+length+" elements");
	
	for(var i=0;i<length;i++)
	{
		if(A[i]==num)
		{
			flag=1;
			break;
		}
	}
	
	if(flag==1)
		console.log("\n"+num+" found at location "+(i+1));
	else
		console.log("\n"+num+" not found");
	
}
search(A,400);

/*----------------------------------------------------
C:\wamp\www\PHP48_50\Node js demos>node arraySearch.js

10,2,1,30,40,100,22,3

Array contains 8 elements

40 found at location 5

C:\wamp\www\PHP48_50\Node js demos>node arraySearch.js

10,2,1,30,40,100,22,3

Array contains 8 elements

400 not found

C:\wamp\www\PHP48_50\Node js demos>
*/