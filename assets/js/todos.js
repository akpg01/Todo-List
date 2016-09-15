// check off specific task by clicking
// "on" used for current and future elements on a page
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
	// retrieves the li that the span is enclosed within
	$(this).parent().fadeOut(550, function(){
		// when fade out is done, it removes the item
		$(this).remove();
	});
	// ony the span event occurs--not other listeners
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing new to do text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});