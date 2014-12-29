//Tony Wang and Lemuel Chik :D

//global variable - deal with it
var pay = 12; //minimum wage

var replace_dollar = function(){
	var expression = /\$(<.*>)*"*'*(\s)*(&nbsp;)*[0-9]+(\.[0-9][0-9])?/;
	var $elements = $("span,li,p,strong,aside").filter(function(){
		return expression.test($(this).text());
	});
	//console.log($elements);
	$elements.each(function(index){

		var matchedString = ($(this).text()).match(new RegExp(expression.source, "g"));
		//console.log(matchedString);
		for (var i = 0; i < matchedString.length; i++)
		{
			if (matchedString[i])
				$(this).text((replace_html($(this).text(), matchedString[i])));
		}
	});
}

var calculate = function(string_untouched){
	
	string_untouched = string_untouched.replace(/\$(<.*>)*"*'*(\s)*(&nbsp;)*/, '' );
	var price_float = parseFloat(string_untouched);
	price_float = price_float / (pay);
	price_float = Math.round(price_float * 10) /10;
	return price_float.toString() + " hours";
}

var replace_html = function(v, matched_string){
	return v.replace(matched_string, calculate(matched_string)).replace(/CDN/g, '').replace(/USD/g, '');
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log("LISTEN");
		if(request.method == "updatePay") {
			pay = parseFloat(request.payMsg);
			console.log(pay);
			replace_dollar();
			location.reload();
		}
	});

$(document).ready(replace_dollar);
