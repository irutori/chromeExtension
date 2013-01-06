//hoge();

function hoge(){
	alert("");
}

main();

function main(){
	count= 0;
	//setInterval("submitclick()",1000);
}
/*a [href*='Fevent_date']*/
function submitclick() {
	if(count == 3){
		$("a[href*='Fevent_date']")[0].click();
		count++;
	}else if(count<3){
		count++;
	}else{
		return;
	}
}