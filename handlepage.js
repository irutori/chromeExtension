var url=location.href;
chrome.extension.sendRequest({pageurl: url}, function(response) {
  console.log(response.farewell);
  main();
});



function setdefault(){
	location.href="http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage%3Frnd%3D221193360";
}


//$(".comment")[0].innerHTML = "";
//main();

function main(){
	count= 0;
	setInterval("submitclick()",2000);
}
/*a [href*='Fevent_date']*/
function submitclick() {
	if(count == 3){
		setdefault();
		//document.getElementsByName('plugin')[0].click();
		//console.log("click!");
		//$("a[href*='Fevent_date']")[0].click();
		//$("a[href*='Fquests']")[1].click();
		count++;
	}else if(count<3){
		count++;
	}else{
		count=0;
	}
}