var stat = "idol";
var act = "nullpo";
var cnt = 0;
var next = "";

function actChange(str){
	act = str;
	console.log(act);
}

chrome.extension.onRequest.addListener(
function(request, sender, sendResponse) {
	if(act == "cheer"){
		checkURLcheer(request.pageurl);
	}else if(act == "battle"){
		checkURLbattle(request.pageurl);
	}else if(act == "quest"){
	}
	sendResponse({state: stat,action: act,count: cnt,dojo: next});
	}
);

function checkURLbattle(pageurl){
	if(pageurl.match('mypage')){
		stat = "myPage"
		next = getNextDojo();
	}else if(pageurl.match('profile')){
		stat = "userPage";
	}else if(pageurl.match('battle_check')){
		stat = "checkPage";
	}else if(pageurl.match('flash')){
		stat = "flashPage";
		/*set cooltime 9min*/
	}
}

var progress = 0;

function checkURLcheer(pageurl){
	if(pageurl.match('mypage')){
		stat = "nextUser";
	}else if(pageurl.match('profile')){
		if(progress == 0){
			stat = "userPage";
			progress = 1;
		}else{
			stat = "nextUser";
			progress = 0;
		}
	}else if(pageurl.match('cheer%2Findex')){
		stat = "checkPage";
		cnt += 1;
	}else if(pageurl.match('comment_check')){
		stat = "submitPage";
		cnt += 1;
	}
}

function getNextDojo(){
	return "";
}