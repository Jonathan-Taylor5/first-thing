
jQuery(document).ready(function(){

$("#add").on("click", function(){
  		var game =$("#games").val();
  		console.log(game);

  		var listitem = "<li>" + game + "</li>"
  		console.log(listitem);

  		$("#game-list").append(listitem);

  		$("#song").val("")
  	})
});	