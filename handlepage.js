var url = location.href;
var state = "";
var next = "";
var list = "";
var count = 0;

var port = chrome.extension.connect({name: "connect"});
port.postMessage({pageurl: url});

port.onMessage.addListener(function(msg) {
	if (msg.action == "correct"){
		state = msg.factor;
		next = msg.next;
		actionCorrect();
	}else if(msg.action == "cheer"){
		state = msg.factor;
		next = msg.next;
		actionCheer();
	}else if (msg.action == "getlist"){
		getURL();
		port.postMessage({list: list});
	}
});

function actionCorrect(){
	setInterval("stayCorrect()",750);
}

function stayCorrect(){
	if(count == 0){
		count++;
	}else if(count==1){
		correct();
		count++;
	}
}

function correct(){
	if(state == "waitJump"){
		jump(next);
	}else if(state == "waitMorebutton"){
		selectMorebutton();
	}else if(state == "waitGetlist"){
		getURL();
	}else if(state == "toMypage"){
		toMypage();
	}
}

function actionCheer(){
	setInterval("stayCheer()",750);
}

function stayCheer(){
	if(count == 0){
		count++;
	}else if(count==1){
		cheer();
		count++;
	}
}

function cheer() {
	if(state == "waitNextUser"){
		jump(next);
	}else if(state == "waitSelectCheer"){
		selectCheer();
	}else if(state == "waitSend"){
		cheerSubmit();
	}else if(state == "waitSubmit"){
		cheerSubmit();
	}else if(state == "toMypage"){
		toMypage();
	}
}

/* correct */
function jump(url){
	location.href = url;
}

function selectMorebutton(){
	$("a[href*='cheers_list']")[0].click();
}

function getURL(){
	list = "";
	var dom = $("a[href*='profile']");
	for(var i=0;i< 10;i++){
		list += dom[i].href.substring(101,110) + ",";
	}
	console.log("append:"+list);
}

/* cheer */
function selectCheer(){
	$("a[href*='cheer']")[0].click();
}

function cheerSubmit(){
	$("input[type*='submit']")[0].click();
}

function toMypage(){
	location.href="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage";
}