<?php
$users=array("Saurabh"=>"123", "Nilima"=>"456", "Megha"=>"789","Teju"=>"111");
$category=array("Shows", "Multiplex", "Movies");

session_start();


$uname=$_POST["t1"];
$pwd=$_POST["t2"];

if(isset ($users[$uname]))
{
	$p=$users[$uname];
	if($p==$pwd)
		
	{
		$_SESSION["un"]=$uname;
		echo "Authorized user <br><br>";
		echo "<form action='category.php'>";
		echo "<select name='cat'> ";
		foreach($category as$c)
		{
			echo "<option value='".$c."'>".$c."</option>";
		}
		echo "</select> <br><br>";
		echo "<input type='submit' name='btn'  value='Submit'>";
		echo "</form>";
	}
	else
	{
		echo "Please re-enter details.";
		include("login.html");
	}
	
}
else
{
	echo "Please Re-enter details";
	include("login.html");
}
?>