   var form = document.getElementById('form');
   var state = document.getElementById('status');

  form.addEventListener('submit', function (event) {
    
    event.preventDefault();  //阻止事件的默认行为，此处为提交事件submit，默认事件为刷新页面，此处阻止了页面刷新但是数据依旧提交

    state.innerHTML = 'pls w8';
	
	var request = new XMLHttpRequest(); //创建新对象
	
	request.onreadystatechange = function(event) {
	
	  if(request.readyState == 4){
	  
	   var data = {};
	   
	   try{
	      data = JSON.parse(request.responseText);
	   } catch(e) {
		  console.error(e);}
	  
	   if(data.success){
		  state.innerHTML = 'login success';
		} else {
		  state.innerHTML = 'login faild'; 
		}
	
	   }
  
     };
   
     request.open("POST","action.php",true);
  
     request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
  
     request.send('username=' + form.username.value + '&pw=' + form.pw.value + '&tel=' + form.tel.value);

    }
  );