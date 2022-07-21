let counter = 1;

$(document).ready(() => {
	$(document).click(e => {
  		let circle = $("<div class='circle'>" + counter++ + "</div>").hide().appendTo("body");
  		circle.css({"top": e.pageY-25, "left": e.pageX-25});
  		circle.show("slow");
	});
});