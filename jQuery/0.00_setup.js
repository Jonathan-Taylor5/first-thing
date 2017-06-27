jQuery(document).ready(function(){
$( "#press" ).click(function() {
  		$( "#img" ).hide();
	});
$( "#press2" ).click(function() {
  		$( "#img" ).show();
	});

$( "#press3" ).click(function() {
  		$( "#img" ).hide("explode", {pieces:16}, 2000);
	});

$( "#press4" ).click(function() {
  		$( "#img" ).fadein(5000);
	});

$( "#press5" ).click(function() {
  		$( "#img" ).fadeOut(5000);
	});
});