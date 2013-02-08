var url = location.href;
var job = "";
var next = "";

var port = chrome.extension.connect({name: "connect"});
port.postMessage({pageurl: url});

port.onMessage.addListener(function(msg) {
	next = msg.id;
	job = msg.job;
	delay();
});

function toListPage(id){
	location.href = "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcheer%2Fcheers_list%2F1%2F"+id;
}

function toNextUser(id){
	location.href ="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcheer%2Findex%2F"+id;
}

function toMypage(){
	location.href="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage";
}

function getURL(){
	var list = "";
	var dom = $("a[href*='profile']");
	for(var i=0;i< 10;i++){
		list += dom[i].href.substring(101,111) + ",";
	}
	port.postMessage({list: list});
}

function cheerSubmit(){
	$("input[type*='submit']")[0].click();
}

function delay(){
	setTimeout("callMethod()",1000);
}

function callMethod(){
	if(job == "nextList"){
		toListPage(next);
	}else if(job == "correct"){
		getURL();
	}else if(job == "nextUser"){
		toNextUser(next);
	}else if(job == "cheer"){
		cheerSubmit();
	}else if(job == "goHome"){
		toMypage();
	}
}