<?php
echo 'start program </br></br></br>';
$myFile = fopen("content.txt", "r") or die("Unable to open file!");
$content = fread($myFile,filesize("content.txt"));
fclose($myFile);
echo $content;
echo '</br></br></br> i must wait for the I/O to complete .... :( :(';
