//Tony Wang

var replace_dollar = function(){
	
	$('span,strong,li').html(replace_html);
}



var replace_html = function(i,v){
	return v.replace(/\$/g, 'lool').replace(/CDN/g, '').replace(/USD/g, '');
}


$(document).ready(replace_dollar);
