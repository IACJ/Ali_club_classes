  var form = document.getElementById('form');
  var state = document.getElementById('status');

  form.addEventListener('submit', function (event) {
    
    event.preventDefault();

    state.innerHTML = 'pls w8';
	
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(event) {
	
	  if(request.readyState == 4){
	  
	   var data = {};
	   
	   try{
	      data = JSON.parse(request.responseText);
		  
	   } catch(e){
		  console.error(e);}
	   
	   if(data.success){
	     state.innerHTML = 'login success';
	   } else {
		 state.innerHTML = 'login faild'; 
		 
		 for(i = 0 ; i < data.isempty.length ; i++){
			if(data.isempty[i].empty){
				document.getElementById(data.isempty[i].input).style.border='1px solid red';
			}
		}
	   }
	  }
   };
   
   request.open("POST","submit-test-response.json",true);
   request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
   request.send('username=' + form.username.value + '&pw=' + form.pw.value + '&tel=' + form.tel.value);
});