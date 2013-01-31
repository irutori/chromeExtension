/*not use*/

$(function() {
    $("#pursue").click(function(){
        getselect();
        });
    });
	
function getselect(){
var str="";
var get = document.getElementsByName('select');
	for(i = 0;i<get.length;i++){
		if(get[i].checked){
			str = get[i].value;
		}
	}
	if(str==""){
		alert("select please!");
	}else{
	}
}