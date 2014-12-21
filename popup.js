function displaystuff(){
	var hours = document.getElementById('hours').value;
	var pay = document.getElementById('pays').value;
	var domspan = document.querySelector('#display1');
	var domspan2 = document.querySelector('#display2');
	var domspan3 = document.querySelector('#display3');
	if (checkvalid(hours, pay)){
		domspan.innerText = 'Current Hours: ' + hours;
		domspan2.innerText = 'Current Pay: $' + pay +'/Hour';
		domspan3.innerText = 'Total per Day: $' + hours*pay;
	}
	else{
		domspan.innerText = 'Current Hours: Invalid';
		domspan2.innerText = 'Current Pay: Invalid';
		domspan3.innerText = 'Total per Day: Invalid';
	}
}

function checkvalid(one, two){
	if (one >= 0 && two >= 0){
		return true;
	}
	else{
		return false;
	}
}
document.addEventListener('DOMContentLoaded', function(){
	document.getElementById('submitbutton').addEventListener('click', displaystuff);
});
