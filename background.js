var act = "correct";
var nextId = "";
var job = "";

var dojoId = [9803820,64249408,66717238,58367118,61410596,38335324,60785960,65349258,61332207,60796160,66215638,57137423,60722314,56678005,66506554,59881437,62897418,61168865,66176833,37543223,63267032,59647843,60003042,61863374,16064520,7054900,9013840,15586190,54874033,59466093,61075637,58908513,63946801,62056410,60071414,59275512,46042298,62187020];
var dojoTop = 0;
var idList = [];
var listTop = 0;

chrome.extension.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
		if(msg.list){
			makeIdList(msg.list);
			console.log(idList.length);
			if(idList.length > 250){
				act = "cheer";
				job = "nextUser";
				nextId = getNextUser();
				var i=0
				while(idList[i]){
					console.log(idList[i]);
					i++;
				}
			}else{
				job = "nextList";
				nextId = getNextDojo();
			}
			port.postMessage({job: job,id: nextId});
		}else{
			checkURL(msg.pageurl);
			port.postMessage({job: job,id: nextId});
		}
	});
});

function checkURL(pageurl){
	if(pageurl.match('mypage')){
		if(act == "correct"){
			job = "nextList";
			nextId = getNextDojo();
		}else if(act == "cheer"){
			job = "nextUser"
			nextId = getNextUser();
		}
	}else if(pageurl.match('cheers_list')){
		job = "correct";
		nextId = "";
	}else if(pageurl.match('cheer%2Findex')){
		job = "cheer";
	}else if(pageurl.match('comment_check')){
		job = "cheer";
	}else if(pageurl.match('profile')){
		job = "nextUser";
		nextId = getNextUser();
	}else if(pageurl.match('over_cheer_count')){
		job = "goHome";
		act = "end";
	}else if(pageurl.match('error')){
		console.log('error');
		job = "goHome";
	}
}

function getNextDojo(){
	var nextdojo = dojoId[dojoTop];
	if(dojoTop < dojoId.length - 1){
		dojoTop++;
	}else{
		dojoTop = 0;
	}
	return nextdojo;
}

function getNextUser(){
	var id = idList[listTop];
	if(listTop < idList.length){
		listTop++;
	}else{
		job = "goHome";
		act = "end";
	}
	return id;
}

//correct
function makeIdList(str){
	var list = str.split(",");
	list = elemConv(list);
	for(var i=0;i<list.length;i++){
		if(!existInList(list[i])){
			idList.push(list[i]);
		}
	}
}

function elemConv(list){
	var temp = [];
	for(var i=0;i<list.length;i++){
		if(list[i]){
			temp.push(getID(list[i]));
		}
	}	
	return temp;
}

function getID(str){
	return str.match(/[0-9]+/)[0];
}

function existInList(id){
	for(var i=0;i<idList.length;i++){
		if(idList[i] == id){
			return true;
		}
	}
	return false;
}

/*
var stat = "";

function makeURL(){
	var id = getID(idList[listTop]);
	if(listTop < 249){
		listTop += 1;
	}else{
		act="end";
		alert("end");
	}
	return  "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fprofile%2Fshow%2F"+id;
}

var progress = 0;

function checkUrlCheer(pageurl){
	if(pageurl.match('mypage')){
		stat = "waitNextUser";
		next = makeURL();
	}else if(pageurl.match('profile')){
		if(progress == 0){
			stat = "waitSelectCheer";
			progress = 1;
		}else{
			stat = "waitNextUser";
			next = makeURL();
			progress = 0;
		}
	}else if(pageurl.match('error')){
		console.log('error');
		console.log(next);
		stat = "toMypage";
	}
}
		if (act == "correct"){
			
			port.postMessage(
			{action: act,factor: stat,next: next});
		}else if (act == "cheer"){
			checkUrlCheer(msg.pageurl);
			port.postMessage(
			{action:act,factor: stat,next: next});
		}else if(act == "getlist"){
			makeIdList(msg.list);
			console.log(idList.length);
			act = "correct";
			stat = "waitJump";
			next = makeDojoURL();
			if(idList.length > 250){
				act = "cheer";
				stat = "waitNextUser"
				next = makeURL();
			}
			
		}else if(act == "end"){
			
		}

function makeDojoURL(){
	var id = dojoId[dojoTop];
	if(dojoTop<dojoId.length){
		dojoTop += 1;
	}else{
		dojoTop = 0;
	}
	return  "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fprofile%2Fshow%2F"+id;
}

*/