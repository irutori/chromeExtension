var state="";
var count = 0;
var url = location.href;
var dojo = "";

chrome.extension.sendRequest({pageurl: url}, function(response) {
	state = response.state;
	if(response.action == "quest"){
		questAction();
	}else if(response.action == "battle"){
		dojo = response.dojo;
		battleAction();
	}else if(response.action == "cheer"){
		if(count < 501){
			cheerAction();
		}
	}
});

function questAction(){
	setInterval("quest()",1000);
}

function battleAction(){
	setInterval("battle()",1000);
}

function cheerAction(){
	setInterval("cheer()",1000);
}

function quest(){
	if(count == 0){
		count++;
	}else if(count == 1){
	
	}
}

function battle() {
	if(count == 0){
		count++;
	}else if(count == 1){
		if(state == "myPage"){
			toDojo(dojo);
		}else if(state == "userPage"){
			selectBattle();
		}else if(state == "checkPage"){
			startBattle();
		}else{
			toMypage();
		}
	}
}

function cheer() {
	if(count == 0){
		count++;
	}else if(count == 1){
		if(state == "nextUser"){
			nextUser();
		}else if(state == "userPage"){
			selectCheer();
		}else if(state == "checkPage"){
			cheerSubmit();
		}else if(state == "submitPage"){
			cheerSubmit();
		}
	}
}

/* set users mypage */
function toMypage(){
	location.href="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage%3Frnd%3D221193360";
}

function nextUser(/*url*/){
	//location.href = url;
	$("a[href*='profile']")[2].click();
}

/* cheer-1 */
function selectCheer(){
	$("a[href*='cheer']")[0].click();
}

/* cheer-2,5 */
function cheerSubmit(){
	$("input[type*='submit']")[0].click();
}

function toDojo(url){
	location.href = url;
}

/* battle-1 */
function selectBattle(){
	$("a[href*='battle_check']")[0].click();
}

/* battle-2 */
function startBattle(){
	$("input[type*='submit']")[0].click();
}