  var form = document.getElementById('form');
  var state = document.getElementById('status');
  var selection = document.getElementById('selection');
  var game = document.getElementById('name');
  var company = document.getElementById('company');
  var intro = document.getElementById('intro');

  selection.addEventListener('change',function (event){ //绑定onchange事件监视器
	
	state.innerHTML='pls w8'; //提交时在服务器响应前提示请等待
	
	//alert(selection.value);
	
	var request = new XMLHttpRequest();  //创建新对象
	
	if(selection.value == ''){ //如果select选项值为空的时候		
      state.innerHTML='pls choose';  //初始化
	  game.innerHTML='';
	  company.innerHTML='';
	  intro.innerHTML='';
	} else {   //select选项值不为空的时候
	  request.onreadystatechange = function(event) {  //当发生selection值的改变
		
	  if(request.readyState == 4){  //参考w3 readystate参数
			
	    var data = {};  //创建用于接收后台返回值的对象
			
		try{    
		  data = JSON.parse(request.responseText);  //将返回的json对象存入data
		} catch(e){
		  console.error(e);
		}
			
		if(data.isexist){  //如果查询内容后台存在
				
		  state.innerHTML='result get';
		  game.innerHTML=data.info[0].name;    //输出存入data的后台的返回值
		  company.innerHTML=data.info[1].company;
		  intro.innerHTML=data.info[2].intro;
		} else {    //查询内容后台无存在
		  state.innerHTML='no such result';
		}
			
	  }
	}
	
	request.open("GET","onchange-test.json",true);     //参考w3 ajax 
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');   //参考w3 ajax 
	request.send('search=' + selection.value);   //参考w3 ajax 
		
	}
});










