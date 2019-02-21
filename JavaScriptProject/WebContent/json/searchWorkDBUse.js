/**
 * 
 */
	
	var xhr = null;

	function getXHR() {
		xhr = new XMLHttpRequest(); //객체 생성
	}
	//first.jst(서버)로 ajax요청을 보내서 결과를 받아오는 함수

	function getData(param) {
		console.log('getData'+param);
		getXHR();
		xhr.open('get', 'searchWordDB.jsp'+param, true); //ajax통신 준비
		xhr.onreadystatechange = callback;//callback 함수 지정
		//callback() 안됨. 하면 한번 실행하고 끝남.
		//readystatechange 값이 바뀔때마다 callback 함수 실행 
		xhr.send(null); //ajax통신 요청 get 일때는 null
	}
	function callback() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			processJson();
		}
	}

	function processJson() {
		
		
		var text = xhr.responseText;//text 형식으로 받음
		var json = eval("("+text+")"); // 문자열 형식 --> json객체로 변환됨
		var msg = '';
		for(i=0;i<json.length;i++){
			msg+=json[i]+"<br>";
		}
		
		var pop=document.getElementById("popupPart");
		pop.innerHTML=msg;
		
		pop.style.display = "block";

	}
	
	function startMethod(){
		console.log('hi');
		var word = document.getElementById('word');
		var param="?word="+word.value;
		console.log(param);
		
		getData(param);
	
	}