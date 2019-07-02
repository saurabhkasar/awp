exports.search=function(arr)
{
	for(var i=0;i<arr.length;i++)
	{
	if(arr[i]==10)
	{
		return i;
	}	
	
}
return -1;
	
}

exports.add=function(arr1)
{
	
	sum1=0;
for(var i=0;i<arr1.length;i++)
{
	sum1+=arr1[i];	
	
}
return sum1;
}
exports.factorial=function(num)
{
   var ans=1;
   for(var i=1;i<=num;i++)
   {
       ans=ans*i;   
   }
   return ans;
}
