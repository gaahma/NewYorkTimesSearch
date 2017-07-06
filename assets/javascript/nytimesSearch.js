$(document).ready(function(){
	$("#search-article").on("click", function(){
		event.preventDefault();
		var search = $("#search-Term-input").val();
		var number = $("#records-num").val();
		var startYear = $("#start-year-input").val();
		var endYear = $("#end-year-input").val();

		console.log({search, number, startYear, endYear});
	});
});