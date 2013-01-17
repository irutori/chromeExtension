var state="";
var count = 0;
var url = location.href;
chrome.extension.sendRequest({pageurl: url}, function(response) {
  state = response.state;
  main();
});

function main(){
	setInterval("action()",2000);
}

function setDefault(){
	location.href="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage%3Frnd%3D221193360";
}

/* cheer-1 */
function selectCheer(){//click ouen
	$("a[href*='cheer']")[0].click();
}

/* cheer-2,5 */
function cheerSubmit(){//kakuninnsuru and sousinnsuru
	$("input[type*='submit']")[0].click();
}

/* cheer-3 */
function editComment(){//syuuseisuru
	$("input[type*='submit']")[1].click();
}

/* cheer-4 */
function returnEdit(){
	//$("input[type*='text']")[0].value="こんばんは！";
	cheerSubmit();
}
/* possibility　of　loop cheer-6(=0) */
function nextUser(){
	$("a[href*='profile']")[0].click();
}

/* battle-1 */
function selectBattle(){
	$("a[href*='battle_check']")[0].click();
}

/* battle-2 */
function startBattle(){
	$("input[type*='submit']")[0].click();
}

/* use setdef return to mypage (battle-3)*/
/* battle-4(9min~ after battle-3) */
function toNextDojo(){
	location.href = "";
}

//$(".comment")[0].innerHTML = "";
function action() {
	if(count == 3){
		//document.getElementsByName('plugin')[0].click();
		//$("a[href*='Fquests']")[1].click();
		//$("a[href*='Fevent_date']")[0].click();
		count++;
	}else if(count<3){
		count++;
	}else{
		count=0;
	}
}