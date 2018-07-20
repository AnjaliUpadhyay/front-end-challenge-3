$(document).ready(function () {
	$("[type = submit]").click(function () {
		var name    = $("#name").val();
		var comment = $("#Comment").val();
		$("<p>"+ "<img src='Blank_Avatar.png' style='margin-right:5px;'>" +"<b>" +name+"</b>" + " commented: " + "<br>" +comment + "</p>").appendTo("div");
	});
});
