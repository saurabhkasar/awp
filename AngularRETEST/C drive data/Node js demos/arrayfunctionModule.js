
exports.addArrayElements=function(A)
{
	console.log("\n"+A+"\n");
	
	var length=A.length;
	
	console.log("Array contains "+length+" elements");
	
	var sum=0;
	for(var i=0;i<length;i++)
	{
		sum=sum+A[i];
	}
	return sum;
	
}