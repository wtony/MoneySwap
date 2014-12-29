function displaystuff(){
	var	pay = document.getElementById('pays').value;
	console.log(pay);
	var domspan2 = document.querySelector('#display2');
	if (checkvalid(pay)){
		domspan2.innerText = 'Current Pay: $' + pay +'/Hour';
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {method: "updatePay", payMsg: pay});
		});
	}
	else{
		domspan2.innerText = 'Current Pay: Invalid';
	}
	
}

function checkvalid(one){
	return one > 0;
}
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('submitbutton').addEventListener('click', displaystuff);
});
