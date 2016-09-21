// Check off todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete to do
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new text
		var todoText = $(this).val();
		$(this).val("");
		// create a new li for to do
		$("ul").append("<li><span> <i class='fa fa-trash'></i> </span> " + todoText + "</li>")
	}
});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});


// // if Li is gray
// 	if ($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it black
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 		});	
// 	}
		
// 	// else
// 	else {
// 		// turn gray
	
// 	$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 		});	
// 	}	