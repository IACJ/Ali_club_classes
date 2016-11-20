<?php
$success = false;
if (isset($_POST['username']) && $_POST['username'] == 'fmstephen') {
   $success = true;
}
echo json_encode(array('success' => $success));








?>