<?php 

$list = [
    "0" => "spesa",
    "1" => "pranzo",
    "2" => "uscire",
    "3" => "andare in bici",
    "4" => "rilassarsi",
];

header('Content-Type: application/json');

$todo = json_encode($list);

echo $todo;
?>