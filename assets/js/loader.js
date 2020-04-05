var delay = 5000;

function loader(){
	$('#loading').modal('show');
	setTimeout(function(){
		$('#loading').modal('hide');
	},delay);
	
};


$(window).load(function() {
	setTimeout(function(){
		$('#loading').modal('hide');
	},delay);
});