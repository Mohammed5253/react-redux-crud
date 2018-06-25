<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE employees SET
firstname ='$data->firstname',  lastname ='$data->lastname',
phone ='$data->phone'
WHERE id = $data->id ";
$qry = $conn->query($sql);
echo true;

$conn->close();
?>
