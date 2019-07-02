/*
var arr = new Array(25,35,45,55,65,25,79,25);

 console.log("\nLenght="+arr.length);
 
 console.log("\nArray elements are : \n\n"+arr);
 */
 function search(num)
 {
	 var arr=[10,20,30,40,20,10,10,10,10,10];
	 console.log(num+"  found at positions: ");
	 for(var i=0;i<arr.length;i++)
	 {
		 if(arr[i]==num)
		 {
			 j=0;
			 var pos=[];
			 //store the locations in an array pos[]
			 pos[j]=i;
			 j++;
			 console.log(pos+"    ");
		 }
		 
	 }
	 
 }
 
 search(10);
 
 /*--------------------------------------
 C:\wamp\www\PHP48_50\Node js demos>node arrayDemo.js
10  found at positions:
0
5
6
7
8
9

C:\wamp\www\PHP48_50\Node js demos>

*/