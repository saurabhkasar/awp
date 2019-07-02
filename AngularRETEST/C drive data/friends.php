<?php

$xmlDoc = new DOMDocument();
$xmlDoc -> load("friends.xml");
print $xmlDoc->saveXML();

$root = $xmlDoc->documentElement;

$friendlist = $root->childNodes;
echo "<br><br>length=".count($friendlist);

/*foreach($friendlist as $flist)
{
	
		echo $flist->nodeName."   ".$flist->nodeValue;
	
}*/

?>