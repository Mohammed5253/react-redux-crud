<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO employees (FirstName, LastName, Phone)
VALUES ('$data->FirstName', '$data->LastName', '$data->Phone')";
if($data->FirstName){
	$qry = $conn->query($sql);
	$last_id = mysqli_insert_id($conn);
    echo  $last_id;
}
$conn->close();
?>
