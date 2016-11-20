<?php



if (isset($_POST['username']) && $_POST['username'] == 'acjacj'
		&& isset($_POST['pw']) && $_POST['pw'] == '123456'){

	echo "登录成功";
}else{
	echo "登录失败";
}

