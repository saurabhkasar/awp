//add
exports.add=function(m1,m2)
{
    return parseInt(m1)+parseInt(m2);
}
//percentage
exports.percentage=function(m1,m2,m3)
{	
	var total=parseInt(m1)+parseInt(m2)+parseInt(m3);
	var div=total/300;
	var pr=div*100;
	return pr;
}

